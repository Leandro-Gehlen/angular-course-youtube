import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseProjectsComponent } from './pages/course-projects/course-projects.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'course-projects', component:CourseProjectsComponent},
  {path:'personal-projects', component:PersonalProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
