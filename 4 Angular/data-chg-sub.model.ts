export interface IDataChgSub {
  dataChgSubId: number;
  dataChgSubName: string;
  dataChgSubDesc: string;
  userId: number;
  userName: string;
  userFullName: string;
  who: string;
  wen: Date;
  activeFlg: boolean;
}

export const EmptyDataChgSub: IDataChgSub = {
  dataChgSubId: -1,
  dataChgSubName: '',
  dataChgSubDesc: '',
  userId: -1,
  userName: '',
  userFullName: '',
  who: '',
  wen: null,
  activeFlg: true
};

export interface IDataChgSubTbl {
  dataChgSubTblId: number;
  dataChgSubId: number;
  tblName: string;
  apiPropertyName: string;
  who: string;
  wen: Date;
  colsCount?: number;
}

export interface IDataChgSubCol {
  dataChgSubTblId: number;
  colName: string;
  apiPropertyName: string;
  monitorChangeFlag: boolean;
  who: string;
  wen: Date;
}

export interface IDataChgSubColForm extends IDataChgSubCol{
  formStatus: DataChgSubColFormStatus;
}

export enum DataChgSubColFormStatus {
  Existing = 0,
  New = 1,
}

export interface IDataChgSubServiceAccount {
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
}

export const EmptyDataChgSubColForm: IDataChgSubColForm = {
  dataChgSubTblId: -1,
  colName: '',
  apiPropertyName: '',
  monitorChangeFlag: false,
  who: '',
  wen: null,
  formStatus: DataChgSubColFormStatus.New,
};

export class LovType {
  key: string;
  value: string;
}