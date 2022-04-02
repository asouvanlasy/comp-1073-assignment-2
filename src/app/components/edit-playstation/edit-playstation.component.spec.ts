import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaystationComponent } from './edit-playstation.component';

describe('EditPlaystationComponent', () => {
  let component: EditPlaystationComponent;
  let fixture: ComponentFixture<EditPlaystationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlaystationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaystationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
