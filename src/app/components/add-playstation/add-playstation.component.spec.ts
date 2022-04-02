import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaystationComponent } from './add-playstation.component';

describe('AddPlaystationComponent', () => {
  let component: AddPlaystationComponent;
  let fixture: ComponentFixture<AddPlaystationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlaystationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaystationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
