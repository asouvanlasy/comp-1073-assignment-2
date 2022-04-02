import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayStationListComponent } from './playstation-list.component';

describe('PlayStationListComponent', () => {
  let component: PlayStationListComponent;
  let fixture: ComponentFixture<PlayStationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayStationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayStationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
