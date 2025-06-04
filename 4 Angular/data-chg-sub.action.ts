import { createAction, props } from "@ngrx/store";
import { IDataChgSub, IDataChgSubServiceAccount, IDataChgSubTbl, IDataChgSubCol, LovType } from "src/app/eventmodel/models/data-chg-sub.model";
import { LovTypes } from "src/app/data-event-triggers/models/data-event-model";

const sub = "Data Change Subscription";
const tbl = `${sub} Table`;
const col = `${sub} Column`;
const comp = `[${sub} Component]`;

enum d { // actions "d"escriptions
  ResetDataChgSubStore = `${comp} Reset ${sub} Store`,

  // SUBSCRIPTION:
  GetDataChgSubList = `${comp} Get ${sub}s List`,
  GetDataChgSubListSuccess = `${GetDataChgSubList} Success`,
  GetDataChgSub = `${comp} Get ${sub}`,
  GetDataChgSubSuccess = `${GetDataChgSub} Success`,
  GetDataChgSubServiceAccounts = `${comp} Get ${sub} Service Accounts`,
  GetDataChgSubServiceAccountsSuccess = `${GetDataChgSubServiceAccounts} Success`,
  AddDataChgSub = `${comp} Add ${sub}`,
  AddDataChgSubSuccess = `${AddDataChgSub} Success`,
  UpdateDataChgSub = `${comp} Update ${sub}`,
  UpdateDataChgSubSuccess = `${UpdateDataChgSub} Success`,

  // SUBSCRIPTION'S TABLE:
  SetContextDataChgSubTbl = `${comp} Set Context ${tbl}`,
  GetDataChgSubTblList = `${comp} Get ${tbl}s`,
  GetDataChgSubTblListSuccess = `${GetDataChgSubTblList} Success`,
  GetDataChgSubTbl = `${comp} Get ${tbl}`,
  GetDataChgSubTblSuccess = `${GetDataChgSubTbl} Success`,
  AddDataChgSubTbl = `${comp} Add ${tbl}`,
  AddDataChgSubTblSuccess = `${AddDataChgSubTbl} Success`,
  UpdateDataChgSubTbl = `${comp} Update ${tbl}`,
  UpdateDataChgSubTblSuccess = `${UpdateDataChgSubTbl} Success`,
  DeleteDataChgSubTbl = `${comp} Delete ${tbl}`,
  DeleteDataChgSubTblSuccess = `${DeleteDataChgSubTbl} Success`,

  // SUBSCRIPTION'S COLUMN:
  GetDataChgSubColNameLov = `${comp} Get ${col} Name LOV`,
  GetDataChgSubColNameLovSuccess = `${GetDataChgSubColNameLov} Success`,
  GetDataChgSubColList = `${comp} Get ${col}s`,
  GetDataChgSubColListSuccess = `${GetDataChgSubColList} Success`,
  AddDataChgSubColList = `${comp} Add ${col}s`,
  AddDataChgSubColListSuccess = `${AddDataChgSubColList} Success`,
  UpdateDataChgSubColList = `${comp} Update ${col}s`,
  UpdateDataChgSubColListSuccess = `${UpdateDataChgSubColList} Success`,
  DeleteDataChgSubCol = `${comp} Delete ${col}s`,
  DeleteDataChgSubColSuccess = `${DeleteDataChgSubCol} Success`,
}

export const resetDataChgSubStoreAction = createAction(d.ResetDataChgSubStore);

// SUBSCRIPTION:
export const getDataChgSubListAction = createAction(d.GetDataChgSubList);
export const getDataChgSubListSuccessAction = createAction(d.GetDataChgSubListSuccess, props<{ actionSubList: IDataChgSub[] }>());
export const getDataChgSubAction = createAction(d.GetDataChgSub, props<{ actionSubId: number }>());
export const getDataChgSubSuccessAction = createAction(d.GetDataChgSubSuccess, props<{ actionSub: IDataChgSub }>());
export const getDataChgSubServiceAccountsAction = createAction(d.GetDataChgSubServiceAccounts);
export const getDataChgSubServiceAccountsSuccessAction = createAction(d.GetDataChgSubServiceAccountsSuccess, props<{ serviceAccounts: IDataChgSubServiceAccount[] }>());
export const addDataChgSubAction = createAction(d.AddDataChgSub, props<{ actionSub: IDataChgSub }>());
export const addDataChgSubSuccessAction = createAction(d.AddDataChgSubSuccess, props<{ actionSub: IDataChgSub }>());
export const updateDataChgSubAction = createAction(d.UpdateDataChgSub, props<{ actionSub: IDataChgSub }>());
export const updateDataChgSubSuccessAction = createAction(d.UpdateDataChgSubSuccess, props<{ actionSub: IDataChgSub }>());

// SUBSCRIPTION TABLE:
export const setContextDataChgSubTblAction = createAction(d.SetContextDataChgSubTbl, props<{ actionTbl: IDataChgSubTbl | null }>());
export const getDataChgSubTblListAction = createAction(d.GetDataChgSubTblList, props<{ actionSubId: number }>());
export const getDataChgSubTblListSuccessAction = createAction(d.GetDataChgSubTblListSuccess, props<{ actionTblList: IDataChgSubTbl[] }>());
export const getDataChgSubTblAction = createAction(d.GetDataChgSubTbl, props<{ actionSubId: number, actionTblId: number }>());
export const getDataChgSubTblSuccessAction = createAction(d.GetDataChgSubTblSuccess, props<{ actionTbl: IDataChgSubTbl }>());
export const addDataChgSubTblAction = createAction(d.AddDataChgSubTbl, props<{ actionTbl: IDataChgSubTbl }>());
export const addDataChgSubTblSuccessAction = createAction(d.AddDataChgSubTblSuccess, props<{ actionTbl: IDataChgSubTbl }>());
export const updateDataChgSubTblAction = createAction(d.UpdateDataChgSubTbl, props<{ actionTbl: IDataChgSubTbl }>());
export const updateDataChgSubTblSuccessAction = createAction(d.UpdateDataChgSubTblSuccess, props<{ actionTbl: IDataChgSubTbl }>());
export const deleteDataChgSubTblAction = createAction(d.DeleteDataChgSubTbl, props<{ actionSubId: number, actionTblId: number }>());
export const deleteDataChgSubTblSuccessAction = createAction(d.DeleteDataChgSubTblSuccess, props<{ actionTblId: number }>());

// SUBSCRIPTION COLUMN:
export const getDataChgSubColNameLovAction = createAction(d.GetDataChgSubColNameLov, props<{ actionTblName: string }>());
export const getDataChgSubColNameLovSuccessAction = createAction(d.GetDataChgSubColNameLovSuccess, props<{ actionColNameLov: LovType[] }>());
export const getDataChgSubColListAction = createAction(d.GetDataChgSubColList, props<{ actionSubId: number, actionTblId: number }>());
export const getDataChgSubColListSuccessAction = createAction(d.GetDataChgSubColListSuccess, props<{ actionColList: IDataChgSubCol[] }>());
export const addDataChgSubColListAction = createAction(d.AddDataChgSubColList, props<{ actionSubId: number, actionTblId: number, actionColList: IDataChgSubCol[] }>());
export const addDataChgSubColListSuccessAction = createAction(d.AddDataChgSubColListSuccess, props<{ actionColList: IDataChgSubCol[] }>());
export const updateDataChgSubColListAction = createAction(d.UpdateDataChgSubColList, props<{ actionSubId: number, actionTblId: number, actionColList: IDataChgSubCol[] }>());
export const updateDataChgSubColListSuccessAction = createAction(d.UpdateDataChgSubColListSuccess, props<{ actionColList: IDataChgSubCol[] }>());
export const deleteDataChgSubColListAction = createAction(d.DeleteDataChgSubCol, props<{ actionSubId: number, actionTblId: number, actionColNames: string[] }>());
export const deleteDataChgSubColListSuccessAction = createAction(d.DeleteDataChgSubColSuccess, props<{ actionColNames: string[] }>());
