import {Component, Directive, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-medallions',
  templateUrl: './medallions.component.html',
  styleUrls: ['./medallions.component.scss']
})
export class MedallionsComponent implements OnInit {
  medallion: string = "medallion";

  kokiriEmerald = ['assets/icons/41-KokiriEmerald-BW.png',
    'assets/icons/41-KokiriEmerald.png'];
  goronRuby = ['assets/icons/42-GoronRuby-BW.png',
    'assets/icons/42-GoronRuby.png'];
  zoraSapphire = ['assets/icons/43-ZoraSapphire-BW.png',
    'assets/icons/43-ZoraSapphire.png'];

  lightMedallion = ['assets/icons/44-LightMedallion-BW.png',
    'assets/icons/44-LightMedallion.png'];
  forestMedallion = ['assets/icons/45-ForestMedallion-BW.png',
    'assets/icons/45-ForestMedallion.png'];
  fireMedallion = ['assets/icons/46-FireMedallion-BW.png',
    'assets/icons/46-FireMedallion.png'];
  waterMedallion = ['assets/icons/47-WaterMedallion-BW.png',
    'assets/icons/47-WaterMedallion.png'];
  shadowMedallion = ['assets/icons/48-ShadowMedallion-BW.png',
    'assets/icons/48-ShadowMedallion.png'];
  spiritMedallion = ['assets/icons/49-SpiritMedallion-BW.png',
    'assets/icons/49-SpiritMedallion.png'];

  lightDungeon = 'assets/icons/DU-None.png';
  kokiriDungeon = 'assets/icons/DU-None.png';
  goronDungeon = 'assets/icons/DU-None.png';
  zoraDungeon = 'assets/icons/DU-None.png';
  forestDungeon = 'assets/icons/DU-None.png';
  fireDungeon = 'assets/icons/DU-None.png';
  waterDungeon = 'assets/icons/DU-None.png';
  shadowDungeon = 'assets/icons/DU-None.png';
  spiritDungeon = 'assets/icons/DU-None.png';

  constructor() { }

  ngOnInit(): void {
  }

  toggleDungeon($event: MouseEvent, dungeon: string) {
    $event.preventDefault();

    let selectedDungeon= '';
    switch (dungeon){
      case 'kokiri':
        selectedDungeon = this.kokiriDungeon;
        break;
      case 'goron':
        selectedDungeon = this.goronDungeon;
        break;
      case 'zora':
        selectedDungeon = this.zoraDungeon;
        break;
      case 'light':
        selectedDungeon = this.lightDungeon;
        break;
      case 'forest':
        selectedDungeon = this.forestDungeon;
        break;
      case 'fire':
        selectedDungeon = this.fireDungeon;
        break;
      case 'water':
        selectedDungeon = this.waterDungeon;
        break;
      case 'shadow':
        selectedDungeon = this.shadowDungeon;
        break;
      case 'spirit':
        selectedDungeon = this.spiritDungeon;
        break;
    }

    if(selectedDungeon == 'assets/icons/DU-None.png') {
      selectedDungeon = 'assets/icons/DU-Free.png'
    } else if(selectedDungeon == 'assets/icons/DU-Free.png') {
      selectedDungeon = 'assets/icons/DU-Deku.png';
    } else if (selectedDungeon == 'assets/icons/DU-Deku.png'){
      selectedDungeon = 'assets/icons/DU-DC.png';
    } else if (selectedDungeon == 'assets/icons/DU-DC.png'){
      selectedDungeon = 'assets/icons/DU-Jabu.png';
    } else if (selectedDungeon == 'assets/icons/DU-Jabu.png'){
      selectedDungeon = 'assets/icons/DU-Forest.png';
    } else if (selectedDungeon == 'assets/icons/DU-Forest.png'){
      selectedDungeon = 'assets/icons/DU-Fire.png';
    } else if (selectedDungeon == 'assets/icons/DU-Fire.png'){
      selectedDungeon = 'assets/icons/DU-Water.png';
    } else if (selectedDungeon == 'assets/icons/DU-Water.png'){
      selectedDungeon = 'assets/icons/DU-Shadow.png';
    } else if (selectedDungeon == 'assets/icons/DU-Shadow.png'){
      selectedDungeon = 'assets/icons/DU-Spirit.png';
    } else if (selectedDungeon == 'assets/icons/DU-Spirit.png'){
      selectedDungeon = 'assets/icons/DU-None.png';
    }

    switch (dungeon){
      case 'kokiri':
        this.kokiriDungeon = selectedDungeon;
        break;
      case 'goron':
        this.goronDungeon = selectedDungeon;
        break;
      case 'zora':
        this.zoraDungeon = selectedDungeon;
        break;
      case 'light':
        this.lightDungeon = selectedDungeon;
        break;
      case 'forest':
        this.forestDungeon = selectedDungeon;
        break;
      case 'fire':
        this.fireDungeon = selectedDungeon;
        break;
      case 'water':
        this.waterDungeon = selectedDungeon;
        break;
      case 'shadow':
        this.shadowDungeon = selectedDungeon;
        break;
      case 'spirit':
        this.spiritDungeon = selectedDungeon;
        break;
    }
  }
}
