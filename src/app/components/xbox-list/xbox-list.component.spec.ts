import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxListComponent } from './xbox-list.component';

describe('XboxListComponent', () => {
  let component: XboxListComponent;
  let fixture: ComponentFixture<XboxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XboxListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
