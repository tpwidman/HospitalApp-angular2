import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

@Component({
    selector: 'hospital-app',
    template: require('/home/home.component.html'),
    styles: [require('/styles/styles.css')],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/home', name:'Home',       component:{HomeComponent, CardComponent} useAsDefault: true},
    { path: '/about', name:'About',     component:AboutComponent},
    { path: '/contact', name:'Contact', component:ContactComponent},
    { path: '/blog', name: 'Blog',      component:BlogComponent},
    { path: '/*other', name:'Other',    redirectTo: ['Home'] }
])

export class AppComponent{}