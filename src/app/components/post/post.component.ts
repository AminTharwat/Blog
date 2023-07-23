import { Component ,Input,OnInit } from '@angular/core';
import { BlogService } from '../../shared/service/blogApi.service';
import { NgxSpinnerService } from "ngx-spinner";
import { BlogcreationService } from 'src/app/shared/service/blogcreation.service';
import { PostCreation } from 'src/app/shared/models/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
blogPosts:any
errorMessage:any
 @Input() posts?: any;

  constructor(private blogservice :BlogService , private spinner:NgxSpinnerService , public blog:BlogcreationService){}
 async ngOnInit() {
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


}
