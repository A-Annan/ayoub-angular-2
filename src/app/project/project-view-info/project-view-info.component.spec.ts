import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewInfoComponent } from './project-view-info.component';

describe('ProjectViewInfoComponent', () => {
  let component: ProjectViewInfoComponent;
  let fixture: ComponentFixture<ProjectViewInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectViewInfoComponent]
    });
    fixture = TestBed.createComponent(ProjectViewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
