import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystationListComponent } from './playstation-list.component';

describe('PlaystationListComponent', () => {
  let component: PlaystationListComponent;
  let fixture: ComponentFixture<PlaystationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaystationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaystationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
