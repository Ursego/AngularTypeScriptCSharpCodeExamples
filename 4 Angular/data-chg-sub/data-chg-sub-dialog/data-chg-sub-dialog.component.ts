import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { formatTylerDateTime, TylerDialogContent } from '@iasworld/tyler-ui';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { filter, first, map, Observable, startWith, withLatestFrom } from 'rxjs';
import { createUniqueFunction, inTheListValidator } from 'src/app/common/validators';
import { IDataChgSub, IDataChgSubServiceAccount } from 'src/app/eventmodel/models/data-chg-sub.model';
import { getDataChgSubListAction, getDataChgSubServiceAccountsAction } from 'src/app/Store/actions/data-chg-sub.action';

@Component({
  selector: 'app-data-chg-sub-dialog',
  templateUrl: './data-chg-sub-dialog.component.html',
  styleUrl: './data-chg-sub-dialog.component.scss'
})
export class DataChgSubDialogComponent implements TylerDialogContent, OnInit {
  dataChgSubFormGroup: UntypedFormGroup;
  dataChgSub: IDataChgSub;
  dataChgSubs: Array<IDataChgSub> = [];
  serviceAccounts: Array<IDataChgSubServiceAccount> = [];
  filteredServiceAccounts$: Observable<Array<IDataChgSubServiceAccount>>;

  @ViewChild('serviceAccountAutocomplete') serviceAccountAutocomplete: MatAutocomplete;

  dataChgSubs$: Observable<Array<IDataChgSub>> = this.store.select('dataChgSub', 'dataChgSubListLoaded').pipe(
    filter((dataChgSubListLoaded) => dataChgSubListLoaded),
    first(),
    withLatestFrom(this.store.select('dataChgSub', 'dataChgSubList')),
    map(([dataChgSubListLoaded, dataChgSubList]) => dataChgSubList),
  );
  serviceAccounts$: Observable<Array<IDataChgSubServiceAccount>> = this.store.select('dataChgSub', 'dataChgSubServiceAccountsLoaded').pipe(
    filter((dataChgSubServiceAccountsLoaded) => dataChgSubServiceAccountsLoaded),
    first(),
    withLatestFrom(this.store.select('dataChgSub', 'dataChgSubServiceAccounts')),
    map(([dataChgSubServiceAccountsLoaded, dataChgSubServiceAccounts]) => dataChgSubServiceAccounts),
  );

  dataChgSubsLoaded: boolean = false;
  serviceAccountsLoaded: boolean = false;
  loaded: boolean = false;

  constructor(
    private store: Store<any>,
    private fb: UntypedFormBuilder,
    @Inject('data') public data: { dataChgSub: IDataChgSub; }
  ) { }

  ngOnInit(): void {
    this.dataChgSub = _.cloneDeep(this.data.dataChgSub);
    this.loadServiceAccounts();
    this.loadDataChgSubs();
  }

  private loadServiceAccounts(): void {
    this.serviceAccounts$.subscribe((serviceAccounts) => {
      this.serviceAccounts = serviceAccounts;
      this.serviceAccountsLoaded = true;
      this.setLoaded();
    });
    this.store.dispatch(getDataChgSubServiceAccountsAction());
  }

  private loadDataChgSubs(): void {
    this.dataChgSubs$.subscribe((dataChgSubs) => {
      this.dataChgSubs = dataChgSubs;
      this.dataChgSubsLoaded = true;
      this.setLoaded();
    });
    this.store.dispatch(getDataChgSubListAction());
  }

  private setLoaded(): void {
    this.loaded = this.dataChgSubsLoaded && this.serviceAccountsLoaded;
    if (this.loaded) {
      this.createFormGroup();
    }
  }

  private createFormGroup () {
    this.dataChgSubFormGroup = this.fb.group({
      dataChgSubId: this.dataChgSub.dataChgSubId,
      dataChgSubName: [
        this.dataChgSub.dataChgSubName,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          createUniqueFunction(this.dataChgSubs, 'dataChgSubName', this.data.dataChgSub, 'dataChgSubId'),
        ],
      ],
      dataChgSubDesc: [this.dataChgSub.dataChgSubDesc, [Validators.maxLength(240)]],
      userName: [
        this.dataChgSub.userName,
        [
          Validators.required,
          createUniqueFunction(this.dataChgSubs, 'userName', this.data.dataChgSub, 'dataChgSubId'),
          inTheListValidator(this.serviceAccounts.map((serviceAccount) => serviceAccount.userName)),
        ]
      ],
      enabled: [this.dataChgSub.activeFlg],
      who: [this.dataChgSub.who],
      wen: [formatTylerDateTime(this.dataChgSub.wen)],
    });

    this.filteredServiceAccounts$ = this.dataChgSubFormGroup.get('userName').valueChanges.pipe(
      startWith(''),
      map(value => this.filterServiceAccounts(value || ''))
    );
  }

  private filterServiceAccounts(value: string): IDataChgSubServiceAccount[] {
    const filterValue = value.toLowerCase();
    return this.serviceAccounts.filter(serviceAccount => serviceAccount.userName.toLowerCase().includes(filterValue));
  }

  clearIfUserNameControlInvalid(): void {
    if (!this.serviceAccountAutocomplete.isOpen) {
      this.dataChgSubFormGroup.markAsTouched();
      const serviceAccountUserName = this.dataChgSubFormGroup.value.userName;
      if (serviceAccountUserName) {
        if (this.serviceAccounts.findIndex((serviceAccount) => serviceAccount.userName === serviceAccountUserName) === -1) {
          this.dataChgSubFormGroup.controls['userName'].patchValue('');
        } else {
          this.dataChgSub.userName = serviceAccountUserName;
        }
      } else {
        this.dataChgSubFormGroup.controls['userName'].patchValue('');
        this.dataChgSub.userName = '';
      }
    }
  }

  setServiceAccount(serviceAccountUserName: string): void {
    const serviceAccountUserId = this.serviceAccounts.find((s) => s.userName === serviceAccountUserName).userId;
    this.dataChgSub.userId = serviceAccountUserId;
    this.dataChgSub.userName = serviceAccountUserName;
    this.dataChgSubFormGroup.controls['userName'].patchValue(this.dataChgSub.userName);
  }

  isInvalid = () => !this.loaded || this.dataChgSubFormGroup.pristine || this.dataChgSubFormGroup.invalid;

  getData() {
    return {
      ...this.dataChgSub,
    };
  }

  ok?: () => void;
}
