import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LehtComponent } from './leht/leht.component';
import { VormComponent } from './vorm/vorm.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'leht', component: LehtComponent},
    { path: 'vorm', component: VormComponent},
    { path: '**', redirectTo: ''}
];
