import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Sort } from '@angular/material/sort';
import { formatTylerDateTime, sortData, TylerDialogContent } from '@iasworld/tyler-ui';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { filter, first, map, Observable, withLatestFrom } from 'rxjs';
import { inTheListValidator } from 'src/app/common/validators';
import { DataChgSubColFormStatus, EmptyDataChgSubColForm, IDataChgSubCol, IDataChgSubColForm, IDataChgSubTbl, LovType } from 'src/app/eventmodel/models/data-chg-sub.model';
import { getDataChgSubColNameLovAction } from 'src/app/Store/actions/data-chg-sub.action';

@Component({
  selector: 'app-data-chg-sub-col-dialog',
  templateUrl: './data-chg-sub-col-dialog.component.html',
  styleUrl: './data-chg-sub-col-dialog.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DataChgSubColDialogComponent implements TylerDialogContent, OnInit {
  dataChgSubColListFormGroup: UntypedFormGroup;
  originalDataChgSubColList: Array<IDataChgSubColForm> = [];
  tableColumnNames: Array<LovType> = [];
  filteredTableColumnNames$: Observable<Array<LovType>>;
  filteredTableColumnNamesArray: Array<Observable<Array<LovType>>> = [];

  @ViewChild('colNameAutocomplete') colNameAutocomplete: MatAutocomplete;

  currentInternalSort: Sort = { active: 'colName', direction: 'asc' };

  tableColumnNames$: Observable<Array<LovType>> = this.store.select('dataChgSub', 'dataChgSubColNameLovLoaded').pipe(
    filter((dataChgSubColNameLovLoaded) => dataChgSubColNameLovLoaded),
    first(),
    withLatestFrom(this.store.select('dataChgSub', 'dataChgSubColNameLov')),
    map(([dataChgSubColNameLovLoaded, dataChgSubColNameLov]) => dataChgSubColNameLov),
  );

  emptyDataChgSubCol: IDataChgSubColForm = EmptyDataChgSubColForm;
  loaded: boolean = false;

  constructor(
    private store: Store<any>,
    private fb: UntypedFormBuilder,
    @Inject('data') public data: {
      dataChgSubTbl: IDataChgSubTbl;
      dataChgSubColList: Array<IDataChgSubCol>;
    }
  ) { }

  ngOnInit (): void {
    this.originalDataChgSubColList = this.data.dataChgSubColList
      .map((dataChgSubCol: IDataChgSubCol): IDataChgSubColForm => {
        return this.convertToIDataChgSubColForm(dataChgSubCol, DataChgSubColFormStatus.Existing);
      });
    this.loadTableColumnNames();
    this.createFormGroup();
  }

  private loadTableColumnNames(): void {
    this.tableColumnNames$.subscribe((tableColumnNames) => {
      this.tableColumnNames = tableColumnNames;
      this.loaded = true;
    });
    this.store.dispatch(getDataChgSubColNameLovAction({ actionTblName: this.data.dataChgSubTbl.tblName }));
  }

  private createFormGroup(): void {
    this.dataChgSubColListFormGroup = this.fb.group({
      dataChgSubColFormArray: this.fb.array([]),
    });

    this.originalDataChgSubColList.forEach(dataChgSubCol => {
      this.addDataChgSubCol(dataChgSubCol);
    });
  }

  debounceFilterTableColumnNames = _.debounce(this.filterTables, 1);
  filterTables(value: string, index: number): void {
    if (!value) {
      this.filteredTableColumnNamesArray[index] = this.tableColumnNames$;
    } else {
      const lowerCaseValue = value.toLowerCase();
      this.filteredTableColumnNamesArray[index] = this.tableColumnNames$.pipe(
        map((tables) => (tables || []).filter((table) => table.value.toLowerCase().includes(lowerCaseValue))),
      );
    }
  }

  get dataChgSubColFormArray(): UntypedFormArray {
    return this.dataChgSubColListFormGroup.get('dataChgSubColFormArray') as UntypedFormArray
  }

  addDataChgSubCol(dataChgSubCol: IDataChgSubColForm): void {
    const dataChgSubColFormGroup = this.createDataChgSubColFormGroup(dataChgSubCol);
    this.dataChgSubColFormArray.push(dataChgSubColFormGroup);
  }

  deleteDataChgSubCol(index: number): void {
    this.dataChgSubColFormArray.removeAt(index);
    this.dataChgSubColListFormGroup.markAsDirty();
  }

  sortDataChgSubColFormArray(sort: Sort) {
    let datachgSubCols: IDataChgSubColForm[] = (this.dataChgSubColFormArray.controls as UntypedFormGroup[])
      .map((formGroup: UntypedFormGroup): IDataChgSubColForm => {
        return this.createDataChgSubCol(formGroup);
      });

    const sortedDatachgSubCols: IDataChgSubColForm[] = sortData(sort, datachgSubCols);

    let sortedDataChgSubColsFormArray: UntypedFormGroup[] = sortedDatachgSubCols
      .map((dataChgSubCol: IDataChgSubColForm): UntypedFormGroup => {
        return this.createDataChgSubColFormGroup(dataChgSubCol);
      });

    this.dataChgSubColListFormGroup.setControl('dataChgSubColFormArray', this.fb.array(sortedDataChgSubColsFormArray));
    this.filteredTableColumnNamesArray = [];
    this.currentInternalSort = sort;
  }

  private createDataChgSubColFormGroup (dataChgSubCol: IDataChgSubColForm) {
    const nameValidators = [Validators.required, this.uniqueColumnValidator()];
    if (dataChgSubCol.formStatus == DataChgSubColFormStatus.New) {
      nameValidators.push(inTheListValidator(this.tableColumnNames.map((tableColumnName) => tableColumnName.value)));
      // Add only to new records since in existing records the field is disabled and has no LOV - that would cause "Column name is not valid"
    }

    return this.fb.group({
      dataChgSubTblId: this.data.dataChgSubTbl.dataChgSubTblId,
      colName: [dataChgSubCol.colName, nameValidators],
      apiPropertyName: [dataChgSubCol.apiPropertyName, Validators.maxLength(30)],
      monitorChangeFlag: [dataChgSubCol.monitorChangeFlag],
      who: [dataChgSubCol.who],
      wen: [formatTylerDateTime(dataChgSubCol.wen)],
      formStatus: [dataChgSubCol.formStatus],
    });
  }

  private uniqueColumnValidator (): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (typeof control.value !== 'string' || !control.value) {
        return null;
      }

      const columnName = control.value.toLowerCase();
      const count = (this.dataChgSubColFormArray.controls as UntypedFormGroup[])
        .filter((formGroup: UntypedFormGroup) => formGroup.value.colName.toLowerCase() === columnName)
        .length;

      if (count > 1) {
        return { uniqueColumn: true };
      }

      return null;
    };
  }

  private createDataChgSubCol (formGroup: UntypedFormGroup): IDataChgSubColForm {
    return {
      dataChgSubTblId: formGroup.get('dataChgSubTblId')?.value,
      colName: formGroup.get('colName')?.value ?? '',
      apiPropertyName: formGroup.get('apiPropertyName')?.value ?? '',
      monitorChangeFlag: formGroup.get('monitorChangeFlag')?.value ?? false,
      who: formGroup.get('who')?.value ?? '',
      wen: formGroup.get('wen')?.value ?? Date.now(),
      formStatus: formGroup.get('formStatus')?.value,
    };
  }

  clearIfColNameControlInvalid(index: number): void {
    if (!this.colNameAutocomplete.isOpen) {
      this.dataChgSubColListFormGroup.markAsTouched();
      const columnName = (this.dataChgSubColFormArray.at(index) as UntypedFormGroup).value.colName.toLowerCase();
      if (columnName) {
        const columnIndex = this.tableColumnNames.findIndex((s) => s.value.toLowerCase() === columnName);
        if (columnIndex === -1) {
          (this.dataChgSubColFormArray.at(index) as UntypedFormGroup).controls['colName'].patchValue('');
        } else{
          (this.dataChgSubColFormArray.at(index) as UntypedFormGroup).controls['colName'].patchValue(this.tableColumnNames[columnIndex].value);
        }
      } else {
        (this.dataChgSubColFormArray.at(index) as UntypedFormGroup).controls['colName'].patchValue('');
      }
    }
  }

  private convertToIDataChgSubColForm(dataChgSubCol: IDataChgSubCol, formStatus: DataChgSubColFormStatus): IDataChgSubColForm {
    return {
      ...dataChgSubCol,
      formStatus: formStatus,
    };
  }

  isInvalid = () => !this.loaded || this.dataChgSubColListFormGroup.pristine || this.dataChgSubColListFormGroup.invalid;

  getData() {
    const fullDataChgSubColFormList: IDataChgSubColForm[] = (this.dataChgSubColFormArray.controls as UntypedFormGroup[])
      .map((formGroup: UntypedFormGroup): IDataChgSubColForm => {
        return this.createDataChgSubCol(formGroup);
      });

    const fullDataChgSubColList: IDataChgSubCol[] = fullDataChgSubColFormList as IDataChgSubCol[];

    const newDataChgSubColList: IDataChgSubCol[] = fullDataChgSubColFormList
      .filter((dataChgSubCol: IDataChgSubColForm) =>
        // get new records that were not deleted from original list and then added back again
        dataChgSubCol.formStatus === DataChgSubColFormStatus.New && this.originalDataChgSubColList.findIndex((col) => col.colName === dataChgSubCol.colName) === -1
      ) as IDataChgSubCol[];

    const editedDataChgSubColList: IDataChgSubCol[] = fullDataChgSubColFormList
      .filter((dataChgSubCol: IDataChgSubColForm) =>
        {
          // get records where the editable columns are different in curr and orig sets
          const originalCol = this.originalDataChgSubColList.find((col) => col.formStatus === DataChgSubColFormStatus.Existing && col.colName === dataChgSubCol.colName);
          return (originalCol && (originalCol.apiPropertyName !== dataChgSubCol.apiPropertyName || originalCol.monitorChangeFlag !== dataChgSubCol.monitorChangeFlag));
        }
      ) as IDataChgSubCol[];

    const deletedColNames: string[] = this.originalDataChgSubColList
      .filter((dataChgSubCol: IDataChgSubColForm) =>
        // get columns which are in original columns but not anymore in existing columns
        dataChgSubCol.formStatus === DataChgSubColFormStatus.Existing && fullDataChgSubColFormList.findIndex((col) => col.colName === dataChgSubCol.colName) === -1
      )
      .map((dataChgSubCol: IDataChgSubColForm) => dataChgSubCol.colName);

    return {
      fullDataChgSubColList: fullDataChgSubColList,
      newDataChgSubColList: newDataChgSubColList,
      editedDataChgSubColList: editedDataChgSubColList,
      deletedColNames: deletedColNames
    };
  }

  ok?: () => void;
}
