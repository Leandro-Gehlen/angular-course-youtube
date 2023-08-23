import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CourseProjectsComponent } from './pages/course-projects/course-projects.component';
import { PersonalProjectsComponent } from './pages/personal-projects/personal-projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CprojectComponent } from './components/cproject/cproject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseProjectsComponent,
    PersonalProjectsComponent,
    NavbarComponent,
    FooterComponent,
    CprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
