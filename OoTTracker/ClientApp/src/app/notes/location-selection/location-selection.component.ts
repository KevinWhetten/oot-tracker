import {Component, OnInit} from '@angular/core';

interface location {
  name: string,
  color: string
}

@Component({
  selector: 'app-location-selection',
  templateUrl: './location-selection.component.html',
  styleUrls: ['./location-selection.component.scss']
})
export class LocationSelectionComponent implements OnInit {
  locations = [
    {name: 'Hyrule Field', color: 'green'},
    {name: 'Lon Lon Ranch', color: 'yellow'},
    {name: 'Lake Hylia', color: 'blue'},
  ] as location[];
  forest = [
    {name: 'Kokiri Forest', color: 'green'},
    {name: 'Lost Woods', color: 'green'},
    {name: 'Sacred Forest Meadow', color: 'green'},
  ];
  mountain = [
    {name: 'Goron City', color: 'red'},
    {name: 'Death Mountain Trail', color: 'red'},
    {name: 'Death Mountain Crater', color: 'red'},
  ];
  river = [
    {name: 'Zora River', color: 'blue'},
    {name: 'Zora\'s Domain', color: 'blue'},
    {name: 'Zora Fountain', color: 'blue'},
  ];
  desert = [
    {name: 'Gerudo Valley', color: 'orange'},
    {name: 'Gerudo Fortress', color: 'orange'},
    {name: 'Haunted Wasteland', color: 'orange'},
    {name: 'Desert Colossus', color: 'orange'},
  ];
  castle = [
    {name: 'Castle Town', color: 'black'},
    {name: 'Hyrule Castle', color: 'black'},
    {name: 'Ganon\'s Castle', color: 'black'},
  ];
  kakarikoVillage = [
    {name: 'Kakariko Village', color: 'purple'},
    {name: 'Graveyard', color: 'purple'},
  ];
  dungeons = [
    {name: 'Great Deku Tree', color: 'green'},
    {name: 'Dodongo\'s Cavern', color: 'red'},
    {name: 'Jabu Jabu\'s Belly', color: 'blue'},
    {name: 'Forest Temple', color: 'green'},
    {name: 'Fire Temple', color: 'red'},
    {name: 'Water Temple', color: 'blue'},
    {name: 'Shadow Temple', color: 'purple'},
    {name: 'Spirit Temple', color: 'orange'},
    {name: 'Inside Ganon\'s Castle', color: 'black'},
  ];
  miniDungeons = [
    {name: 'Ice Cavern', color: 'light-blue'},
    {name: 'Bottom of the Well', color: 'purple'},
    {name: 'Gerudo Training Grounds', color: 'orange'},
  ];
  locationColor = 'gray';
  constructor() {
  }

  ngOnInit(): void {
  }

}
