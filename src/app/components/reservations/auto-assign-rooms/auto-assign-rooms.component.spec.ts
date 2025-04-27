import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAssignRoomsComponent } from './auto-assign-rooms.component';

describe('AutoAssignRoomsComponent', () => {
  let component: AutoAssignRoomsComponent;
  let fixture: ComponentFixture<AutoAssignRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoAssignRoomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoAssignRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
