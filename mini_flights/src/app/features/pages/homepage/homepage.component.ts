import { Component } from '@angular/core';
import { FindFlightComponent } from '../../find-flight/find-flight.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FindFlightComponent],
  template: `
    <app-find-flight></app-find-flight>
  `
})
export class HomePageComponent {}