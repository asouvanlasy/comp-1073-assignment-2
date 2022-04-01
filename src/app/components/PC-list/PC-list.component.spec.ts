import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCListComponent } from './PC-list.component';

describe('PCListComponent', () => {
  let component: PCListComponent;
  let fixture: ComponentFixture<PCListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
