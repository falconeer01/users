import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  posts:Post[] = [];

  ngOnInit(): void {
    this.getList();
  }

  constructor(private postService:PostService){}

  getList(){
     this.postService.getAll().subscribe(result=>{
       this.posts = result["posts"];
    })
  }
}
