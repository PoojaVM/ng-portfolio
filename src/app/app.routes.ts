import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '/about-me', component: AppComponent},
    {path: '/work-experience', component: AppComponent},
    {path: '/projects', component: AppComponent},
    {path: '/skills', component: AppComponent},
    {path: '/contact-me', component: AppComponent},
];
