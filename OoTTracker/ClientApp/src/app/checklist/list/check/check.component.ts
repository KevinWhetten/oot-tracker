import {Component, Input, OnInit} from '@angular/core';
import {Check} from "../../../../models/check";

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  @Input() check: Check = {} as Check;
  eraFilter = 0;
  timeFilter = 0;
  checked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleCheck() {
    this.checked = !this.checked;
  }

  inEraFilter() {
    if (this.eraFilter == 0 || this.check.era == 0) {
      return true;
    } else if (this.check.era == 1 && this.eraFilter == 1) {
      return true;
    } else if (this.check.era == 2 && this.eraFilter == 2) {
      return true;
    }
    return false;
  }

  inTimeFilter() {
    if (this.timeFilter == 0 || this.check.time == 0) {
      return true;
    } else if (this.check.time == 1 && this.timeFilter == 1) {
      return true;
    } else if (this.check.time == 2 && this.timeFilter == 2) {
      return true;
    }
    return false;
  }
}
