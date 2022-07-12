import { Component, OnInit } from '@angular/core';
import {CheckType} from "../../../models/check-type";
import {Check} from "../../../models/check";

@Component({
  selector: 'app-kakariko-checklist',
  templateUrl: './kakariko-checklist.component.html',
  styleUrls: ['./kakariko-checklist.component.scss']
})
export class KakarikoChecklistComponent implements OnInit {
  villageChecks = [
    {
      name: 'Burning Kakariko',
      type: CheckType.Song,
      requirements: ['']
    },
    {
      name: 'Tree',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Front Grotto',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Bazaar',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Ladder',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Man on Rooftop',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Rear Grotto',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Windmill Song',
      type: CheckType.Song,
      requirements: ['']
    },
    {
      name: 'Windmill',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Chickens',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Anju',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Impa\'s House',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Bricks',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Shooting Gallery',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: '10 Skulltulas',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: '20 Skulltulas',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: '30 Skulltulas',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: '40 Skulltulas',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: '50 Skulltulas',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'House of Skulltula',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Impa\'s Roof',
      type: CheckType.Skulltula,
      requirements: ['']
    },
  ] as Check[];
  graveyardChecks = [
    {
      name: 'Dampe Gravedigging',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Shield Grave',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Dampe Race (x2)',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Crate',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Royal Tomb Torches',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Royal Tomb Song',
      type: CheckType.Song,
      requirements: ['']
    },
    {
      name: 'Redead Grave',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Wall',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Gossip Stone',
      type: CheckType.GossipStone,
      requirements: ['']
    },
  ] as Check[];
  dungeonSource = '<img src=\x22assets/icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';

  constructor() { }

  ngOnInit(): void {
  }

}
