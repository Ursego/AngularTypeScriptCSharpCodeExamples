import { Component, Input } from '@angular/core';
import { IDataChgSub } from '../../../models/data-chg-sub.model';
import { TylerDialogComponent, TylerDialogConfig } from '@iasworld/tyler-ui';
import { DataChgSubDialogComponent } from '../data-chg-sub-dialog/data-chg-sub-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { updateDataChgSubAction } from 'src/app/Store/actions/data-chg-sub.action';

@Component({
  selector: 'app-data-chg-sub-card',
  templateUrl: './data-chg-sub-card.component.html',
  styleUrls: ['./data-chg-sub-card.component.scss'],
})
export class DataChgSubCardComponent {
  @Input() contextDataChgSub: IDataChgSub;

  constructor(
    private _store: Store<any>,
    private _dialogManager: MatDialog
  ) {}

  editSub(): void {
    if (!this.contextDataChgSub) return;
    const dialogConfig: TylerDialogConfig = {
      title: $localize`:Edit data change subscription label@@editDataChangeSub:Edit Data Change Subscription`,
      component: DataChgSubDialogComponent,
      confirmButtonText: $localize`:Save button text for this dialog@@dialogSaveButton:Save`,
      data: { dataChgSub: this.contextDataChgSub},
    };

    this._dialogManager
      .open(TylerDialogComponent, { data: dialogConfig, })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this._store.dispatch(updateDataChgSubAction({ actionSub: result }));
        }
    });
  }
}
