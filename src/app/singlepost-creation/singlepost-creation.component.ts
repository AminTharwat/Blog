import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogcreationService } from '../shared/service/blogcreation.service';

@Component({
  selector: 'app-singlepost-creation',
  templateUrl: './singlepost-creation.component.html',
  styleUrls: ['./singlepost-creation.component.scss']
})
export class SinglepostCreationComponent implements OnInit {
  singleForm: FormGroup;

  constructor(private fb: FormBuilder, private blogCreationService: BlogcreationService) {
    this.singleForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
