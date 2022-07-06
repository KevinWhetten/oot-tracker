import { Component, OnInit } from '@angular/core';

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
}
