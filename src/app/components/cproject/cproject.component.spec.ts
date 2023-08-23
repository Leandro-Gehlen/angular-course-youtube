import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprojectComponent } from './cproject.component';

describe('CprojectComponent', () => {
  let component: CprojectComponent;
  let fixture: ComponentFixture<CprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CprojectComponent]
    });
    fixture = TestBed.createComponent(CprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
