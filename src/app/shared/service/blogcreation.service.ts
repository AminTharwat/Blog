import { Injectable } from '@angular/core';
import { PostCreation } from '../models/posts';
import { HttpClient } from '@angular/common/http';
 import { lastValueFrom } from 'rxjs';
import { BlogService } from './blogApi.service';

@Injectable({
  providedIn: 'root'
})
export class BlogcreationService {
  // private blogUrl='https://devteam-sandbox-1.woovl.com/wp-json/wp/v2'
  // constructor(private http:HttpClient) { }
  // posts:PostCreation[]=[]

  // createPost(post: PostCreation) {
  //   const url = `${this.blogUrl}/posts`;
  //   return this.http.post(url, post);



  // }



  posts:PostCreation[]=[];

constructor(public blog:BlogService){}

 async  createPost(post: PostCreation)  {
  const request$ = this.blog.createPost(post );
  let response = await lastValueFrom(request$);
   console.log(response);

}
// async  getPosts( ) {
//   const request$ = this.blog.getPosts( );
//   let response = await lastValueFrom(request$);
//   this.posts=response
//   console.log(response);

// }

}
