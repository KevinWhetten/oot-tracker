import { Component, OnInit } from '@angular/core';
import {HintService} from "../../../services/hint.service";

@Component({
  selector: 'app-location-selection',
  templateUrl: './location-selection.component.html',
  styleUrls: ['./location-selection.component.scss']
})
export class LocationSelectionComponent implements OnInit {
  color = 'gray';
  locations = this._hintService.locations;

  constructor(private _hintService: HintService) { }

  ngOnInit(): void {
  }

}
