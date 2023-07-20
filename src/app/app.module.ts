import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { BlogService } from './shared/service/blog.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PostCreationComponent } from './post-creation/post-creation.component';
import { SinglepostCreationComponent } from './singlepost-creation/singlepost-creation.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
 @NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SinglepostComponent,
      PostCreationComponent,
      SinglepostCreationComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot(),
ReactiveFormsModule,
      BrowserAnimationsModule,



  ],
  providers: [BlogService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
