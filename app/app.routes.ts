import {provideRouter, RouterConfig} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CardComponent} from './home/sample-rating-card/card.component'
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';

// Route Configuration
export const routes: RouterConfig = [
    { path: '/home', name:'Home',       component:{HomeComponent, CardComponent} useAsDefault: true},
    { path: '/about', name:'About',     component:AboutComponent},
    { path: '/contact', name:'Contact', component:ContactComponent},
    { path: '/blog', name: 'Blog',      component:BlogComponent},
    { path: '/*other', name:'Other',    redirectTo: ['Home'] }
]
