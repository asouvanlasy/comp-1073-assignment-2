import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NintendoListComponent } from './nintendo-list.component';

describe('NintendoListComponent', () => {
  let component: NintendoListComponent;
  let fixture: ComponentFixture<NintendoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NintendoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NintendoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
