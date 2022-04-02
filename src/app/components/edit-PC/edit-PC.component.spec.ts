import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPCComponent } from './edit-PC.component';

describe('EditPCComponent', () => {
  let component: EditPCComponent;
  let fixture: ComponentFixture<EditPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
