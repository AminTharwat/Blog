import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PostCreation } from 'src/app/shared/models/posts';
import { BlogService } from 'src/app/shared/service/blogApi.service';
import { BlogcreationService } from 'src/app/shared/service/blogcreation.service';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() posts?: PostCreation;

  constructor(private blogservice :BlogService , private spinner:NgxSpinnerService , public blog:BlogcreationService){}

  ngOnInit() {
  }

}
