import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ContainerComponent} from './container.component';

import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {ContactComponent} from './contact.component'

@RouteConfig([
    { path: '/home', name:'Home', component:HomeComponent, useAsDefault: true},
    { path: '/about', name:'About', component:AboutComponent},
    { path: '/contact', name:'Contact', component:ContactComponent},
    { path: '/*other', name:'Other', redirectTo: ['Home'] }
])

@Component({
    selector: 'hospital-app',
    templateURL: '/home/home.html',
    directives: [
        ContainerComponent
    ]
})
export class AppComponent{

}




// var joeApp = angular

//     .module('joeApp', ['ui.router']);

//     joeApp.config(function ($stateProvider, $urlProvider) {

//     $urlRouteProvider.otherwise('/');

//     $stateProvider

//         .state('home', {
//             url: "/home",
//             templateUrl: "views/home/home.html"
//         })
//         .state('home.list', {
//             url:'/list',
//             templateurl: 'views/home/home-list.html',
//             controller: function($scope) {
//                 $scope.items = ['A', 'list', 'of', 'items'];
//             }
//         })
//         .state('blog', {
//             url: "/blog",
//             templateUrl: "views/blog/blog.html"
//         })
//         .state('contact', {
//             url:'/contact',
//             templateurl: 'views/contact/contact.html'
//         })
//         .state('about', {
//             url: "/about",
//             templateUrl: "views/about/about.html"
//         })
//     })