import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { BlogService } from './blog.details.service'
// Import component decorator
@Component ({
    template: `<h2>Blog Detail</h2>`
})
@Injectable()

// Component class
export class DetailComponent{
    blogDetails: BlogDetails[];

    constructor(private blogService: BlogService) {}
    ngOnInit() {
        this.blogDetails = this.blogService.getblogDetails();
    }
}