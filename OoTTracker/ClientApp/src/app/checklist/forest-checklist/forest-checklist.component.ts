import {Component, Input, OnInit} from '@angular/core';
import {Check} from "../../../models/check";
import {CheckType} from "../../../models/check-type";

@Component({
  selector: 'app-forest-checklist',
  templateUrl: './forest-checklist.component.html',
  styleUrls: ['./forest-checklist.component.scss']
})
export class ForestChecklistComponent implements OnInit {
  kokiriChecks = [
    {
      name: 'Mido\'s House',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Know-It-All House',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Kokiri Sword',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Storms Grotto',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Gossip Stone',
      type: CheckType.GossipStone,
      requirements: ['']
    },
  ] as Check[];
  dekuTreeChecks = [
    {
      name: 'Gossip Stone 1',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Gossip Stone 2',
      type: CheckType.GossipStone,
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
      name: 'Bridge Gossip Stone',
      type: CheckType.GossipStone,
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
  dungeonSource = '<img src=\x22assets/icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';

  constructor() {
  }

  ngOnInit(): void {
  }

}
