import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddXboxComponent } from './add-xbox.component';

describe('AddXboxComponent', () => {
  let component: AddXboxComponent;
  let fixture: ComponentFixture<AddXboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddXboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddXboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
