import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayStationComponent } from './add-playstation.component';

describe('AddNintendoComponent', () => {
  let component: AddPlayStationComponent;
  let fixture: ComponentFixture<AddPlayStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlayStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
