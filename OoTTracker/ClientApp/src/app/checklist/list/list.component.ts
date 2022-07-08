import {Component, Input, OnInit} from '@angular/core';
import {Check} from "../../../models/check";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() name: string = '';
  @Input() list: Check[] = [];
  @Input() color = 'gray';

  constructor() {
  }

  ngOnInit(): void {
  }

}
