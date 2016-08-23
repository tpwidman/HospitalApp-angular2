import {provideRouter, RouterConfig} from '@angular/router';

import {HomeComponent} from './home/home.component';
// import {CardComponent} from './home/sample-rating-card/card.component'
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';
// import {DetailComponent} from './blog/blog-details/blog-detail.component'

// Route Configuration
export const routes: RouterConfig = [
    { path: '/home',    component:HomeComponent, useAsDefault: true},
    { path: '/about',   component: AboutComponent },
    { path: '/contact', component: ContactComponent },
    { path: '/blog',    component: BlogComponent },
    { path: '/*other',  redirectTo: ['Home'] }
]

// Export routes

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];