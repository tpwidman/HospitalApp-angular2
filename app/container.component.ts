import {Component} from 'angular2/core'

@Component({
    selector: 'containers',
    template: `
    <h2>Hello</h2>
    {{ title }}
    `
})
export class ContainerComponent{
    title: string = "Welcome to JoePatient";
}