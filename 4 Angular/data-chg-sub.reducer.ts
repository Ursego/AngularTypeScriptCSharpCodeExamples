import { Action, createReducer, on } from '@ngrx/store';
import * as _ from 'lodash';
import { initialDataChgSubState, IDataChgSubState } from '../states/data-chg-sub.state';
import {
  resetDataChgSubStoreAction,
  // SUBSCRIPTION:
  getDataChgSubListAction,
  getDataChgSubListSuccessAction,
  getDataChgSubSuccessAction,
  getDataChgSubServiceAccountsAction,
  getDataChgSubServiceAccountsSuccessAction,
  addDataChgSubSuccessAction,
  updateDataChgSubAction,
  updateDataChgSubSuccessAction,
  // SUBSCRIPTION'S TABLE:
  setContextDataChgSubTblAction,
  getDataChgSubTblListAction,
  getDataChgSubTblListSuccessAction,
  getDataChgSubTblSuccessAction,
  getDataChgSubTblNamesLovAction,
  getDataChgSubTblNamesLovSuccessAction,
  addDataChgSubTblSuccessAction,
  updateDataChgSubTblSuccessAction,
  deleteDataChgSubTblSuccessAction,
  // SUBSCRIPTION'S COLUMN:
  getDataChgSubColListAction,
  getDataChgSubColListSuccessAction,
  getDataChgSubColNameLovAction,
  getDataChgSubColNameLovSuccessAction,
  addDataChgSubColListSuccessAction,
  updateDataChgSubColListAction,
  updateDataChgSubColListSuccessAction,
  deleteDataChgSubColListAction,
  deleteDataChgSubColListSuccessAction
} from '../actions/data-chg-sub.action';
import { IDataChgSub, IDataChgSubTbl, IDataChgSubCol } from 'src/app/eventmodel/models/data-chg-sub.model';

const reducerFunc = createReducer(
  initialDataChgSubState,

  on(resetDataChgSubStoreAction, (state: IDataChgSubState) => ({
    ...state,
    contextDataChgSub: null,
    contextDataChgSubModified: false,
    dataChgSubTblList: null,
    dataChgSubTblListLoaded: false,
    contextDataChgSubTbl: null,
  })),

  on(getDataChgSubServiceAccountsAction, (state: IDataChgSubState) => ({
    ...state,
    dataChgSubServiceAccountsLoaded: false
  })),

  on(getDataChgSubServiceAccountsSuccessAction, (state: IDataChgSubState, { serviceAccounts }) => ({
    ...state,
    dataChgSubServiceAccounts: serviceAccounts,
    dataChgSubServiceAccountsLoaded: true
  })),

  // SUBSCRIPTION:

  on(getDataChgSubListAction, (state: IDataChgSubState) => ({
    ...state,
    dataChgSubListLoaded: false
  })),

  on(getDataChgSubListSuccessAction, (state: IDataChgSubState, { actionSubList: subList }) => ({
    ...state,
    dataChgSubList: subList,
    dataChgSubListLoaded: true
  })),

  on(getDataChgSubSuccessAction, (state: IDataChgSubState, { actionSub: sub }) => ({
    ...state,
    contextDataChgSub: sub,
    contextDataChgSubModified: false
  })),

  on(addDataChgSubSuccessAction, (state: IDataChgSubState, { actionSub: sub }) => addDataChgSub(state, sub)),

  on(updateDataChgSubAction, (state: IDataChgSubState) => ({
    ...state,
    contextDataChgSubModified: true
  })),

  on(updateDataChgSubSuccessAction, (state: IDataChgSubState, { actionSub: sub }) => updateDataChgSub(state, sub)),

  // SUBSCRIPTION TABLE:

  on(setContextDataChgSubTblAction, (state: IDataChgSubState, { actionTbl }) => ({
    ...state,
    contextDataChgSubTbl: actionTbl
  })),

  on(getDataChgSubTblListAction, (state: IDataChgSubState) => ({
    ...state,
    dataChgSubTblListLoaded: false
  })),

  on(getDataChgSubTblListSuccessAction, (state: IDataChgSubState, { actionTblList: tblList }) => ({
    ...state,
    dataChgSubTblList: tblList,
    dataChgSubTblListLoaded: true
  })),

  on(getDataChgSubTblSuccessAction, (state: IDataChgSubState, { actionTbl: tbl }) => ({
    ...state,
    dataChgSubTbl: tbl
  })),

  on(getDataChgSubTblNamesLovAction, (state: IDataChgSubState) => ({
    ...state,
    dataChgSubTblNamesLovLoaded: false
  })),

  on(getDataChgSubTblNamesLovSuccessAction, (state: IDataChgSubState, { actionLovTypes: lovTypes }) => ({
    ...state,
    dataChgSubTblNamesLov: lovTypes.map(item => item.key),
    dataChgSubTblNamesLovLoaded: true
  })),

  on(addDataChgSubTblSuccessAction, (state: IDataChgSubState, { actionTbl: tbl }) => ({
    ...state,
    contextDataChgSubTbl: tbl,
    dataChgSubTbl: tbl,
    dataChgSubTblList: [...state.dataChgSubTblList, tbl],
    dataChgSubColListLoaded: true
  })),

  on(updateDataChgSubTblSuccessAction, (state: IDataChgSubState, { actionTbl: tbl }) => ({
    ...state,
    dataChgSubTbl: tbl,
    dataChgSubTblList: state.dataChgSubTblList.map((existingTbl: IDataChgSubTbl) => existingTbl.dataChgSubTblId === tbl.dataChgSubTblId ? tbl : existingTbl)
  })),

  on(deleteDataChgSubTblSuccessAction, (state: IDataChgSubState, { actionTblId: deletedTblId }) => ({
    ...state,
    contextDataChgSubTbl: null,
    dataChgSubTblList: state.dataChgSubTblList.filter((displayedTbl: IDataChgSubTbl) => displayedTbl.dataChgSubTblId !== deletedTblId) // remove the DELETEd table
  })),

  // SUBSCRIPTION COLUMN:

  on(getDataChgSubColNameLovAction, (state: IDataChgSubState) => ({
    ...state,
    dataChgSubColNameLovLoaded: false
  })),

  on(getDataChgSubColNameLovSuccessAction, (state: IDataChgSubState, { actionColNameLov: colNameLov }) => ({
    ...state,
    dataChgSubColNameLov: colNameLov,
    dataChgSubColNameLovLoaded: true
  })),

  on(getDataChgSubColListAction, updateDataChgSubColListAction, deleteDataChgSubColListAction, (state: IDataChgSubState) => ({
    ...state,
    dataChgSubColListLoaded: false
  })),

  on(getDataChgSubColListSuccessAction, (state: IDataChgSubState, { actionColList: colList }) => ({
    ...state,
    dataChgSubColList: colList,
    dataChgSubColListLoaded: true
  })),

  on(updateDataChgSubColListSuccessAction, (state: IDataChgSubState, { actionColList: colList }) => ({
    ...state,
    dataChgSubColList: colList,
    dataChgSubColListLoaded: true
  })),

  on(addDataChgSubColListSuccessAction, (state: IDataChgSubState, { actionColList }) => addDataChgSubColList(state, actionColList)),

  on(deleteDataChgSubColListSuccessAction, (state: IDataChgSubState, { actionColNames: deletedColNames }) => ({
    ...state,
    dataChgSubColList: state.dataChgSubColList.filter((col: IDataChgSubCol) => !deletedColNames.includes(col.colName)),
    dataChgSubColListLoaded: true,
    // In the Columns tab header, refresh the Columns count which is displayed now:
    contextDataChgSubTbl: { ...state.contextDataChgSubTbl, colsCount: state.contextDataChgSubTbl.colsCount - deletedColNames.length },
    // In the parent Table in Tables List, refresh the Columns count so Columns tab header will be correct if user goes to anoter Column and then returns to this:
    dataChgSubTblList: state.dataChgSubTblList.map(
      (tbl: IDataChgSubTbl) => tbl.dataChgSubTblId === state.contextDataChgSubTbl.dataChgSubTblId ? { ...tbl, colsCount: tbl.colsCount - deletedColNames.length } : tbl
    )
  })),
);

export function dataChgSubReducer(state: IDataChgSubState | undefined, action: Action): IDataChgSubState {
  return reducerFunc(state, action);
}

function addDataChgSub(state: IDataChgSubState, dataChgSub: IDataChgSub): IDataChgSubState {
  const clonedState: IDataChgSubState = _.cloneDeep(state);
  if (!clonedState.dataChgSubList) {
    clonedState.dataChgSubList = [];
  }
  clonedState.dataChgSubList.push(dataChgSub);
  clonedState.dataChgSubList = clonedState.dataChgSubList.sort((d1, d2) => d1.dataChgSubName.localeCompare(d2.dataChgSubName));
  return clonedState;
}

function updateDataChgSub(state: IDataChgSubState, dataChgSub: IDataChgSub): IDataChgSubState {
  const clonedState: IDataChgSubState = _.cloneDeep(state);
  if (clonedState.dataChgSubList) {
    const index = clonedState.dataChgSubList.findIndex((item) => item.dataChgSubId === dataChgSub.dataChgSubId);
    if (index !== -1) {
      clonedState.dataChgSubList[index] = {
        ...clonedState.dataChgSubList[index],
        ...dataChgSub,
      }
    }

    if (clonedState.contextDataChgSub && clonedState.contextDataChgSub.dataChgSubId === dataChgSub.dataChgSubId) {
      clonedState.contextDataChgSub = {
        ...clonedState.contextDataChgSub,
        ...dataChgSub,
      }
    }
  }
  clonedState.dataChgSubList = clonedState.dataChgSubList.sort((d1, d2) => d1.dataChgSubName.localeCompare(d2.dataChgSubName));
  return clonedState;
}

function addDataChgSubColList(state: IDataChgSubState, dataChgSubColList: IDataChgSubCol[]): IDataChgSubState {
  const clonedState: IDataChgSubState = _.cloneDeep(state);
  if (!clonedState.dataChgSubColList) {
    clonedState.dataChgSubColList = [];
  }
  clonedState.dataChgSubColList.push(...dataChgSubColList);
  clonedState.dataChgSubColList = clonedState.dataChgSubColList.sort((d1, d2) => d1.colName.localeCompare(d2.colName));
  // In the Columns tab header, refresh the Columns count which is displayed now:
  clonedState.contextDataChgSubTbl.colsCount = dataChgSubColList.length;
  // In the parent Table in Tables List, refresh the Columns count so Columns tab header will be correct if user goes to anoter Column and then returns to this:
  clonedState.dataChgSubTblList.find(tbl => tbl.dataChgSubTblId === dataChgSubColList[0].dataChgSubTblId).colsCount = dataChgSubColList.length;
  return clonedState;
}
