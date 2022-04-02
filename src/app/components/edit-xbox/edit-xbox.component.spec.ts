import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditXboxComponent } from './edit-xbox.component';

describe('EditXboxComponent', () => {
  let component: EditXboxComponent;
  let fixture: ComponentFixture<EditXboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditXboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditXboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
