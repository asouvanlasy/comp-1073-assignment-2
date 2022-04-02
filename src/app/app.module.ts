//--Setting up Routes to navigate between components.
//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular 8 components */
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';


/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  /* import the AngularMaterialModule. */
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Angular 8 http service */
import { HttpClientModule } from '@angular/common/http';

/* Angular 8 CRUD services */
import { ApiService } from './shared/api.service';

/* Reactive form services in Angular 8 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



// Our new imports
import { NintendoListComponent } from './components/nintendo-list/nintendo-list.component';
import { AddNintendoComponent } from './components/add-nintendo/add-nintendo.component';
import { PCListComponent } from './components/PC-list/PC-list.component';
import { AddPCComponent } from './components/add-PC/add-PC.component';
import { EditNintendoComponent } from './components/edit-nintendo/edit-nintendo.component';
import { XboxListComponent } from './components/xbox-list/xbox-list.component';
import { AddXboxComponent } from './components/add-xbox/add-xbox.component';
import { EditXboxComponent } from './components/edit-xbox/edit-xbox.component';
import { EditPCComponent } from './components/edit-PC/edit-PC.component';
import { MobileListComponent } from './components/mobile-list/mobile-list.component';

// Our new imports
import { PlayStationListComponent } from './components/playStation-list/playstation-list.component';
import { AddPlayStationComponent } from './components/add-playstation/add-playstation.component';
import { EditPlayStationComponent } from './components/edit-playstation/edit-playstation.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent },
  
  // Our new routes
  // nintendo
  { path: 'nintendo-list', component: NintendoListComponent },
  { path: 'add-nintendo', component: AddNintendoComponent },
  { path: 'edit-nintendo', component: EditNintendoComponent },
  { path: 'nintendo-list', component: NintendoListComponent },


    
  //{ path: '', pathMatch: 'full', redirectTo: 'add-nintendo' },
  { path: 'add-playstation', component: AddPlayStationComponent },
  { path: 'edit-playstation', component: EditPlayStationComponent },
  { path: 'playstation-list', component: PlayStationListComponent },
  
  // pc
  { path: 'add-PC', component: AddPCComponent },
  { path: 'PC-list', component: PCListComponent },
  { path: 'edit-PC', component: EditPCComponent },

  // xbox
  { path: 'xbox-list', component: XboxListComponent },
  { path: 'add-xbox', component: AddXboxComponent },
  { path: 'edit-xbox', component: EditXboxComponent },

  // mobile
  { path: 'mobile-list', component: MobileListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsListComponent,
    
    // Our new declarations
    // nintendo
    NintendoListComponent,
    AddNintendoComponent,
    EditNintendoComponent,

    // pc
    AddPCComponent,
    PCListComponent,
    EditPCComponent,

    // xbox
    AddXboxComponent,
    EditXboxComponent,
    XboxListComponent,

    // mobile
    MobileListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

//export class AppRoutingModule { }
export class AppModule { }