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
  lostWoodsChecks = [
    {
      name: 'Bridge Scrub',
      type: CheckType.Scrub,
      requirements: ['']
    },
    {
      name: ' Bridge Bean Patch',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Skullkid',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Goron Grotto',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Target',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Ocarina Game',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Skull Mask',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Theater Bean Patch',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Theater Bean Ride',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Grotto Scrub',
      type: CheckType.Scrub,
      requirements: ['']
    },
  ] as Check[];
  sacredForestMeadowChecks = [
    {
      name: 'Wolfos Grotto',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Saria',
      type: CheckType.Song,
      requirements: ['']
    },
    {
      name: 'Sheik',
      type: CheckType.Song,
      requirements: ['']
    },
    {
      name: 'Meadow Gossip Stone',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Maze Wall',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Maze Gossip Stone 1',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Maze Gossip Stone 2',
      type: CheckType.GossipStone,
      requirements: ['']
    },
  ] as Check[];

  constructor() { }

  ngOnInit(): void {
  }

}
