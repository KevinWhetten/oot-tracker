import {Component, OnInit} from '@angular/core';
import {HintService} from "../../../services/hint.service";

@Component({
  selector: 'app-item-location-selection',
  templateUrl: './item-location-selection.component.html',
  styleUrls: ['./item-location-selection.component.scss']
})
export class ItemLocationSelectionComponent implements OnInit {
  locations = this._hintService.itemLocations;
  color = 'gray';

  constructor(private _hintService: HintService) {
  }

  ngOnInit(): void {
  }

}
