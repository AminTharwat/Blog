import { BlogService } from 'src/app/shared/service/blogApi.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostCreation } from 'src/app/shared/models/posts';
import { BlogcreationService } from 'src/app/shared/service/blogcreation.service';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.scss']
})
export class PostCreationComponent implements OnInit {

  statusValues: string[] = ["publish", "future", "draft", "pending", "private"];

  postForm: FormGroup = new FormGroup({
    title: new FormControl('', { validators: [Validators.required] }),
    excerpt: new FormControl('', { validators: [Validators.required] }),
    content: new FormControl('', { validators: [Validators.required] }),
    date: new FormControl('', { validators: [Validators.required] }),
    status: new FormControl(this.statusValues[0], { validators: [Validators.required] }),
  });

  constructor(private fb: FormBuilder, private blogCreationService: BlogcreationService) {}

  ngOnInit() {}

  async onSubmit() {
    if (this.postForm.valid) {
      console.log(this.postForm.value);
      await this.blogCreationService.createPost(this.postForm.value);
    }
  }
}
