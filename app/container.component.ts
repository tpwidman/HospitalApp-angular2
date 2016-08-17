import {Component} from 'angular2/core'
import {ContainerService} from './container.service'
@Component({
    selector: 'containers',
    templateUrl:'home.container.html'
})
export class ContainerComponent{
    title: string = "Welcome to JoePatient";
    containers;

    contructor(containerService: ContainerService){

    };
}