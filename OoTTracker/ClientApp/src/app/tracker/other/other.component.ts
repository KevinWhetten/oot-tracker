import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  strength = 'assets/icons/37-GoronBracelet-BW.png';
  scale = 'assets/icons/38-SilverScale-BW.png';
  magic = 'assets/icons/39-Magic-BW.png';
  gerudoCard = 'assets/icons/40-GerudoMembershipCard-BW.png';

  constructor() { }

  ngOnInit(): void {
  }

  toggleStrength() {
    if(this.strength == 'assets/icons/37-GoronBracelet-BW.png'){
      this.strength = 'assets/icons/37-GoronBracelet.png';
    } else if (this.strength == 'assets/icons/37-GoronBracelet.png') {
      this.strength = 'assets/icons/37-SilverGauntlets.png';
    } else if (this.strength == 'assets/icons/37-SilverGauntlets.png'){
      this.strength = 'assets/icons/37-GoldenGauntlets.png';
    } else {
      this.strength = 'assets/icons/37-GoronBracelet-BW.png';
    }
  }

  toggleScale() {
    if(this.scale == 'assets/icons/38-SilverScale-BW.png'){
      this.scale = 'assets/icons/38-SilverScale.png';
    } else if (this.scale == 'assets/icons/38-SilverScale.png') {
      this.scale = 'assets/icons/38-GoldScale.png';
    } else {
      this.scale = 'assets/icons/38-SilverScale-BW.png';
    }
  }

  toggleMagic() {
    if(this.magic == 'assets/icons/39-Magic-BW.png'){
      this.magic = 'assets/icons/39-Magic1.png';
    } else if (this.magic == 'assets/icons/39-Magic1.png') {
      this.magic = 'assets/icons/39-Magic2.png';
    } else {
      this.magic = 'assets/icons/39-Magic-BW.png';
    }
  }

  toggleGerudoCard() {
    if(this.gerudoCard == 'assets/icons/40-GerudoMembershipCard-BW.png'){
      this.gerudoCard = 'assets/icons/40-GerudoMembershipCard.png';
    } else {
      this.gerudoCard = 'assets/icons/40-GerudoMembershipCard-BW.png';
    }
  }
}
