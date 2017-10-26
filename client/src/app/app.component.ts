import { Component, OnInit } from '@angular/core';
import { Blog } from './blog';
import './rxjs-operators';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BlogService]
})
export class AppComponent implements OnInit {
  isSubmitted = false;
  title = 'MEAN app with Socket IO';
  model = new Blog('', '');
  public blogMessages = [];

  constructor (private blogService: BlogService) {}

  submitBlog() {
    this.blogService.addBlog(this.model)
      .subscribe(
        blogMsg => {
          // console.log("Messages:", messages);
          this.model = blogMsg;
          // this.getBlogs();
        },
        error =>  this.title = <any>error
      );
  }

  getBlogs() {
    console.log('Subscribe to service');
    this.blogService.getBlogs()
      .subscribe(
        messages => {
          // console.log("Messages:",messages);
          this.blogMessages = messages;
        },
        error =>  this.title = <any>error
      );
  }

  ngOnInit() {
    this.getBlogs();
  }
}
