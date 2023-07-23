import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singlepost-creation',
  templateUrl: './singlepost-creation.component.html',
  styleUrls: ['./singlepost-creation.component.scss']
})
export class SinglepostCreationComponent implements OnInit {
  singleForm: FormGroup;

  constructor(private fb: FormBuilder,  ) {
    this.singleForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}




//  statusValues: string[] = ["publish", "future", "draft", "pending", "private"];

//   singleForm: FormGroup = new FormGroup({
//     title: new FormControl('', { validators: [Validators.required] }),
//     content: new FormControl('', { validators: [Validators.required] }),
//     date: new FormControl('', { validators: [Validators.required] }),
//     status: new FormControl(this.statusValues[0], { validators: [Validators.required] }),
//   });

//   constructor(private fb: FormBuilder, public route:ActivatedRoute ) {

//   }
//   postId?: number;
//   posts: coursecreation | undefined = undefined;
//   async ngOnInit() {
//     this.route.params.subscribe(async params => {
//     this.postId = +params['id'];
//     this.posts = await this.dataService.getCourseById(this.courseId);
//     });
//     }

//   async onSubmit() {
//     if (this.singleForm.valid) {
//       console.log(this.singleForm.value);
//       await this.blogCreationService.createPost(this.singleForm.value);
//     }
//   }
