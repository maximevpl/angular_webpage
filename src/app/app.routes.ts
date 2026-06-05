import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page-component/landing-page-component.component';
import { SingleFaceSnapComponentComponent } from './single-face-snap-component/single-face-snap-component.component';
import { ContactComponent } from './contact/contact.component';
import { CinemaInformationsComponent } from './cinema-informations/cinema-informations.component';
import { FilmListComponent } from './film-list/film-list.component';
import { MyAccountComponent } from './my-account/my-account.component';

export const routes: Routes = [
    { path: 'facesnaps/:id', component: SingleFaceSnapComponentComponent },
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent },
    { path:'contact', component: ContactComponent},
    { path:'cinema-informations', component: CinemaInformationsComponent},
    { path:'film-list', component: FilmListComponent},
    { path:'my-account', component: MyAccountComponent}
];
