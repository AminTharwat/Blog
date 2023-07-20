import { Component ,OnInit } from '@angular/core';
import { BlogService } from '../shared/service/blog.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
blogPosts:any
errorMessage:any
  constructor(private blogservice :BlogService , private spinner:NgxSpinnerService){}
  ngOnInit() {
    this.getPosts();

   }

getPosts(){
  this.spinner.show();

  setTimeout(() => {
     this.spinner.hide();
  }, 1500);
   this.blogservice.getPosts().subscribe(
    (data) =>{
      this.blogPosts=data
     },
(error)=>{
  this.errorMessage=error.message
  console.log(error)
}
  )
}



singlePost(){

}
}
