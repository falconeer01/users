import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PostComponent } from '../components/post/post.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"pageOne", component:PageOneComponent},
    {path:"pageTwo", component:PageTwoComponent},
    {path:"posts", component:PostComponent},
    {path:"users", component:UserComponent}
];
