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
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
