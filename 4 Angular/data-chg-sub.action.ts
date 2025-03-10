import { createAction, props } from "@ngrx/store";
import { IDataChgSub, IDataChgSubServiceAccount, IDataChgSubTbl, IDataChgSubCol, LovType } from "src/app/eventmodel/models/data-chg-sub.model";
import { LovTypes } from "src/app/data-event-triggers/models/data-event-model";

const sub = "Data Change Subscription";
const tbl = `${sub} Table`;
const col = `${sub} Column`;
const component = `[${sub} Component]`;

enum actionDescr {
  ResetDataChgSubStore = `${component} Reset ${sub} Store`,

  // SUBSCRIPTION:
  GetDataChgSubList = `${component} Get ${sub}s List`,
  GetDataChgSubListSuccess = `${GetDataChgSubList} Success`,
  GetDataChgSub = `${component} Get ${sub}`,
  GetDataChgSubSuccess = `${GetDataChgSub} Success`,
  GetDataChgSubServiceAccounts = `${component} Get ${sub} Service Accounts`,
  GetDataChgSubServiceAccountsSuccess = `${GetDataChgSubServiceAccounts} Success`,
  AddDataChgSub = `${component} Add ${sub}`,
  AddDataChgSubSuccess = `${AddDataChgSub} Success`,
  UpdateDataChgSub = `${component} Update ${sub}`,
  UpdateDataChgSubSuccess = `${UpdateDataChgSub} Success`,

  // SUBSCRIPTION'S TABLE:
  SetContextDataChgSubTbl = `${component} Set Context ${tbl}`,
  GetDataChgSubTblList = `${component} Get ${tbl}s`,
  GetDataChgSubTblListSuccess = `${GetDataChgSubTblList} Success`,
  GetDataChgSubTbl = `${component} Get ${tbl}`,
  GetDataChgSubTblSuccess = `${GetDataChgSubTbl} Success`,
  AddDataChgSubTbl = `${component} Add ${tbl}`,
  AddDataChgSubTblSuccess = `${AddDataChgSubTbl} Success`,
  UpdateDataChgSubTbl = `${component} Update ${tbl}`,
  UpdateDataChgSubTblSuccess = `${UpdateDataChgSubTbl} Success`,
  DeleteDataChgSubTbl = `${component} Delete ${tbl}`,
  DeleteDataChgSubTblSuccess = `${DeleteDataChgSubTbl} Success`,

  // SUBSCRIPTION'S COLUMN:
  GetDataChgSubColNameLov = `${component} Get ${col} Name LOV`,
  GetDataChgSubColNameLovSuccess = `${GetDataChgSubColNameLov} Success`,
  GetDataChgSubColList = `${component} Get ${col}s`,
  GetDataChgSubColListSuccess = `${GetDataChgSubColList} Success`,
  AddDataChgSubColList = `${component} Add ${col}s`,
  AddDataChgSubColListSuccess = `${AddDataChgSubColList} Success`,
  UpdateDataChgSubColList = `${component} Update ${col}s`,
  UpdateDataChgSubColListSuccess = `${UpdateDataChgSubColList} Success`,
  DeleteDataChgSubCol = `${component} Delete ${col}s`,
  DeleteDataChgSubColSuccess = `${DeleteDataChgSubCol} Success`,
}

export const resetDataChgSubStoreAction = createAction(actionDescr.ResetDataChgSubStore);

// SUBSCRIPTION:
export const getDataChgSubListAction = createAction(actionDescr.GetDataChgSubList);
export const getDataChgSubListSuccessAction = createAction(actionDescr.GetDataChgSubListSuccess, props<{ actionSubList: IDataChgSub[] }>());
export const getDataChgSubAction = createAction(actionDescr.GetDataChgSub, props<{ actionSubId: number }>());
export const getDataChgSubSuccessAction = createAction(actionDescr.GetDataChgSubSuccess, props<{ actionSub: IDataChgSub }>());
export const getDataChgSubServiceAccountsAction = createAction(actionDescr.GetDataChgSubServiceAccounts);
export const getDataChgSubServiceAccountsSuccessAction = createAction(actionDescr.GetDataChgSubServiceAccountsSuccess, props<{ serviceAccounts: IDataChgSubServiceAccount[] }>());
export const addDataChgSubAction = createAction(actionDescr.AddDataChgSub, props<{ actionSub: IDataChgSub }>());
export const addDataChgSubSuccessAction = createAction(actionDescr.AddDataChgSubSuccess, props<{ actionSub: IDataChgSub }>());
export const updateDataChgSubAction = createAction(actionDescr.UpdateDataChgSub, props<{ actionSub: IDataChgSub }>());
export const updateDataChgSubSuccessAction = createAction(actionDescr.UpdateDataChgSubSuccess, props<{ actionSub: IDataChgSub }>());

// SUBSCRIPTION TABLE:
export const setContextDataChgSubTblAction = createAction(actionDescr.SetContextDataChgSubTbl, props<{ actionTbl: IDataChgSubTbl | null }>());
export const getDataChgSubTblListAction = createAction(actionDescr.GetDataChgSubTblList, props<{ actionSubId: number }>());
export const getDataChgSubTblListSuccessAction = createAction(actionDescr.GetDataChgSubTblListSuccess, props<{ actionTblList: IDataChgSubTbl[] }>());
export const getDataChgSubTblAction = createAction(actionDescr.GetDataChgSubTbl, props<{ actionSubId: number, actionTblId: number }>());
export const getDataChgSubTblSuccessAction = createAction(actionDescr.GetDataChgSubTblSuccess, props<{ actionTbl: IDataChgSubTbl }>());
export const getDataChgSubTblNamesLovAction = createAction(actionDescr.GetDataChgSubTblNamesLov, props<{ actionLovName: string }>());
export const getDataChgSubTblNamesLovSuccessAction = createAction(actionDescr.GetDataChgSubTblNamesLovSuccess, props<{ actionLovTypes: LovTypes[] }>());
export const addDataChgSubTblAction = createAction(actionDescr.AddDataChgSubTbl, props<{ actionTbl: IDataChgSubTbl }>());
export const addDataChgSubTblSuccessAction = createAction(actionDescr.AddDataChgSubTblSuccess, props<{ actionTbl: IDataChgSubTbl }>());
export const updateDataChgSubTblAction = createAction(actionDescr.UpdateDataChgSubTbl, props<{ actionTbl: IDataChgSubTbl }>());
export const updateDataChgSubTblSuccessAction = createAction(actionDescr.UpdateDataChgSubTblSuccess, props<{ actionTbl: IDataChgSubTbl }>());
export const deleteDataChgSubTblAction = createAction(actionDescr.DeleteDataChgSubTbl, props<{ actionSubId: number, actionTblId: number }>());
export const deleteDataChgSubTblSuccessAction = createAction(actionDescr.DeleteDataChgSubTblSuccess, props<{ actionTblId: number }>());

// SUBSCRIPTION COLUMN:
export const getDataChgSubColNameLovAction = createAction(actionDescr.GetDataChgSubColNameLov, props<{ actionTblName: string }>());
export const getDataChgSubColNameLovSuccessAction = createAction(actionDescr.GetDataChgSubColNameLovSuccess, props<{ actionColNameLov: LovType[] }>());
export const getDataChgSubColListAction = createAction(actionDescr.GetDataChgSubColList, props<{ actionSubId: number, actionTblId: number }>());
export const getDataChgSubColListSuccessAction = createAction(actionDescr.GetDataChgSubColListSuccess, props<{ actionColList: IDataChgSubCol[] }>());
export const addDataChgSubColListAction = createAction(actionDescr.AddDataChgSubColList, props<{ actionSubId: number, actionTblId: number, actionColList: IDataChgSubCol[] }>());
export const addDataChgSubColListSuccessAction = createAction(actionDescr.AddDataChgSubColListSuccess, props<{ actionColList: IDataChgSubCol[] }>());
export const updateDataChgSubColListAction = createAction(actionDescr.UpdateDataChgSubColList, props<{ actionSubId: number, actionTblId: number, actionColList: IDataChgSubCol[] }>());
export const updateDataChgSubColListSuccessAction = createAction(actionDescr.UpdateDataChgSubColListSuccess, props<{ actionColList: IDataChgSubCol[] }>());
export const deleteDataChgSubColListAction = createAction(actionDescr.DeleteDataChgSubCol, props<{ actionSubId: number, actionTblId: number, actionColNames: string[] }>());
export const deleteDataChgSubColListSuccessAction = createAction(actionDescr.DeleteDataChgSubColSuccess, props<{ actionColNames: string[] }>());
