import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrackerComponent } from './tracker/tracker.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { NotesComponent } from './notes/notes.component';
import { SongsComponent } from './tracker/songs/songs.component';
import { ItemsComponent } from './tracker/items/items.component';
import { OtherComponent } from './tracker/other/other.component';
import { MedallionsComponent } from './tracker/medallions/medallions.component';
import { EquipmentComponent } from './tracker/equipment/equipment.component';
import { BossSelectionComponent } from './notes/boss-selection/boss-selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import { LocationSelectionComponent } from './notes/location-selection/location-selection.component';
import { ItemSelectionComponent } from './notes/item-selection/item-selection.component';
import { ListComponent } from './checklist/list/list.component';
import { ForestChecklistComponent } from './checklist/forest-checklist/forest-checklist.component';
import { MountainChecklistComponent } from './checklist/mountain-checklist/mountain-checklist.component';
import { RiverChecklistComponent } from './checklist/river-checklist/river-checklist.component';
import { CastleChecklistComponent } from './checklist/castle-checklist/castle-checklist.component';
import { KakarikoChecklistComponent } from './checklist/kakariko-checklist/kakariko-checklist.component';
import { DesertChecklistComponent } from './checklist/desert-checklist/desert-checklist.component';
import { OtherChecklistComponent } from './checklist/other-checklist/other-checklist.component';
import { CheckComponent } from './checklist/list/check/check.component';
import { DungeonListComponent } from './checklist/dungeon-list/dungeon-list.component';
import { CheckCounterComponent } from './checklist/dungeon-list/check-counter/check-counter.component';
import { TrialsListComponent } from './checklist/dungeon-list/trials-list/trials-list.component';
import { ChecklistFilterComponent } from './checklist/checklist-filter/checklist-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackerComponent,
    ChecklistComponent,
    NotesComponent,
    SongsComponent,
    ItemsComponent,
    OtherComponent,
    MedallionsComponent,
    EquipmentComponent,
    BossSelectionComponent,
    LocationSelectionComponent,
    ItemSelectionComponent,
    ListComponent,
    ForestChecklistComponent,
    MountainChecklistComponent,
    RiverChecklistComponent,
    CastleChecklistComponent,
    KakarikoChecklistComponent,
    DesertChecklistComponent,
    OtherChecklistComponent,
    CheckComponent,
    DungeonListComponent,
    CheckCounterComponent,
    TrialsListComponent,
    ChecklistFilterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
    ]),
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
