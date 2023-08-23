import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseProjectsComponent } from './course-projects.component';

describe('CourseProjectsComponent', () => {
  let component: CourseProjectsComponent;
  let fixture: ComponentFixture<CourseProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseProjectsComponent]
    });
    fixture = TestBed.createComponent(CourseProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
