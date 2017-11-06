import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomepageComponent },
    //
    { path: '404', component: NotfoundComponent },
    { path: '**', redirectTo: '/404' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
    routes, { useHash: true }
);
