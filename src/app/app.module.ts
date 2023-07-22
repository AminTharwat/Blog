import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { BlogService } from './shared/service/blogApi.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SinglepostCreationComponent } from './components/singlepost-creation/singlepost-creation.component';
import { PostCreationComponent } from './components/post-creation/post-creation.component';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import { PostItemComponent } from './components/post-item/post-item.component';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SinglepostComponent,
    PostCreationComponent,
    SinglepostCreationComponent,
    PostItemComponent,
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
export class AppModule {}
