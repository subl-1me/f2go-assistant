import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStatusComponent } from './current-status.component';

describe('CurrentStatusComponent', () => {
  let component: CurrentStatusComponent;
  let fixture: ComponentFixture<CurrentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
