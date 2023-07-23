import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostCreation } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://localhost/wordpress/wp-json/wp/v2';
  private username = 'kamona';
  private password = 'kamona';

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`
  });

  getPosts() {
    return this.get(`posts`);
  }


  getSinglePosts(id: any) {
    return this.get(`posts/${id}`);
  }

  createPost(post: PostCreation) {
    return this.post(`posts`, post);
  }

  get(endpoint: string, headers?: any): Observable<any> {
    const requestOptions = { headers: headers || this.headers };
    return this.http.get(`${this.baseUrl}/${endpoint}`, requestOptions);
  }

  post(endpoint: string, data: any, headers?: any): Observable<any> {
    const requestOptions = { headers: headers || this.headers };
    return this.http.post(`${this.baseUrl}/${endpoint}`, data, requestOptions);
  }

  put(endpoint: string, data: any, headers?: any): Observable<any> {
    const requestOptions = { headers: headers || this.headers };
    return this.http.put(`${this.baseUrl}/${endpoint}`, data, requestOptions);
  }

  delete(endpoint: string, data: any, headers?: any): Observable<any> {
    const requestOptions = { headers: headers || this.headers };
    return this.http.delete(`${this.baseUrl}/${endpoint}`, requestOptions);
  }
}
