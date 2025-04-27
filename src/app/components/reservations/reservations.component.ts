import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CurrentStatusComponent } from './current-status/current-status.component';
import { CheckerComponent } from './checker/checker.component';
import { RoutingsComponent } from './routings/routings.component';

@Component({
  selector: 'app-reservations',
  imports: [NgIf, CurrentStatusComponent, CheckerComponent, RoutingsComponent],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css',
})
export class ReservationsComponent {
  isCurrentCardCollapsed = true;
  isCheckCardCollapsed = true;
  isRoutingCardCollapsed = true;
  isAutoAssignCardCollapsed = true;

  public toggleCurrentCardCollapse(): void {
    this.isCurrentCardCollapsed = !this.isCurrentCardCollapsed;
  }

  public toggleCheckCardCollapse(): void {
    this.isCheckCardCollapsed = !this.isCheckCardCollapsed;
  }

  public toggleRoutingCardCollapse(): void {
    this.isRoutingCardCollapsed = !this.isRoutingCardCollapsed;
  }

  public toggleAutoAssignCardCollapse(): void {
    this.isAutoAssignCardCollapsed = !this.isAutoAssignCardCollapsed;
  }
}
