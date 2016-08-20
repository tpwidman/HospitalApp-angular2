import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {RouteConfig} from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {CardComponent} from './home/sample-rating-card/card.component'
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';
import {DetailComponent} from './blog/blog-details/blog-detail.component'

@Component({
    selector: 'hospital-app',
    template: ('/home/home.component.html'),
    styles: [('/styles/styles.css')],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/home', name:'Home',       component:{HomeComponent, CardComponent}, useAsDefault: true},
    { path: '/about', name:'About',     component:AboutComponent},
    { path: '/contact', name:'Contact', component:ContactComponent},
    { path: '/blog', name: 'Blog',      component:BlogComponent},
    { path: '/*other', name:'Other',    redirectTo: ['Home'] }
])

export class AppComponent{}