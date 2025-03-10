import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/app/common/navigation';
import { Observable } from 'rxjs';
import { IDataChgSub, IDataChgSubServiceAccount, IDataChgSubTbl, IDataChgSubCol, LovType } from '../../models/data-chg-sub.model';
import { LovTypes } from 'src/app/data-event-triggers/models/data-event-model';

@Injectable({ providedIn: 'root', })
export class DataChgSubService {
  private readonly _url = `${baseUrl}/api/admin/data-change-subscriptions`;
  private _baseLovUrl = `${baseUrl}/api/admin/ac/aclov`;

  constructor(private http: HttpClient) {}

  // SUBSCRIPTION:

  getDataChgSubList(): Observable<IDataChgSub[]> {
    return this.http.get<IDataChgSub[]>(this._url);
  }

  getDataChgSub(subId: number): Observable<IDataChgSub> {
    return this.http.get<IDataChgSub>(`${this._url}/${subId}`);
  }

  getDataChgSubServiceAccounts(): Observable<IDataChgSubServiceAccount[]> {
    return this.http.get<IDataChgSubServiceAccount[]>(`${baseUrl}/api/admin/data-change-subscription-service-accounts`);
  }

  addDataChgSub(dataChgSub: IDataChgSub): Observable<IDataChgSub> {
    return this.http.post<IDataChgSub>(this._url, dataChgSub);
  }

  updateDataChgSub(dataChgSub: IDataChgSub): Observable<IDataChgSub> {
    return this.http.put<IDataChgSub>(`${this._url}/${dataChgSub.dataChgSubId}`, dataChgSub);
  }

  // SUBSCRIPTION TABLE:

  getDataChgSubTblList(subId: number): Observable<IDataChgSubTbl[]> {
    return this.http.get<IDataChgSubTbl[]>(`${this._url}/${subId}/tables`);
  }

  getDataChgSubTbl(subId: number, tblId: number): Observable<IDataChgSubTbl> {
    return this.http.get<IDataChgSubTbl>(`${this._url}/${subId}/tables/${tblId}`);
  }

  getDataChgSubTblNamesLov(): Observable<LovTypes[]> {
    return this.http.get<LovTypes[]>(`${baseUrl}/api/admin/ac/aclov/IAS_DATA_CHG_MONITOR_TBLE`); // calls: PT > LovController.cs > GetLovByNameAndChild() > MT > DataChgMonitorRepository.cs > GetLov()
  }

  addDataChgSubTbl(tbl: IDataChgSubTbl): Observable<IDataChgSubTbl> {
    return this.http.post<IDataChgSubTbl>(`${this._url}/${tbl.dataChgSubId}/tables`, tbl)
  }

  updateDataChgSubTbl(tbl: IDataChgSubTbl): Observable<IDataChgSubTbl> {
    return this.http.put<IDataChgSubTbl>(`${this._url}/${tbl.dataChgSubId}/tables/${tbl.dataChgSubTblId}/`, tbl);
  }

  deleteDataChgSubTbl(subId: number, tblId: number): Observable<void> {
    return this.http.delete<void>(`${this._url}/${subId}/tables/${tblId}/`);
  }

  // SUBSCRIPTION COLUMN:

  getDataChgSubColNameLov(tableName: string): Observable<LovType[]> {
    return this.http.get<LovType[]>(`${this._baseLovUrl}/ias_columns/${tableName}`);
  }

  getDataChgSubColList(subId: number, tblId: number): Observable<IDataChgSubCol[]> {
    return this.http.get<IDataChgSubCol[]>(`${this._url}/${subId}/tables/${tblId}/columns`);
  }

  addDataChgSubColList(subId: number, tblId: number, dataChgSubColList: IDataChgSubCol[]): Observable<IDataChgSubCol[]> {
    return this.http.post<IDataChgSubCol[]>(`${this._url}/${subId}/tables/${tblId}/bulk/columns`, dataChgSubColList);
  }

  updateDataChgSubColList(subId: number, tblId: number, dataChgSubColList: IDataChgSubCol[]): Observable<IDataChgSubCol[]> {
    return this.http.put<IDataChgSubCol[]>(`${this._url}/${subId}/tables/${tblId}/bulk/columns`, dataChgSubColList);
  }

  deleteDataChgSubColList(subId: number, tblId: number, colNameList: string[]): Observable<string[]> {
    return this.http.delete<string[]>(`${this._url}/${subId}/tables/${tblId}/bulk/columns`, { body: colNameList });
  }
}

