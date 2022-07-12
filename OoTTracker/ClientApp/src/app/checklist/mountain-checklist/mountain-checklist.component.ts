import { Component, OnInit } from '@angular/core';
import {CheckType} from "../../../models/check-type";
import {Check} from "../../../models/check";

@Component({
  selector: 'app-mountain-checklist',
  templateUrl: './mountain-checklist.component.html',
  styleUrls: ['./mountain-checklist.component.scss']
})
export class MountainChecklistComponent implements OnInit {
  trailChecks = [
    {
      name: 'Lower Bomb Wall',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Upper Bomb Wall',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Above DC',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Above DC Boulder',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Storms Grotto',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Before Climb to Summit',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Climb to Summit',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Biggoron',
      type: CheckType.NPC,
      requirements: ['']
    },
  ] as Check[];
  dodongoChecks = [
    {
      name: 'Gossip Stone',
      type: CheckType.GossipStone,
      requirements: ['']
    },
  ] as Check[];
  goronCityChecks = [
    {
      name: 'Center Platform',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Maze - Center (x2)',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Maze - Gossip Stone',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Maze - Crate',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Maze - Left',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Link the Goron',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Hotrod Goron',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Medigoron Gossip Stone',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Darunia',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Goron Pot',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
  ] as Check[];
  craterChecks = [
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Top of Volcano',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Sheik',
      type: CheckType.Song,
      requirements: ['']
    },
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Wall Alcove',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Grotto',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Gossip Stone',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Crate',
      type: CheckType.Skulltula,
      requirements: ['']
    },
  ] as Check[];
  dungeonSource = '<img src=\x22assets/icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';

  constructor() { }

  ngOnInit(): void {
  }

}
