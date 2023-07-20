import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/service/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss']
})
export class SinglepostComponent implements OnInit {
  blogSinglePosts:any
  errorMessage:any
  id?:string
    constructor(private blogservice :BlogService , private spinner:NgxSpinnerService , private route:ActivatedRoute){}

    ngOnInit() {
      this.id=this.route.snapshot.paramMap.get('id') as string
      this.getSinglePosts();

     }

     getSinglePosts(){
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
     this.blogservice.getSinglePosts(this.id).subscribe(
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

