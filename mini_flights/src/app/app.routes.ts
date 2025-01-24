import { Routes } from '@angular/router';
import { HomePageComponent } from './features/pages/homepage/homepage.component';
import { BookFlightComponent } from './features/pages/book-flight/book-flight.component';
import { ManageDestinationsComponent } from './features/pages/manage-destinations/manage-destinations.component';
import { DestinationPageComponent } from './features/pages/destination-page/destination-page.component';

export const routes: Routes = [
    { path: "", component: HomePageComponent},
    { path: 'book-flight/:flightNumber',component: BookFlightComponent},
    { path: 'manage-destinations', component: ManageDestinationsComponent},
    { path: 'destination-page/:code', component: DestinationPageComponent},

];
