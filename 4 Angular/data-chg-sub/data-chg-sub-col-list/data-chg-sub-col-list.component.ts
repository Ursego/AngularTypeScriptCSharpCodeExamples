import { Component, Input, OnInit } from '@angular/core';
import { filter, first, map, Observable, withLatestFrom } from 'rxjs';
import { Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { TylerDialogComponent, TylerDialogConfig, TylerDialogSize, TylerTableColumnDefinition } from '@iasworld/tyler-ui';
import { IDataChgSubCol, IDataChgSubTbl } from '../../../models/data-chg-sub.model';
import { DataChgSubColDialogComponent } from './data-chg-sub-col-dialog/data-chg-sub-col-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { addDataChgSubColListAction, updateDataChgSubColListAction, deleteDataChgSubColListAction } from 'src/app/Store/actions/data-chg-sub.action';

@Component({
  selector: "app-data-chg-sub-col-list",
  templateUrl: "./data-chg-sub-col-list.component.html",
  styleUrls: ["./data-chg-sub-col-list.component.scss"]
})
export class DataChgSubColListComponent implements OnInit {
  @Input() dataChgSubTbl: IDataChgSubTbl;

  dataChgSubColList: IDataChgSubCol[] = [];
  dataChgSubColList$: Observable<IDataChgSubCol[]> = this._store.select('dataChgSub', 'dataChgSubColListLoaded').pipe(
    filter((dataChgSubColListLoaded) => dataChgSubColListLoaded),
    first(),
    withLatestFrom(this._store.select('dataChgSub', 'dataChgSubColList')),
    map(([dataChgSubColListLoaded, dataChgSubColList]) => this.dataChgSubColList = dataChgSubColList),
  );
  dataChgSubColListLoaded$: Observable<boolean>;

  currentSort: Sort = { active: "colName", direction: "asc" };

  constructor(private _store: Store<any>, private _dialogManager: MatDialog) {}

  tylerColumns: TylerTableColumnDefinition[] = [
    { keyName: "colName", name: $localize`:@@name:Name`, width: 260, singleLine: true },
    { keyName: "apiPropertyName", name: $localize`:@@apiPropertyName:API Property Name`, width: 260, singleLine: true },
    { keyName: "monitorChangeFlag", name: $localize`:@@monitorChangeFlag:Monitor Change Flag`, dataType: "checkmark", width: 230 },
    { keyName: "who", name: $localize`:@@whoLabel:Changed By`, width: 200, singleLine: true },
    { keyName: "wen", name: $localize`:@@wenLabel:Changed On`, dataType: "dateTime", width: 150, singleLine: true },
  ];

  ngOnInit(): void {
    this.dataChgSubColListLoaded$ = this._store.select("dataChgSub", "dataChgSubColListLoaded");
  }

  manageCols() {
    const dialogConfig: TylerDialogConfig = {
      title: $localize`:Manage table columns label@@manageTableColumns:Manage ${this.dataChgSubTbl.tblName} Columns`,
      size: TylerDialogSize.ExtraLarge,
      component: DataChgSubColDialogComponent,
      confirmButtonText: $localize`:Save button text for this dialog@@dialogSaveButton:Save`,
      data: {
        dataChgSubTbl: this.dataChgSubTbl,
        dataChgSubColList: this.dataChgSubColList,
      },
    };

    this._dialogManager
      .open(TylerDialogComponent, { data: dialogConfig, })
      .afterClosed()
      .subscribe((result) => {
        if (result.deletedColNames?.length > 0) {
          this._store.dispatch(deleteDataChgSubColListAction({
            actionSubId: this.dataChgSubTbl.dataChgSubId,
            actionTblId: this.dataChgSubTbl.dataChgSubTblId,
            actionColNames: result.deletedColNames,
          }));
        }
        if (result.editedDataChgSubColList?.length > 0) {
          this._store.dispatch(updateDataChgSubColListAction({
            actionSubId: this.dataChgSubTbl.dataChgSubId,
            actionTblId: this.dataChgSubTbl.dataChgSubTblId,
            actionColList: result.editedDataChgSubColList,
          }));
        }
        if (result.newDataChgSubColList?.length > 0) {
          this._store.dispatch(addDataChgSubColListAction({
            actionSubId: this.dataChgSubTbl.dataChgSubId,
            actionTblId: this.dataChgSubTbl.dataChgSubTblId,
            actionColList: result.newDataChgSubColList,
          }));
        }
    });
  }
}
