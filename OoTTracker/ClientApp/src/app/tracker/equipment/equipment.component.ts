import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  kokiriSword = 'assets/icons/25-KokiriSword-BW.png';
  masterSword = 'assets/icons/26-MasterSword.png';
  biggoronSword = 'assets/icons/27-BiggoronSword-BW.png';
  dekuShield = 'assets/icons/28-DekuShield.png';
  hylianShield = 'assets/icons/29-HylianShield-BW.png';
  mirrorShield = 'assets/icons/30-MirrorShield-BW.png';
  kokiriTunic = 'assets/icons/31-KokiriTunic.png';
  goronTunic = 'assets/icons/32-GoronTunic-BW.png';
  zoraTunic = 'assets/icons/33-ZoraTunic-BW.png';
  kokiriBoots = 'assets/icons/34-KokiriBoots.png';
  ironBoots = 'assets/icons/35-IronBoots-BW.png';
  hoverBoots = 'assets/icons/36-HoverBoots-BW.png';

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleKokiriSword() {
    if (this.kokiriSword == 'assets/icons/25-KokiriSword-BW.png') {
      this.kokiriSword = 'assets/icons/25-KokiriSword.png';
    } else {
      this.kokiriSword = 'assets/icons/25-KokiriSword-BW.png';
    }
  }

  toggleMasterSword() {
    if (this.masterSword == 'assets/icons/26-MasterSword-BW.png') {
      this.masterSword = 'assets/icons/26-MasterSword.png';
    } else {
      this.masterSword = 'assets/icons/26-MasterSword-BW.png';
    }
  }

  toggleBiggoronSword() {
    if (this.biggoronSword == 'assets/icons/27-BiggoronSword-BW.png') {
      this.biggoronSword = 'assets/icons/27-BiggoronSword.png';
    } else {
      this.biggoronSword = 'assets/icons/27-BiggoronSword-BW.png';
    }
  }

  toggleDekuShield() {
    if (this.dekuShield == 'assets/icons/28-DekuShield-BW.png') {
      this.dekuShield = 'assets/icons/28-DekuShield.png';
    } else {
      this.dekuShield = 'assets/icons/28-DekuShield-BW.png';
    }
  }

  toggleHylianShield() {
    if (this.hylianShield == 'assets/icons/29-HylianShield-BW.png') {
      this.hylianShield = 'assets/icons/29-HylianShield.png';
    } else {
      this.hylianShield = 'assets/icons/29-HylianShield-BW.png';
    }
  }

  toggleMirrorShield() {
    if (this.mirrorShield == 'assets/icons/30-MirrorShield-BW.png') {
      this.mirrorShield = 'assets/icons/30-MirrorShield.png';
    } else {
      this.mirrorShield = 'assets/icons/30-MirrorShield-BW.png';
    }
  }

  toggleGoronTunic() {
    if (this.goronTunic == 'assets/icons/32-GoronTunic-BW.png') {
      this.goronTunic = 'assets/icons/32-GoronTunic.png';
    } else {
      this.goronTunic = 'assets/icons/32-GoronTunic-BW.png';
    }
  }

  toggleZoraTunic() {
    if (this.zoraTunic == 'assets/icons/33-ZoraTunic-BW.png') {
      this.zoraTunic = 'assets/icons/33-ZoraTunic.png';
    } else {
      this.zoraTunic = 'assets/icons/33-ZoraTunic-BW.png';
    }
  }

  toggleIronBoots() {
    if (this.ironBoots == 'assets/icons/35-IronBoots-BW.png') {
      this.ironBoots = 'assets/icons/35-IronBoots.png';
    } else {
      this.ironBoots = 'assets/icons/35-IronBoots-BW.png';
    }
  }

  toggleHoverBoots() {
    if (this.hoverBoots == 'assets/icons/36-HoverBoots-BW.png') {
      this.hoverBoots = 'assets/icons/36-HoverBoots.png';
    } else {
      this.hoverBoots = 'assets/icons/36-HoverBoots-BW.png';
    }
  }
}

