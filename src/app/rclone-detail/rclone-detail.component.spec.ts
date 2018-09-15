import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcloneDetailComponent } from './rclone-detail.component';

describe('RcloneDetailComponent', () => {
  let component: RcloneDetailComponent;
  let fixture: ComponentFixture<RcloneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcloneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcloneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
