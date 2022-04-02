import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { PCListComponent } from './components/PC-list/PC-list.component';

// Our new imports
import { NintendoListComponent } from './components/nintendo-list/nintendo-list.component';
import { AddNintendoComponent } from './components/add-nintendo/add-nintendo.component';
import { EditNintendoComponent } from './components/edit-nintendo/edit-nintendo.component';
import { XboxListComponent } from './components/xbox-list/xbox-list.component';
import { AddXboxComponent } from './components/add-xbox/add-xbox.component';
import { EditXboxComponent } from './components/edit-xbox/edit-xbox.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent },
  { path: 'PC-list', component: PCListComponent },

  // Our new routes
  { path: 'nintendo-list', component: NintendoListComponent },
  { path: 'add-nintendo', component: AddNintendoComponent },
  { path: 'edit-nintendo', component: EditNintendoComponent },
  { path: 'xbox-list', component: XboxListComponent },
  { path: 'add-xbox', component: AddXboxComponent },
  { path: 'edit-xbox', component: EditXboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }