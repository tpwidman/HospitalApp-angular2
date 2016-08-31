import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class CardService{
    
    constructor(private http: Http){

    }

    getHospitals(){
        return this.http.get('hospitals.json');
    }
}