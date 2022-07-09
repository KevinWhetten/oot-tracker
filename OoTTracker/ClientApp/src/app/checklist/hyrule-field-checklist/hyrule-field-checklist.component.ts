import { Component, OnInit } from '@angular/core';
import {CheckType} from "../../../models/check-type";
import {Check} from "../../../models/check";

@Component({
  selector: 'app-ranch-checklist',
  templateUrl: './hyrule-field-checklist.component.html',
  styleUrls: ['./hyrule-field-checklist.component.scss']
})
export class HyruleFieldChecklistComponent implements OnInit {
  ranchChecks = [
    {
      name: 'Talon\'s Chickens',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'House',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Malon',
      type: CheckType.Song,
      requirements: ['']
    },
    {
      name: 'Outer Fence',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Back Building',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Inner Fence',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Tree',
      type: CheckType.Skulltula,
      requirements: ['']
    },
  ] as Check[];
  fieldChecks = [
    {
      name: 'Near Kakariko Grotto',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Boulder of Destiny',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Tektite Grotto',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Near Gerudo Grotto',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Grotto Scrub',
      type: CheckType.Scrub,
      requirements: ['']
    },
    {
      name: 'Open Grotto',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Trees Grotto',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Ocarina of Time',
      type: CheckType.Song,
      requirements: ['']
    },
  ] as Check[];
  lakeChecks = [
    {
      name: 'Gossip Stone',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Lab Diving',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Lab Crate',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Lab Roof',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Lab Wall',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Tall Tree',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Shoot the Sun',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Sun Island',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Fishing - Child',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Fishing - Adult',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Scarecrow Song',
      type: CheckType.Song,
      requirements: ['']
    },
    {
      name: 'Underwater Bottle',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
  ] as Check[];
  dungeonSource = '<img src=\x22assets/icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';

  constructor() { }

  ngOnInit(): void {
  }

}
