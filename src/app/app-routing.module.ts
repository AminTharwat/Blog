 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostCreationComponent } from './components/post-creation/post-creation.component';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import { SinglepostCreationComponent } from './components/singlepost-creation/singlepost-creation.component';

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
