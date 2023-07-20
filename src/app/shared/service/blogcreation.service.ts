import { Injectable } from '@angular/core';
import { PostCreation } from '../models/posts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogcreationService {
  private blogUrl='https://devteam-sandbox-1.woovl.com/'
  constructor(private http:HttpClient) { }
  posts:PostCreation[]=[]

  createPost(post: PostCreation) {
    const url = `${this.blogUrl}/wp/v2/posts`;
    return this.http.post(url, post);
  }
}
