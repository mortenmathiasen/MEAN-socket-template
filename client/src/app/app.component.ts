import { Component } from '@angular/core';
import { Blog } from './blog';
import { Http, Response } from '@angular/http';
import './rxjs-operators';
import { BlogService } from "./blog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BlogService]
})
export class AppComponent {
  isSubmitted: boolean = false;
  title = 'MEAN app with Angular2';
  model = new Blog("", "");
  public blogMessages = [];

  constructor (private http: Http, private blogService: BlogService) {}

  submitBlog() {
    this.blogService.addBlog(this.model)
      .subscribe(
        blogMsg => {
          //console.log("Messages:",messages);
          this.model = blogMsg;
          this.getBlogs();
        },
        error =>  this.title = <any>error
      );
  }

  getBlogs() {
    console.log("Subscribe to service");
    this.blogService.getBlogs()
      .subscribe(
        messages => {
          //console.log("Messages:",messages);
          this.blogMessages = messages;
        },
        error =>  this.title = <any>error
      );
  }

  ngOnInit() {
    this.getBlogs();
  }

}
