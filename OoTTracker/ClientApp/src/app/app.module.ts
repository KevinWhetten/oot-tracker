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
