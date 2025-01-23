import { Routes } from '@angular/router';
import { HomePageComponent } from './features/pages/homepage/homepage.component';
import { BookFlightComponent } from './features/pages/book-flight/book-flight.component';

export const routes: Routes = [
    { path: "", component: HomePageComponent},
    { path: 'book-flight/:flightNumber',component: BookFlightComponent},
];
