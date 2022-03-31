// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AddStudentComponent } from './components/add-student/add-student.component';
// import { EditStudentComponent } from './components/edit-student/edit-student.component';
// import { StudentsListComponent } from './components/students-list/students-list.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AddStudentComponent,
//     EditStudentComponent,
//     StudentsListComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent }
];

/*
@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
*/

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsListComponent
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