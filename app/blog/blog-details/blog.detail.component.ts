import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { DetailService } from './blog.detail.service'
// Import component decorator
@Component ({
    template: 'blog.detail.component'
})
@Injectable()

// Component class
export class DetailComponent{
    blogDetails: BlogDetails[];

    constructor(private blogService: DetailService) {}
    ngOnInit() {
        this.blogDetails = this.blogService.getDetails();
    }
}