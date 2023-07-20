import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostCreation } from '../shared/models/posts';
import { BlogcreationService } from '../shared/service/blogcreation.service';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.scss']
})
export class PostCreationComponent implements OnInit {

  postForm: FormGroup = new FormGroup({
    title: new FormControl('', { validators: [Validators.required] }),
    excerpt : new FormControl('', { validators: [Validators.required] }),
    date: new FormControl('', { validators: [Validators.required] }),
    });
  constructor(private fb: FormBuilder, private blogCreationService: BlogcreationService) {

  }

  ngOnInit() {
    this.onSubmit()
  }

  onSubmit() {
    const post: PostCreation = {
      title: this.postForm.get('title')?.value,
      date: this.postForm.get('date')?.value,
      excerpt: this.postForm.get('excerpt')?.value
    };
    console.log(post);
    this.blogCreationService.createPost(post).subscribe((response) => {
      console.log(response);
      },  );
  }
}
