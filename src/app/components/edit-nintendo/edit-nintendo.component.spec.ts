import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNintendoComponent } from './edit-nintendo.component';

describe('EditNintendoComponent', () => {
  let component: EditNintendoComponent;
  let fixture: ComponentFixture<EditNintendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNintendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNintendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
