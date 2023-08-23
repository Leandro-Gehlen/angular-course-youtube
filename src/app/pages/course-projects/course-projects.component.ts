import { Component } from '@angular/core';

@Component({
  selector: 'app-course-projects',
  templateUrl: './course-projects.component.html',
  styleUrls: ['./course-projects.component.scss']
})
export class CourseProjectsComponent {

  projects:Array<any> = [
    {
    id: 1, 
    projectName: "Posts Task",
    description:"This is a task to work with ngFor , ngIf and exchange data btw components"}
  ]

 btnClick(i:number){
  console.log(i)
 }
}
