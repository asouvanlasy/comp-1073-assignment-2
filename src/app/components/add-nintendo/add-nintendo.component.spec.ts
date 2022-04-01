import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNintendoComponent } from './add-nintendo.component';

describe('AddNintendoComponent', () => {
  let component: AddNintendoComponent;
  let fixture: ComponentFixture<AddNintendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNintendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNintendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
