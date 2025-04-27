import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CheckReservationsComponent } from './check-reservations/check-reservations.component';

@Component({
  selector: 'app-reservations',
  imports: [NgIf, CheckReservationsComponent],
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
