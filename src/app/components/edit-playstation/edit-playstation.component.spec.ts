import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlayStationComponent } from './edit-playstation.component';

describe('EditNintendoComponent', () => {
  let component: EditPlayStationComponent;
  let fixture: ComponentFixture<EditPlayStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlayStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlayStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
