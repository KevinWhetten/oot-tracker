import {Component, Input, OnInit} from '@angular/core';
import {FilterService} from "../../../services/filter.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  private _filterService: FilterService;

  @Input() source: string[] = [];
  @Input() type: string = "";
  @Input() altSource: string[] = [];

  index: number = 0;
  altIndex: number = 0;

  constructor(filterService: FilterService) {
    this._filterService = filterService;
  }

  ngOnInit(): void {
  }

  toggleItem() {
    if (this.index + 1 == this.source.length) {
      this.index = 0;
    } else if (this.source.length == 1) {
      return;
    } else {
      this.index++;
    }
    this._filterService.filter();
  }

  toggleAlt(){
    if (this.altIndex + 1 == this.altSource.length) {
      this.altIndex = 0;
    } else if (this.altSource.length == 1) {
      return;
    } else {
      this.altIndex++;
    }
  }
}
