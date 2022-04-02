import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPCComponent } from './add-PC.component';

describe('AddPCComponent', () => {
  let component: AddPCComponent;
  let fixture: ComponentFixture<AddPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
