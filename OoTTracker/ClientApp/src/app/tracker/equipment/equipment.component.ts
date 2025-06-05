import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipment: string = "equipment";

  kokiriSword = ['assets/icons/25-KokiriSword-BW.png',
    'assets/icons/25-KokiriSword.png'];
  masterSword = ['assets/icons/26-MasterSword.png'];
  biggoronSword = ['assets/icons/27-BiggoronSword-BW.png',
    'assets/icons/27-BiggoronSword.png'];
  dekuShield = ['assets/icons/28-DekuShield-BW.png',
    'assets/icons/28-DekuShield.png'];
  hylianShield = ['assets/icons/29-HylianShield-BW.png',
    'assets/icons/29-HylianShield.png'];
  mirrorShield = ['assets/icons/30-MirrorShield-BW.png',
    'assets/icons/30-MirrorShield.png'];
  kokiriTunic = ['assets/icons/31-KokiriTunic.png'];
  goronTunic = ['assets/icons/32-GoronTunic-BW.png',
    'assets/icons/32-GoronTunic.png'];
  zoraTunic = ['assets/icons/33-ZoraTunic-BW.png',
    'assets/icons/33-ZoraTunic.png'];
  kokiriBoots = ['assets/icons/34-KokiriBoots.png'];
  ironBoots = ['assets/icons/35-IronBoots-BW.png',
    'assets/icons/35-IronBoots.png'];
  hoverBoots = ['assets/icons/36-HoverBoots-BW.png',
    'assets/icons/36-HoverBoots.png'];

  constructor() {
  }

  ngOnInit(): void {
  }
}

