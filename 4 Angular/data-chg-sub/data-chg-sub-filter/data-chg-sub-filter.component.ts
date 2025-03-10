import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnDestroy,
  ChangeDetectionStrategy,
} from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormControl,
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { resetDataChgSubStoreAction } from "src/app/Store/actions/data-chg-sub.action";

@Component({
  selector: "app-data-chg-sub-filter",
  templateUrl: "./data-chg-sub-filter.component.html",
  styleUrls: ["./data-chg-sub-filter.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataChgSubFilterComponent implements OnDestroy {
  @Output() filterTextChange = new EventEmitter<string>();

  private _filterText: string = "";
  get filterText() { return this._filterText; }
  set filterText(value: string) {
    this._filterText = value;
    this.filterTextChange.emit(value);
  }

  @Input("filterText")
  set setupFilterText(value: string) {
    this._filterText = value;
    this.mainFormGroup.get("filter").setValue(value);
  }

  readonly mainFormGroup: UntypedFormGroup;

  private _subscriptionToFilterChanges: Subscription;

  constructor(private _fb: UntypedFormBuilder, private _store: Store<any>) {
    this.mainFormGroup = this._fb.group({
      filter: new UntypedFormControl(this.filterText),
    });

    this._subscriptionToFilterChanges = this.mainFormGroup.get("filter").valueChanges.subscribe((value: string) => {
      this.filterText = value;
      this._store.dispatch(resetDataChgSubStoreAction());
    });

  }

  ngOnDestroy(): void {
    this._subscriptionToFilterChanges.unsubscribe();
  }
}
