import {Injectable} from '@angular/core';
import {Boss} from '../models/boss'
import {Location} from "../models/location";

@Injectable({
  providedIn: 'root'
})
export class HintService {
  bosses = [{name: 'Gohma', color: 'green'},
    {name: 'King Dodongo', color: 'red'},
    {name: 'Barrinade', color: 'blue'},
    {name: 'Phantom Ganon', color: 'green'},
    {name: 'Volvagia', color: 'red'},
    {name: 'Morpha', color: 'blue'},
    {name: 'Bongo Bongo', color: 'purple'},
    {name: 'Twinrova', color: 'orange'}] as Boss[];
  items = ['Junk', 'Nice Item', 'Required Item'];
  locations = [
    {
      name: 'Kokiri Forest',
      color: 'green',
      regions: [
        {name: 'Kokiri Forest', color: 'green'},
        {name: 'Great Deku Tree', color: 'green'},
        {name: 'Lost Woods', color: 'green'},
        {name: 'Sacred Forest Meadow', color: 'green'},
        {name: 'Forest Temple', color: 'green'}
      ],
    },
    {
      name: 'Death Mountain',
      color: 'red',
      regions: [
        {name: 'Goron City', color: 'red'},
        {name: 'Dodongo\'s Cavern', color: 'red'},
        {name: 'Death Mountain Trail', color: 'red'},
        {name: 'Death Mountain Crater', color: 'red'},
        {name: 'Fire Temple', color: 'red'}
      ]
    },
    {
      name: 'Zora\'s River',
      color: 'blue',
      regions: [
        {name: 'Zora River', color: 'blue'},
        {name: 'Zora\'s Domain', color: 'blue'},
        {name: 'Zora Fountain', color: 'blue'},
        {name: 'Jabu Jabu\'s Belly', color: 'blue'},
        {name: 'Ice Cavern', color: 'light-blue'}
      ]
    },
    {
      name: 'Hyrule Castle',
      color: 'black',
      regions: [
        {name: 'Castle Town', color: 'black'},
        {name: 'Hyrule Castle', color: 'black'},
        {name: 'Ganon\'s Castle', color: 'black'},
        {name: 'Inside Ganon\'s Castle', color: 'black'}
      ]
    },
    {
      name: 'Kakariko Village',
      color: 'purple',
      regions: [
        {name: 'Kakariko Village', color: 'purple'},
        {name: 'Bottom of the Well', color: 'purple'},
        {name: 'Graveyard', color: 'purple'},
        {name: 'Shadow Temple', color: 'purple'}
      ]
    },
    {
      name: 'Gerudo Desert',
      color: 'orange',
      regions: [
        {name: 'Gerudo Valley', color: 'orange'},
        {name: 'Gerudo Fortress', color: 'orange'},
        {name: 'Gerudo Training Grounds', color: 'orange'},
        {name: 'Haunted Wasteland', color: 'orange'},
        {name: 'Desert Colossus', color: 'orange'},
        {name: 'Spirit Temple', color: 'orange'}
      ]
    },
    {
      name: 'Other',
      color: 'black',
      regions: [
        {name: 'Hyrule Field', color: 'green'},
        {name: 'Lon Lon Ranch', color: 'yellow'},
        {name: 'Lake Hylia', color: 'blue'},
        {name: 'Water Temple', color: 'blue'}
      ]
    }
  ];


  constructor() {
  }
}
