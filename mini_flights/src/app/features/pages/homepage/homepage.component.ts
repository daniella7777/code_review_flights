import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindFlightComponent } from '../../find-flight/find-flight.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FindFlightComponent],
  template: `
    <app-find-flight></app-find-flight>
  `
})
export class HomePageComponent {}