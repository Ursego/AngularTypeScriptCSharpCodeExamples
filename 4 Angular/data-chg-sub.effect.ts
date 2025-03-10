import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataChgSubService } from 'src/app/eventmodel/services/data-chg-sub-services/data-chg-sub.service';
import { IDataChgSub, IDataChgSubTbl, IDataChgSubServiceAccount, IDataChgSubCol, LovType } from 'src/app/eventmodel/models/data-chg-sub.model';
import {
  // SUBSCRIPTION:
  getDataChgSubListAction,
  getDataChgSubListSuccessAction,
  getDataChgSubAction,
  getDataChgSubSuccessAction,
  getDataChgSubServiceAccountsAction,
  getDataChgSubServiceAccountsSuccessAction,
  addDataChgSubAction,
  addDataChgSubSuccessAction,
  updateDataChgSubAction,
  updateDataChgSubSuccessAction,
  // SUBSCRIPTION TABLE:
  getDataChgSubTblListAction,
  getDataChgSubTblListSuccessAction,
  getDataChgSubTblAction,
  getDataChgSubTblSuccessAction,
  getDataChgSubTblNamesLovAction,
  getDataChgSubTblNamesLovSuccessAction,
  addDataChgSubTblAction,
  addDataChgSubTblSuccessAction,
  updateDataChgSubTblAction,
  updateDataChgSubTblSuccessAction,
  deleteDataChgSubTblAction,
  deleteDataChgSubTblSuccessAction,
  // SUBSCRIPTION COLUMN:
  getDataChgSubColListAction,
  getDataChgSubColListSuccessAction,
  getDataChgSubColNameLovAction,
  getDataChgSubColNameLovSuccessAction,
  addDataChgSubColListAction,
  addDataChgSubColListSuccessAction,
  updateDataChgSubColListAction,
  updateDataChgSubColListSuccessAction,
  deleteDataChgSubColListAction,
  deleteDataChgSubColListSuccessAction,
} from '../actions/data-chg-sub.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LovTypes } from 'src/app/data-event-triggers/models/data-event-model';

@Injectable()
export class DataChgSubEffect {
  constructor(private _actions$: Actions, private _svc: DataChgSubService) {}

  getDataChgSubServiceAccounts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getDataChgSubServiceAccountsAction),
      switchMap(() => {
        return this._svc.getDataChgSubServiceAccounts().pipe(
          map((serviceAccounts: IDataChgSubServiceAccount[]) => getDataChgSubServiceAccountsSuccessAction({ serviceAccounts: serviceAccounts })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );

  // SUBSCRIPTION:

  getDataChgSubList$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getDataChgSubListAction),
      switchMap(() => {
        return this._svc.getDataChgSubList().pipe(
          map((subList: IDataChgSub[]) => getDataChgSubListSuccessAction({ actionSubList: subList })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );

  getDataChgSub$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getDataChgSubAction),
      switchMap((action) => {
        return this._svc.getDataChgSub(action.actionSubId).pipe(
          map((sub: IDataChgSub) => getDataChgSubSuccessAction({ actionSub: sub })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );

  addDataChgSub$ = createEffect(() =>
    this._actions$.pipe(
      ofType(addDataChgSubAction),
      switchMap(({ actionSub }) => {
        return this._svc.addDataChgSub(actionSub).pipe(
          map((dataChgSub: IDataChgSub) => addDataChgSubSuccessAction({ actionSub: dataChgSub })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );

  updateDataChgSub$ = createEffect(() =>
   this._actions$.pipe(
     ofType(updateDataChgSubAction),
     switchMap(({ actionSub }) => {
       return this._svc.updateDataChgSub(actionSub).pipe(
         map((dataChgSub: IDataChgSub) => updateDataChgSubSuccessAction({ actionSub: dataChgSub })),
         catchError(() => EMPTY),
       );
     }),
   ),
  );

  // SUBSCRIPTION TABLE:

  getDataChgSubTblList$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getDataChgSubTblListAction),
      switchMap((action) => {
        return this._svc.getDataChgSubTblList(action.actionSubId).pipe(
          map((tblList: IDataChgSubTbl[]) => getDataChgSubTblListSuccessAction({ actionTblList: tblList })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );

  getDataChgSubTbl$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getDataChgSubTblAction),
      switchMap((action) => {
        return this._svc.getDataChgSubTbl(action.actionSubId, action.actionSubId).pipe(
          map((tbl: IDataChgSubTbl) => getDataChgSubTblSuccessAction({ actionTbl: tbl })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );

  getDataChgSubTblNamesLov$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getDataChgSubTblNamesLovAction),
      switchMap(() => {
        return this._svc.getDataChgSubTblNamesLov().pipe(
          map((lovTypes: LovTypes[]) => getDataChgSubTblNamesLovSuccessAction({ actionLovTypes: lovTypes })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );

  addDataChgSubTbl$ = createEffect(() =>
   this._actions$.pipe(
     ofType(addDataChgSubTblAction),
     switchMap((action) => {
       return this._svc.addDataChgSubTbl(action.actionTbl).pipe(
         map((tbl: IDataChgSubTbl) => addDataChgSubTblSuccessAction({ actionTbl: tbl })),
         catchError(() => EMPTY),
       );
     }),
   ),
  );

  updateDataChgSubTbl$ = createEffect(() =>
   this._actions$.pipe(
     ofType(updateDataChgSubTblAction),
     switchMap((action) => {
       return this._svc.updateDataChgSubTbl(action.actionTbl).pipe(
         map((tbl: IDataChgSubTbl) => updateDataChgSubTblSuccessAction({ actionTbl: tbl })),
         catchError(() => EMPTY),
       );
     }),
   ),
  );

  deleteDataChgSubTbl$ = createEffect(() =>
   this._actions$.pipe(
     ofType(deleteDataChgSubTblAction),
     switchMap((action) => {
       return this._svc.deleteDataChgSubTbl(action.actionSubId, action.actionTblId).pipe(
         map(() => deleteDataChgSubTblSuccessAction( { actionTblId: action.actionTblId })),
         catchError(() => EMPTY),
       );
     }),
   ),
  );

  // SUBSCRIPTION COLUMN:

  getDataChgSubColNameLov$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getDataChgSubColNameLovAction),
      switchMap((action) => {
        return this._svc.getDataChgSubColNameLov(action.actionTblName).pipe(
          map((colNameLov: LovType[]) => getDataChgSubColNameLovSuccessAction({ actionColNameLov: colNameLov })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );

  getDataChgSubColList$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getDataChgSubColListAction),
      switchMap((action) => {
        return this._svc.getDataChgSubColList(action.actionSubId, action.actionTblId).pipe(
          map((colList: IDataChgSubCol[]) => getDataChgSubColListSuccessAction({ actionColList: colList })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );

  addDataChgSubColList$ = createEffect(() =>
    this._actions$.pipe(
      ofType(addDataChgSubColListAction),
      switchMap(({ actionSubId, actionTblId, actionColList }) => {
        return this._svc.addDataChgSubColList(actionSubId, actionTblId, actionColList).pipe(
          map((dataChgSubColList: IDataChgSubCol[]) => addDataChgSubColListSuccessAction({ actionColList: dataChgSubColList })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );

  updateDataChgSubColList$ = createEffect(() =>
    this._actions$.pipe(
      ofType(updateDataChgSubColListAction),
      switchMap(({ actionSubId, actionTblId, actionColList }) => {
        return this._svc.updateDataChgSubColList(actionSubId, actionTblId, actionColList).pipe(
          map((dataChgSubColList: IDataChgSubCol[]) => updateDataChgSubColListSuccessAction({ actionColList: dataChgSubColList })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );

  deleteDataChgSubColList$ = createEffect(() =>
    this._actions$.pipe(
      ofType(deleteDataChgSubColListAction),
      switchMap(({ actionSubId, actionTblId, actionColNames }) => {
        return this._svc.deleteDataChgSubColList(actionSubId, actionTblId, actionColNames).pipe(
          map((colNames: string[]) => deleteDataChgSubColListSuccessAction({ actionColNames: colNames })),
          catchError(() => EMPTY),
        );
      }),
    ),
  );
}
