import { Component, OnInit } from '@angular/core';
import {CheckType} from "../../../models/check-type";
import {Check} from "../../../models/check";

@Component({
  selector: 'app-river-checklist',
  templateUrl: './river-checklist.component.html',
  styleUrls: ['./river-checklist.component.scss']
})
export class RiverChecklistComponent implements OnInit {
  riverChecks = [
    {
      name: 'Tree',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Lower River',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Lower River',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Frogs in the Rain',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Frog Fly Catching',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Grotto',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Wall Near Grotto',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Near Bridge',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Upper River',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Upper River Ladder',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Below Waterfall',
      type: CheckType.GossipStone,
      requirements: ['']
    },
  ] as Check[];
  domainChecks = [
    {
      name: 'Torch Run',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Diving Game',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Frozen Waterfall',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Throne Room',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'King Zora Thawed',
      type: CheckType.NPC,
      requirements: ['']
    },
  ] as Check[];
  fountainChecks = [
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Outside Fairy Fountain',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Hideout',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Wall Near Branch',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Tree',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Iceberg',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Icy Waters',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Near Ice Cavern',
      type: CheckType.GossipStone,
      requirements: ['']
    },
  ] as Check[];
  iceCavernChecks = [
    {
      name: 'Sheik',
      type: CheckType.Song,
      requirements: ['']
    },
  ] as Check[];
  dungeonSource = '<img src=\x22assets/icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';

  constructor() { }

  ngOnInit(): void {
  }

}
