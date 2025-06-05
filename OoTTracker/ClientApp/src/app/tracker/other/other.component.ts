import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  other: string = 'other';

  wallet = ['assets/icons/39-AdultWallet-BW.png',
    'assets/icons/39-AdultWallet.png',
    'assets/icons/39-GiantsWallet.png',
    'assets/icons/39-MaxWallet.png'];
  magic = ['assets/icons/39-Magic-BW.png',
    'assets/icons/39-Magic1.png',
    'assets/icons/39-Magic2.png'];
  strength = ['assets/icons/37-GoronBracelet-BW.png',
    'assets/icons/37-GoronBracelet.png',
    'assets/icons/37-SilverGauntlets.png',
    'assets/icons/37-GoldenGauntlets.png'];
  scale = ['assets/icons/38-SilverScale-BW.png',
    'assets/icons/38-SilverScale.png',
    'assets/icons/38-GoldScale.png'];

  constructor() { }

  ngOnInit(): void {
  }
}
