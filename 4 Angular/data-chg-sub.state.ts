import { IDataChgSub, IDataChgSubCol, IDataChgSubServiceAccount, IDataChgSubTbl, LovType } from "src/app/eventmodel/models/data-chg-sub.model";

export interface IDataChgSubState {
  dataChgSubList: IDataChgSub[] | null;
  dataChgSubListLoaded: boolean;
  contextDataChgSub: IDataChgSub;
  contextDataChgSubModified: boolean;
  dataChgSubServiceAccounts: IDataChgSubServiceAccount[] | null;
  dataChgSubServiceAccountsLoaded: boolean;

  contextDataChgSubTbl: IDataChgSubTbl | null;
  dataChgSubTblList: IDataChgSubTbl[];
  dataChgSubTblListLoaded: boolean;
  dataChgSubTblNamesLov: string[];
  dataChgSubTblNamesLovLoaded: boolean;

  dataChgSubColList: IDataChgSubCol[];
  dataChgSubColListLoaded: boolean;
  dataChgSubColNameLov: LovType[];
  dataChgSubColNameLovLoaded: boolean;
}

export const initialDataChgSubState: IDataChgSubState = {
  dataChgSubList: null,
  dataChgSubListLoaded: false,
  contextDataChgSub: null,
  contextDataChgSubModified: false,
  dataChgSubServiceAccounts: null,
  dataChgSubServiceAccountsLoaded: false,

  dataChgSubTblList: null,
  dataChgSubTblListLoaded: false,
  contextDataChgSubTbl: null,
  dataChgSubTblNamesLov: null,
  dataChgSubTblNamesLovLoaded: false,

  dataChgSubColList: null,
  dataChgSubColListLoaded: false,
  dataChgSubColNameLov: null,
  dataChgSubColNameLovLoaded: false,
};