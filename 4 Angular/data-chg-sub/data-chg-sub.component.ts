import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of, Subscription } from "rxjs";
import { EmptyDataChgSub, IDataChgSub, IDataChgSubTbl } from "../../models/data-chg-sub.model";
import { getDataChgSubListAction, getDataChgSubAction, getDataChgSubTblListAction, getDataChgSubColListAction, addDataChgSubAction, setContextDataChgSubTblAction } from "src/app/Store/actions/data-chg-sub.action";
import { TylerDialogComponent, TylerDialogConfig } from "@iasworld/tyler-ui";
import { DataChgSubDialogComponent } from "./data-chg-sub-dialog/data-chg-sub-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatTabChangeEvent } from "@angular/material/tabs";

@Component({
  selector: "app-data-chg-sub",
  templateUrl: "./data-chg-sub.component.html",
  styleUrls: ["./data-chg-sub.component.scss"]
})
export class DataChgSubComponent implements OnInit, OnDestroy {
  filterText: string = "";

  contextDataChgSub: IDataChgSub | null;
  contextDataChgSubTbl$: Observable<IDataChgSubTbl> = this._store.select("dataChgSub", "contextDataChgSubTbl");

  dataChgSubList$: Observable<IDataChgSub[]>;
  contextDataChgSub$: Observable<IDataChgSub>;
  contextDataChgSubModified$: Observable<boolean>;
  dataChgSubTblList$: Observable<IDataChgSubTbl[]>;

  private _lastSelectedSubId: number = -1;
  private _s = new Subscription();

  constructor(
    private _store: Store<any>,
    private _dialogManager: MatDialog
  ) {}

  ngOnInit() {
    this.dataChgSubList$ = this._store.select("dataChgSub", "dataChgSubList");
    this.contextDataChgSub$ = this._store.select("dataChgSub", "contextDataChgSub");
    this.contextDataChgSubModified$ = this._store.select("dataChgSub", "contextDataChgSubModified");
    this.dataChgSubTblList$ = this._store.select("dataChgSub", "dataChgSubTblList");

    this._store.dispatch(getDataChgSubListAction());

    this._s.add(this.contextDataChgSub$.subscribe((dataChgSub: IDataChgSub) => {
      this.contextDataChgSub = dataChgSub;
    }));
  }

  onSubSelected(selectedSub: IDataChgSub): void {
    if (selectedSub.dataChgSubId == this._lastSelectedSubId) return;
    this._lastSelectedSubId = selectedSub.dataChgSubId;
    this.setContexTbl(null);
    this._store.dispatch(getDataChgSubAction({ actionSubId: selectedSub.dataChgSubId }));
    this._store.dispatch(getDataChgSubTblListAction({ actionSubId: selectedSub.dataChgSubId }));
  }

  setContexTbl(tbl: IDataChgSubTbl | null) {
    this._store.dispatch(setContextDataChgSubTblAction({ actionTbl: tbl }));
  }

  onTabChange(e: MatTabChangeEvent) {
    const COLS_TAB_INDEX = 1;
    if (e.index == COLS_TAB_INDEX && this.contextDataChgSubTbl$) {
      this._s.add(this.contextDataChgSubTbl$.subscribe(tbl => {
        if (tbl) {
          this._store.dispatch(getDataChgSubColListAction({ actionSubId: tbl.dataChgSubId , actionTblId: tbl.dataChgSubTblId }));
        }
      }));
    }
  }

  addSub(): void {
    const dialogConfig: TylerDialogConfig = {
      title: $localize`:Add data change subscription label@@addDataChangeSub:Add Data Change Subscription`,
      component: DataChgSubDialogComponent,
      confirmButtonText: $localize`:Save button text for this dialog@@dialogSaveButton:Save`,
      data: { dataChgSub: EmptyDataChgSub},
    };

    this._dialogManager
      .open(TylerDialogComponent, { data: dialogConfig, })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this._store.dispatch(addDataChgSubAction({ actionSub: result }));
        }
    });
  }

  resetAll(): void {
    this.filterText = "";
    this.contextDataChgSub = null;
    this.setContexTbl(null);
  }

  ngOnDestroy = () => this._s.unsubscribe;
}
