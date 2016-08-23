import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';

import{CardService} from './home/sample-rating-card/card.service';
import{BlogService} from './blog/blog-details/blog.detail.service';

@Component({
    selector: 'app',
    template: `<div class="hospital-app">
                Hello!
                <main></main>
                </div>`,
    styles: [('/styles/styles.css')],
    directives: [ROUTER_DIRECTIVES],
    providers:[CardService, BlogService]
})
@Routes([
    { path: '/home', name:'Home',       component:HomeComponent, useAsDefault: true },
    { path: '/about', name:'About',     component:AboutComponent },
    { path: '/contact', name:'Contact', component:ContactComponent },
    { path: '/blog', name: 'Blog',      component:BlogComponent },
    { path: '/*',                       component:HomeComponent }
])

export class AppComponent{}