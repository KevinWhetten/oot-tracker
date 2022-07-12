import {Component, Input, OnInit} from '@angular/core';
import {Check} from "../../../models/check";
import {CheckType} from "../../../models/check-type";

@Component({
  selector: 'app-dungeon-list',
  templateUrl: './dungeon-list.component.html',
  styleUrls: ['./dungeon-list.component.scss']
})
export class DungeonListComponent implements OnInit {
  @Input() name: string = '';
  @Input() list: Check[] = [];
  @Input() color = 'gray';
  @Input() dungeonChecks = 0;
  @Input() keyChecks = 0;
  @Input() skullChecks = 0;
  chest = CheckType.Chest;
  skulltula = CheckType.Skulltula;
  key = CheckType.Key;

  constructor() { }

  ngOnInit(): void {
  }

}
