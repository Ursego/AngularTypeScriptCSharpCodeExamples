import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IDataChgSub } from "src/app/eventmodel/models/data-chg-sub.model";

@Component({
  selector: "app-data-chg-sub-list",
  templateUrl: "./data-chg-sub-list.component.html",
  styleUrls: ["./data-chg-sub-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataChgSubListComponent implements OnInit {
  @Output() readonly subSelectedEmitter: EventEmitter<IDataChgSub> = new EventEmitter();
  @Input() dataChgSubList: IDataChgSub[];
  dataChgSubListLoaded$: Observable<boolean>;

  private _filterText: string | null;
  @Input() get filterText() { return this._filterText; }
  set filterText(value: string | null) {
    this._filterText = value;
    this._selectedSub = null;
  }

  private _selectedSub: IDataChgSub | null;
  get selectedSub() { return this._selectedSub; }
  set selectedSub(value: IDataChgSub | null) { this._selectedSub = value; }

  constructor(private _store: Store<any>, public changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dataChgSubListLoaded$ = this._store.select("dataChgSub", "dataChgSubListLoaded");
  }

  getItemClass(sub: IDataChgSub): { selected: boolean } {
    return { selected: this.selectedSub?.dataChgSubId === sub?.dataChgSubId };
  }

  onItemClicked(sub: IDataChgSub): void {
    this.selectedSub = sub;
    this.subSelectedEmitter.emit(sub);
  }
}
