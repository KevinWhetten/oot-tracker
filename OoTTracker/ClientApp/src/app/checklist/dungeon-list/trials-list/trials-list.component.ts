import {Component, Input, OnInit} from '@angular/core';
import {Check} from "../../../../models/check";
import {CheckType} from "../../../../models/check-type";

@Component({
  selector: 'app-trials-list',
  templateUrl: './trials-list.component.html',
  styleUrls: ['./trials-list.component.scss']
})
export class TrialsListComponent implements OnInit {
  @Input() name: string = '';
  @Input() list: Check[] = [];
  @Input() color = 'gray';
  @Input() dungeonChecks = 0;
  @Input() skullChecks = 0;
  chest = CheckType.Chest;
  skulltula = CheckType.Skulltula;
  dungeonSource = '<img src=\x22assets/icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';

  constructor() { }

  ngOnInit(): void {
  }

}
