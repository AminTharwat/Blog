import { SinglepostCreationComponent } from './singlepost-creation/singlepost-creation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { PostCreationComponent } from './post-creation/post-creation.component';

const routes: Routes = [
{path:'',redirectTo:'posts',pathMatch:'full'},
  {path:'posts' , component:PostComponent},
{path:'posts/:id',component:SinglepostComponent},
{path:'postcreation',component:PostCreationComponent} ,
{path:'singlepostcreation',component:SinglepostCreationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
