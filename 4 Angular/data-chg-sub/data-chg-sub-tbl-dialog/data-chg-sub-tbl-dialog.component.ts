import { Component, Inject, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { TylerDialogContent } from '@iasworld/tyler-ui';
import * as _ from 'lodash';
import { createUniqueFunction, inTheListValidator } from 'src/app/common/validators';
import { IDataChgSubTbl } from 'src/app/eventmodel/models/data-chg-sub.model';
import { getDataChgSubTblNamesLovAction } from 'src/app/Store/actions/data-chg-sub.action';

@Component({
  selector: 'app-data-chg-sub-tbl-dialog',
  templateUrl: './data-chg-sub-tbl-dialog.component.html',
  styleUrl: './data-chg-sub-tbl-dialog.component.scss'
})
export class DataChgSubTblDialogComponent implements TylerDialogContent, OnInit, OnDestroy {
  tbl: IDataChgSubTbl;
  tblFormGroup: UntypedFormGroup;
  tblNameControl: AbstractControl<string | null>;
  private _s = new Subscription();

  // Name LOV:
  private _namesLov: string[];
  private _namesLov$: Observable<string[]> = this._store.select('dataChgSub', 'dataChgSubTblNamesLov');
  private _namesLovLoaded: boolean;
  namesLovLoaded$: Observable<boolean> = this._store.select('dataChgSub', 'dataChgSubTblNamesLovLoaded');
  filteredNamesLov$: Observable<string[]>;
  @ViewChild('tblNameAutocomplete') tblNameAutocomplete: MatAutocomplete;

  constructor(
    private _store: Store<any>,
    private _fb: UntypedFormBuilder,
    @Inject('data') public data: { origTbl: IDataChgSubTbl, dataChgSubTblList: IDataChgSubTbl[] }
  ) {}

  ngOnInit(): void {
    this.tbl = _.cloneDeep(this.data.origTbl);
    this._store.dispatch(getDataChgSubTblNamesLovAction({ actionLovName: 'IAS_DATA_CHG_MONITOR_TBLE' }));
    this._s.add(this.namesLovLoaded$.subscribe((variable: boolean) => this._namesLovLoaded = variable));
    this._s.add(this._namesLov$.subscribe((array: string[]) => {
      if (!array) return;
      this._namesLov = array; // populate _namesLov before calling createFormGroup() where it is consumed
      this.createFormGroup();
      this.filteredNamesLov$ = this.tblNameControl.valueChanges.pipe(
        startWith(''),
        map((value: string) => this.filterNamesLov(value || ''))
      );
    }));
  }

  private createFormGroup(): void {
    const nameValidators = (this.tbl.dataChgSubTblId !== -1) ? [] : [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      inTheListValidator(this._namesLov),
      createUniqueFunction(this.data.dataChgSubTblList, 'tblName', this.data.origTbl , 'dataChgSubTblId'),
    ];
    this.tblFormGroup = this._fb.group({
      dataChgSubTblId: this.tbl.dataChgSubTblId,
      tblName: [this.tbl.tblName, nameValidators],
      apiPropertyName: [this.tbl.apiPropertyName, [Validators.maxLength(30)]],
      who: this.tbl.who,
      wen: this.tbl.wen,
    });
    this.tblNameControl = this.tblFormGroup.get('tblName');
  }

  private filterNamesLov(enteredName: string): string[] {
    if (!enteredName) return this._namesLov;
    return this._namesLov.filter((tblName: string) => tblName.toUpperCase().includes(enteredName.toUpperCase()));
  }

  onNamesLovOptionSelected(selectedName: string): void {
    this.tbl.tblName = selectedName;
    this.tblFormGroup.controls['tblName'].patchValue(selectedName);
  }

  transformNameToUpperCase = () => this.tblNameControl.setValue((this.tblNameControl.value || '').toUpperCase(), { emitEvent: false });

  isInvalid = () => !this._namesLovLoaded || this.tblFormGroup.pristine || this.tblFormGroup.invalid;

  getData = () => ({ ...this.tbl });

  ngOnDestroy = () => this._s.unsubscribe;
}
