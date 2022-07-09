import {Component, Input, OnInit} from '@angular/core';
import {Check} from "../../../../models/check";

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  @Input() check: Check = {} as Check;
  checked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleCheck() {
    this.checked = !this.checked;
  }
}
