import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        loadComponent: () => import('./rick/pages/rick-home/rick-home.component').then(m => m.RickHomeComponent)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
