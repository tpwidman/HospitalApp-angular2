// Import component decorator
import { Component } from '@angular/core';
import{FetchJsonPipe} from './fetch-json.pipe';

@Component({
    selector:'hospital-list',
    templateUrl:'card.component.html',
    pipes:[FetchJsonPipe]
})
class CardComponent{
    heading = 'Hospital Information'
    
}
export class CardDetailComponent{}


