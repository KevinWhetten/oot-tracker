import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  zeldasLullaby = 'assets/icons/50-ZeldasLullaby-BW.png';
  eponasSong = 'assets/icons/51-EponasSong-BW.png';
  sariasSong = 'assets/icons/52-SariasSong-BW.png';
  sunsSong = 'assets/icons/53-SunsSong-BW.png';
  songOfTime = 'assets/icons/54-SongOfTime-BW.png';
  songOfStorms = 'assets/icons/55-SongOfStorms-BW.png';

  minuetOfForest = 'assets/icons/56-61-Songs-BW.png';
  boleroOfFire = 'assets/icons/56-61-Songs-BW.png';
  serenadeOfWater = 'assets/icons/56-61-Songs-BW.png';
  requiemOfSpirit = 'assets/icons/56-61-Songs-BW.png';
  nocturneOfShadow = 'assets/icons/56-61-Songs-BW.png';
  preludeOfLight = 'assets/icons/61-PreludeOfLight.png';

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleZeldasLullaby() {
    if(this.zeldasLullaby == 'assets/icons/50-ZeldasLullaby-BW.png'){
      this.zeldasLullaby = 'assets/icons/50-ZeldasLullaby.png';
    } else {
      this.zeldasLullaby = 'assets/icons/50-ZeldasLullaby-BW.png';
    }
  }

  toggleEponasSong() {
    if(this.eponasSong == 'assets/icons/51-EponasSong-BW.png'){
      this.eponasSong = 'assets/icons/51-EponasSong.png';
    } else {
      this.eponasSong = 'assets/icons/51-EponasSong-BW.png';
    }
  }

  toggleSariasSong() {
    if(this.sariasSong == 'assets/icons/52-SariasSong-BW.png'){
      this.sariasSong = 'assets/icons/52-SariasSong.png';
    } else {
      this.sariasSong = 'assets/icons/52-SariasSong-BW.png';
    }
  }

  toggleSunsSong() {
    if(this.sunsSong == 'assets/icons/53-SunsSong-BW.png'){
      this.sunsSong = 'assets/icons/53-SunsSong.png';
    } else {
      this.sunsSong = 'assets/icons/53-SunsSong-BW.png';
    }
  }

  toggleSongOfTime() {
    if(this.songOfTime == 'assets/icons/54-SongOfTime-BW.png'){
      this.songOfTime = 'assets/icons/54-SongOfTime.png';
    } else {
      this.songOfTime = 'assets/icons/54-SongOfTime-BW.png';
    }
  }

  toggleSongOfStorms() {
    if(this.songOfStorms == 'assets/icons/55-SongOfStorms-BW.png'){
      this.songOfStorms = 'assets/icons/55-SongOfStorms.png';
    } else {
      this.songOfStorms = 'assets/icons/55-SongOfStorms-BW.png';
    }
  }

  toggleMinuetOfForest() {
    if(this.minuetOfForest == 'assets/icons/56-61-Songs-BW.png'){
      this.minuetOfForest = 'assets/icons/56-MinuetOfForest.png';
    } else {
      this.minuetOfForest = 'assets/icons/56-61-Songs-BW.png';
    }
  }

  toggleBoleroOfFire() {
    if(this.boleroOfFire == 'assets/icons/56-61-Songs-BW.png'){
      this.boleroOfFire = 'assets/icons/57-BoleroOfFire.png';
    } else {
      this.boleroOfFire = 'assets/icons/56-61-Songs-BW.png';
    }
  }

  toggleSerenadeOfWater() {
    if(this.serenadeOfWater == 'assets/icons/56-61-Songs-BW.png'){
      this.serenadeOfWater = 'assets/icons/58-SerenadeOfWater.png';
    } else {
      this.serenadeOfWater = 'assets/icons/56-61-Songs-BW.png';
    }
  }

  toggleRequiemOfSpirit() {
    if(this.requiemOfSpirit == 'assets/icons/56-61-Songs-BW.png'){
      this.requiemOfSpirit = 'assets/icons/59-RequiemOfSpirit.png';
    } else {
      this.requiemOfSpirit = 'assets/icons/56-61-Songs-BW.png';
    }
  }

  toggleNocturneOfShadow() {
    if(this.nocturneOfShadow == 'assets/icons/56-61-Songs-BW.png'){
      this.nocturneOfShadow = 'assets/icons/60-NocturneOfShadow.png';
    } else {
      this.nocturneOfShadow = 'assets/icons/56-61-Songs-BW.png';
    }
  }

  togglePreludeOfLight() {
    if(this.preludeOfLight == 'assets/icons/56-61-Songs-BW.png'){
      this.preludeOfLight = 'assets/icons/61-PreludeOfLight.png';
    } else {
      this.preludeOfLight = 'assets/icons/56-61-Songs-BW.png';
    }
  }
}
