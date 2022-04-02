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

// Our new imports
import { PlayStationListComponent } from './components/playStation-list/playstation-list.component';
import { AddPlayStationComponent } from './components/add-playstation/add-playstation.component';
import { EditPlayStationComponent } from './components/edit-playstation/edit-playstation.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent },
  { path: 'PC-list', component: PCListComponent },

  // Our new routes
  { path: 'nintendo-list', component: NintendoListComponent },
  { path: 'add-nintendo', component: AddNintendoComponent },
  { path: 'edit-nintendo', component: EditNintendoComponent }

    // Our new routes
    { path: 'playstation-list', component: PlayStationListComponent },
    { path: 'add-playstation', component: AddPlayStationComponent },
    { path: 'edit-playstation', component: EditPlayStationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }