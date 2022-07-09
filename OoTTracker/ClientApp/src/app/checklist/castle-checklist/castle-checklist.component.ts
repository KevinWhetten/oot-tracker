import { Component, OnInit } from '@angular/core';
import {CheckType} from "../../../models/check-type";
import {Check} from "../../../models/check";

@Component({
  selector: 'app-castle-checklist',
  templateUrl: './castle-checklist.component.html',
  styleUrls: ['./castle-checklist.component.scss']
})
export class CastleChecklistComponent implements OnInit {
  townChecks = [
    {
      name: 'Guard House',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Poe Collector',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Bombchu Bowling (x2)',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Shooting Gallery',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Treasure Chest Game',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Richard',
      type: CheckType.NPC,
      requirements: ['']
    },
  ] as Check[];
  templeChecks = [
    {
      name: 'Sheik',
      type: CheckType.Song,
      requirements: ['']
    },
    {
      name: 'Zelda',
      type: CheckType.NPC,
      requirements: ['']
    },
  ] as Check[];
  groundsChecks = [
    {
      name: 'Tree',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Gossip Stone 1',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Gossip Stone 2',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Storms Grotto',
      type: CheckType.Skulltula,
      requirements: ['']
    },
  ] as Check[];
  ganonChecks = [
    {
      name: 'Stone Archway',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      requirements: ['']
    },
  ] as Check[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
