import { NgxSpinnerService } from 'ngx-spinner';
import { Component, Input, OnInit } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/shared/service/blogApi.service';
import { PostCreation } from 'src/app/shared/models/posts';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss']
})
export class SinglepostComponent implements OnInit {
  blogSinglePosts:any
  errorMessage:any
  id?:string
  @Input() post?: PostCreation;

    constructor(private blog :BlogService , private spinner:NgxSpinnerService , private route:ActivatedRoute){}

    ngOnInit() {
      this.id=this.route.snapshot.paramMap.get('id') as string
      this.getSinglePosts();

     }

     getSinglePosts(){
    this.spinner.show();

    setTimeout(() => {
       this.spinner.hide();
    }, 1500);
     this.blog.getSinglePosts(this.id).subscribe(
      (data) =>{
        this.blogSinglePosts=data
       },
  (error)=>{
    this.errorMessage=error.message
    console.log(error)
  }
    )
  }



  }

