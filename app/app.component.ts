import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component'

@Component({
    selector: 'hospital-app',
    template: require('/home/home.html'),
    styles: [require('/styles/styles.css')]
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers : [StateService, BlogService]
})

@RouteConfig([
    { path: '/home', name:'Home',       component:HomeComponent, useAsDefault: true},
    { path: '/about', name:'About',     component:AboutComponent},
    { path: '/contact', name:'Contact', component:ContactComponent},
    { path: '/blog', name: 'Blog',      component:BlogComponent},
    { path: '/*other', name:'Other',    redirectTo: ['Home'] }
])

export class AppComponent{}