import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  song: string = "song";

  zeldasLullaby = ['assets/icons/50-ZeldasLullaby-BW.png',
    'assets/icons/50-ZeldasLullaby.png'];
  eponasSong = ['assets/icons/51-EponasSong-BW.png',
    'assets/icons/51-EponasSong.png'];
  sariasSong = ['assets/icons/52-SariasSong-BW.png',
    'assets/icons/52-SariasSong.png'];
  sunsSong = ['assets/icons/53-SunsSong-BW.png',
    'assets/icons/53-SunsSong.png'];
  songOfTime = ['assets/icons/54-SongOfTime-BW.png',
    'assets/icons/54-SongOfTime.png'];
  songOfStorms = ['assets/icons/55-SongOfStorms-BW.png',
    'assets/icons/55-SongOfStorms.png'];

  minuetOfForest = ['assets/icons/56-61-Songs-BW.png',
    'assets/icons/56-MinuetOfForest.png'];
  boleroOfFire = ['assets/icons/56-61-Songs-BW.png',
    'assets/icons/57-BoleroOfFire.png'];
  serenadeOfWater = ['assets/icons/56-61-Songs-BW.png',
    'assets/icons/58-SerenadeOfWater.png'];
  requiemOfSpirit = ['assets/icons/56-61-Songs-BW.png',
    'assets/icons/59-RequiemOfSpirit.png'];
  nocturneOfShadow = ['assets/icons/56-61-Songs-BW.png',
    'assets/icons/60-NocturneOfShadow.png'];
  preludeOfLight = ['assets/icons/56-61-Songs-BW.png',
    'assets/icons/61-PreludeOfLight.png'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
