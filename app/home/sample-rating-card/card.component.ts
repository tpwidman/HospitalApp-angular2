// Import component decorator
import { Component } from '@angular/core';
import{FetchJsonPipe} from './fetch-json.pipe';
import { CardService } from './card.service';

@Component({
    selector:'hospital-list',
    templateUrl:'app/home/sample-rating-card/card.component.html',
    styleUrls:['app/home/sample-rating-card/card.component.css'],
    pipes:[FetchJsonPipe],
    directives:[]
})
class CardComponent{
    heading = 'Hospital Information'
    
}
export class CardDetailComponent{
    cardDetails: CardDetails[];

    constructor(private cardService: CardService) {}
    ngOnInit() {
        this.cardDetails = this.cardService.getcardDetails();
    }
}


