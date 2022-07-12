import {Component, OnInit} from '@angular/core';
import {CheckType} from "../../../models/check-type";
import {Check} from "../../../models/check";

@Component({
  selector: 'app-desert-checklist',
  templateUrl: './desert-checklist.component.html',
  styleUrls: ['./desert-checklist.component.scss']
})
export class DesertChecklistComponent implements OnInit {
  valleyChecks = [
    {
      name: 'Entrance Waterfall',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Crate',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Near Waterfall',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Behind Waterfall',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Behind Tent',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Stone Pillar',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Behind Rocks',
      type: CheckType.Chest,
      requirements: ['']
    },
  ] as Check[];
  fortressChecks = [
    {
      name: 'Back Wall',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Rooftop',
      type: CheckType.Chest,
      requirements: ['']
    },
    {
      name: 'Horseback Archery 1000',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Horseback Archery 1500',
      type: CheckType.Game,
      requirements: ['']
    },
    {
      name: 'Horseback Archery Target',
      type: CheckType.Skulltula,
      requirements: ['']
    },
  ] as Check[];
  wastelandChecks = [
    {
      name: 'Structure',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Structure Torches',
      type: CheckType.Chest,
      requirements: ['']
    },
  ] as Check[];
  colossusChecks = [
    {
      name: 'Sheik Song',
      type: CheckType.Song,
      requirements: ['']
    },
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'South of Spirit Temple',
      type: CheckType.GossipStone,
      requirements: ['']
    },
    {
      name: 'Plateau',
      type: CheckType.Skulltula,
      requirements: ['']
    },
    {
      name: 'Stone Arch',
      type: CheckType.HeartPiece,
      requirements: ['']
    },
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      requirements: ['']
    },
    {
      name: 'Tree',
      type: CheckType.Skulltula,
      requirements: ['']
    },
  ] as Check[];
  dungeonSource = '<img src=\x22assets/icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';

  constructor() {
  }

  ngOnInit(): void {
  }

}
