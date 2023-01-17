import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  private pathHints = 0;
  private barrenHints = 0;
  private alwaysHints = 0;
  private sometimesHints = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  getPathHintIteration() {
    return Array(this.pathHints).fill(0).map((x, i) => i);
  }

  getBarrenHintIteration() {
    return Array(this.barrenHints).fill(0).map((x, i) => i);
  }

  getAlwaysHintIteration() {
    return Array(this.alwaysHints).fill(0).map((x, i) => i);
  }

  getSometimesHintIteration() {
    return Array(this.sometimesHints).fill(0).map((x, i) => i);
  }

  addPathHint() {
    this.pathHints++;
  }

  addBarrenHint() {
    this.barrenHints++;
  }

  addAlwaysHint() {
    this.alwaysHints++;
  }

  addSometimesHint() {
    this.sometimesHints++;
  }

  resetPathHints() {
    this.pathHints = 0;
  }

  resetBarrenHints() {
    this.barrenHints = 0;
  }

  resetAlwaysHints() {
    this.alwaysHints = 0;
  }

  resetSometimesHints() {
    this.sometimesHints = 0;
  }
}
