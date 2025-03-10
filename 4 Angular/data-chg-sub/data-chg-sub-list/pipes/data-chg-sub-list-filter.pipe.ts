import { Pipe, PipeTransform } from '@angular/core';
import { IDataChgSub } from 'src/app/eventmodel/models/data-chg-sub.model';

@Pipe({ name: 'DataChgSubListFilterPipe' })
export class DataChgSubListFilterPipe implements PipeTransform {
  transform(subList: IDataChgSub[], filterText: string): IDataChgSub[] {
    if (!subList) { return []; }
    if (!filterText) { return subList; }

    return subList.filter(sub =>
      sub.dataChgSubName.toUpperCase().includes(filterText.toUpperCase())
    );
  }
}
