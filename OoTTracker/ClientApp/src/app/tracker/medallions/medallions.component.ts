import {Component, Directive, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-medallions',
  templateUrl: './medallions.component.html',
  styleUrls: ['./medallions.component.scss']
})
export class MedallionsComponent implements OnInit {
  kokiriEmerald = 'assets/icons/41-KokiriEmerald-BW.png';
  goronRuby = 'assets/icons/42-GoronRuby-BW.png';
  zoraSapphire = 'assets/icons/43-ZoraSapphire-BW.png';

  lightMedallion = 'assets/icons/44-LightMedallion-BW.png';
  forestMedallion = 'assets/icons/45-ForestMedallion-BW.png';
  fireMedallion = 'assets/icons/46-FireMedallion-BW.png';
  waterMedallion = 'assets/icons/47-WaterMedallion-BW.png';
  shadowMedallion = 'assets/icons/48-ShadowMedallion-BW.png';
  spiritMedallion = 'assets/icons/49-SpiritMedallion-BW.png';
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

  toggleKokiriEmerald() {
    if(this.kokiriEmerald == 'assets/icons/41-KokiriEmerald-BW.png'){
      this.kokiriEmerald = 'assets/icons/41-KokiriEmerald.png';
    } else {
      this.kokiriEmerald = 'assets/icons/41-KokiriEmerald-BW.png';
    }
  }

  toggleGoronRuby() {
    if(this.goronRuby == 'assets/icons/42-GoronRuby-BW.png'){
      this.goronRuby = 'assets/icons/42-GoronRuby.png';
    } else {
      this.goronRuby = 'assets/icons/42-GoronRuby-BW.png';
    }
  }

  toggleZoraSapphire() {
    if(this.zoraSapphire == 'assets/icons/43-ZoraSapphire-BW.png'){
      this.zoraSapphire = 'assets/icons/43-ZoraSapphire.png';
    } else {
      this.zoraSapphire = 'assets/icons/43-ZoraSapphire-BW.png';
    }
  }

  toggleLightMedallion() {
    if(this.lightMedallion == 'assets/icons/44-LightMedallion-BW.png'){
      this.lightMedallion = 'assets/icons/44-LightMedallion.png';
    } else {
      this.lightMedallion = 'assets/icons/44-LightMedallion-BW.png';
    }
  }

  toggleForestMedallion() {
    if(this.forestMedallion == 'assets/icons/45-ForestMedallion-BW.png'){
      this.forestMedallion = 'assets/icons/45-ForestMedallion.png';
    } else {
      this.forestMedallion = 'assets/icons/45-ForestMedallion-BW.png';
    }
  }

  toggleFireMedallion() {
    if(this.fireMedallion == 'assets/icons/46-FireMedallion-BW.png'){
      this.fireMedallion = 'assets/icons/46-FireMedallion.png';
    } else {
      this.fireMedallion = 'assets/icons/46-FireMedallion-BW.png';
    }
  }

  toggleWaterMedallion() {
    if(this.waterMedallion == 'assets/icons/47-WaterMedallion-BW.png'){
      this.waterMedallion = 'assets/icons/47-WaterMedallion.png';
    } else {
      this.waterMedallion = 'assets/icons/47-WaterMedallion-BW.png';
    }
  }

  toggleShadowMedallion() {
    if(this.shadowMedallion == 'assets/icons/48-ShadowMedallion-BW.png'){
      this.shadowMedallion = 'assets/icons/48-ShadowMedallion.png';
    } else {
      this.shadowMedallion = 'assets/icons/48-ShadowMedallion-BW.png';
    }
  }

  toggleSpiritMedallion() {
    if(this.spiritMedallion == 'assets/icons/49-SpiritMedallion-BW.png'){
      this.spiritMedallion = 'assets/icons/49-SpiritMedallion.png';
    } else {
      this.spiritMedallion = 'assets/icons/49-SpiritMedallion-BW.png';
    }
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
