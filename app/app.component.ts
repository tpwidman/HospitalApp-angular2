import {Component} from 'angular2/core';
import {ContainerComponent} from './container.component'
@Component({
    selector: 'hospital-app',
    template: '<h1>Hello world!</h1><container></container>',
    directives: [
        
    ]
})
export class AppComponent{}




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