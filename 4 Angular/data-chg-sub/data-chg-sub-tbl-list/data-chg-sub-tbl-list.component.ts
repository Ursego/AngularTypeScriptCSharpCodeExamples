import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { TylerTableColumnDefinition, TylerTableAction, TylerDialogComponent, TylerDialogConfig, TylerDialogSize } from '@iasworld/tyler-ui';
import { IDataChgSubTbl } from '../../../models/data-chg-sub.model';
import { DataChgSubTblDialogComponent } from '../data-chg-sub-tbl-dialog/data-chg-sub-tbl-dialog.component';
import { addDataChgSubTblAction, updateDataChgSubTblAction, deleteDataChgSubTblAction } from 'src/app/Store/actions/data-chg-sub.action';

@Component({
  selector: "app-data-chg-sub-tbl-list",
  templateUrl: "./data-chg-sub-tbl-list.component.html",
  styleUrls: ["./data-chg-sub-tbl-list.component.scss"]
})
export class DataChgSubTblListComponent implements OnInit {
  @Input() contextDataChgSubId: number;
  @Output() readonly tblSelectedEmitter = new EventEmitter<IDataChgSubTbl | null>();

  private _dataChgSubTblList: IDataChgSubTbl[] = [];
  dataChgSubTblList$: Observable<IDataChgSubTbl[]> = this._store.select("dataChgSub", "dataChgSubTblList");
  dataChgSubTblListLoaded$: Observable<boolean> = this._store.select("dataChgSub", "dataChgSubTblListLoaded");

  private _s = new Subscription();
  currentSort: Sort = { active: "tblName", direction: "asc" };

  tylerColumns: TylerTableColumnDefinition[] = [
    { keyName: "tblName", name: $localize`:@@name:Name`, width: 260, singleLine: true },
    { keyName: "apiPropertyName", name: $localize`:@@apiPropertyName:API Property Name`, width: 260, singleLine: true },
    { keyName: "who", name: $localize`:@@whoLabel:Changed By`, width: 200, singleLine: true },
    { keyName: "wen", name: $localize`:@@wenLabel:Changed On`, dataType: "dateTime", width: 150, singleLine: true },
  ];

  tylerRowActions: TylerTableAction[] = [
    { text: "edit", tooltip: $localize`:@@editIconTooltip:Edit`, action: (tbl: IDataChgSubTbl) => this.saveTbl(tbl) },
    { text: "delete", tooltip: $localize`:@@deleteTooltip:Delete`, action: (tbl: IDataChgSubTbl) => this.deleteTbl(tbl) },
  ];

  constructor(private _store: Store<any>, private _dialogManager: MatDialog) {}

  ngOnInit(): void {
    this._s.add(this.dataChgSubTblList$.subscribe((array: IDataChgSubTbl[]) => this._dataChgSubTblList = array));
  }

  onTblSelected(tbl: IDataChgSubTbl) {
    this.tblSelectedEmitter.emit(tbl);
  }

  onTblDeselected() {
    this.tblSelectedEmitter.emit(null);
  }

  addTbl() {
    const emptyTbl: IDataChgSubTbl = {
      dataChgSubTblId: -1,
      dataChgSubId: this.contextDataChgSubId,
      tblName: null,
      apiPropertyName: null,
      who: null,
      wen: null
    };
    this.saveTbl(emptyTbl);
  }

  saveTbl(tbl: IDataChgSubTbl) {
    const dialogConfig: TylerDialogConfig = {
      title: (tbl.dataChgSubTblId == -1) ? $localize`:@@addSubscriptionTable:Add Subscription Table` : $localize`:@@editSubscriptionTable:Edit Subscription Table`,
      component: DataChgSubTblDialogComponent,
      size: TylerDialogSize.Medium,
      confirmButtonText: $localize`:@@dialogSaveButton:Save`,
      data: { origTbl: tbl, dataChgSubTblList: this._dataChgSubTblList },
    };
    this._dialogManager
      .open(TylerDialogComponent, { data: dialogConfig, })
      .afterClosed()
      .subscribe((changedTbl: IDataChgSubTbl) => {
        if (!changedTbl) return;
        let action = (tbl.dataChgSubTblId == -1) ? addDataChgSubTblAction : updateDataChgSubTblAction;
        this._store.dispatch(action({ actionTbl: changedTbl }));
    });
  }

  deleteTbl(tbl: IDataChgSubTbl) {
    const config: TylerDialogConfig = {
      title: $localize`:@@deleteSubTbl:Delete Subscription Table`,
      isDelete: true,
      message: (tbl.colsCount ?? 0) > 0
        ? $localize`:@@deleteTblWithColWarning:Are you sure you want to delete table <b>${tbl.tblName}</b>?<br />All associated columns records will also be deleted.`
        : $localize`:@@deleteTblWarning:Are you sure you want to delete table <b>${tbl.tblName}</b>?`,
      confirmButtonText: $localize`:delete button on a confirmation dialog@@confirmDeleteButton:Delete`,
    };
    const _dialog = this._dialogManager.open(TylerDialogComponent, { data: config });
    _dialog.beforeClosed().subscribe((data) => {
      if (!data) return;
      this._store.dispatch(deleteDataChgSubTblAction({ actionSubId: tbl.dataChgSubId, actionTblId: tbl.dataChgSubTblId }));
    });
  }

  ngOnDestroy = () => this._s.unsubscribe;
}
