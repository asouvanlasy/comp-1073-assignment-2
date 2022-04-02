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



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent },
  // Our new routes
  //{ path: '', pathMatch: 'full', redirectTo: 'add-nintendo' },
  { path: 'add-nintendo', component: AddNintendoComponent },
  { path: 'nintendo-list', component: NintendoListComponent },
  { path: 'PC-list', component: PCListComponent },
  { path: 'add-PC', component: AddPCComponent },
  { path: 'PC-list', component: PCListComponent },

  // Our new routes
  //{ path: '', pathMatch: 'full', redirectTo: 'add-nintendo' },
  { path: 'add-nintendo', component: AddNintendoComponent },
  { path: 'edit-nintendo', component: EditNintendoComponent },
  { path: 'nintendo-list', component: NintendoListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsListComponent,
    

    // Our new declarations
    AddNintendoComponent,
    NintendoListComponent,
    PCListComponent,
    AddPCComponent,
    PCListComponent,

    // Our new declarations
    AddNintendoComponent,
    EditNintendoComponent,
    NintendoListComponent
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