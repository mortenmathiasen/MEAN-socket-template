import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Blog }           from './blog';
import { Observable }     from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class BlogService {
    private getBlogsUrl = 'blog/get';  // URL to web API
    private postBlogUrl = 'blog/post';  // URL to web API
    constructor (private http: Http) {}
    private socket;
    private url = window.location.origin;

    /*
     * Get blog messages from server
     */
    getBlogs (): Observable<Blog[]> {
        let observable = new Observable(observer => {
            console.log("Socket:",this.url);
            this.socket = io(this.url);
            this.socket.on('refresh', (data) => {
                observer.next(data);
            });

            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }

    /*
     * Send blog message to server
     */
    addBlog (blog: Blog): Observable<Blog> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.postBlogUrl, blog, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /*
     * Data handlers
     */
    private extractData(res: Response) {
        let body = res.json();
        //console.log(body);
        return body || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        //console.log(errMsg);
        return Observable.throw(errMsg);
    }
}
