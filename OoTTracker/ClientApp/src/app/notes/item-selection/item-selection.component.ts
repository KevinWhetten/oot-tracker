import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-selection',
  templateUrl: './item-selection.component.html',
  styleUrls: ['./item-selection.component.scss']
})
export class ItemSelectionComponent implements OnInit {
  options = ['Junk Item', 'Nice Item', 'Required Item'];
  color = 'gray';

  constructor() {
  }

  ngOnInit(): void {
  }

}
