import { Component, OnInit } from '@angular/core';
import {HintService} from "../../../services/hint.service";

@Component({
  selector: 'app-sometimes-selection',
  templateUrl: './sometimes-selection.component.html',
  styleUrls: ['./sometimes-selection.component.scss']
})
export class SometimesSelectionComponent implements OnInit {
  color = 'gray';
  sometimesLocations = this._hintService.sometimesLocations;

  constructor(private _hintService: HintService) { }

  ngOnInit(): void {
  }

}
