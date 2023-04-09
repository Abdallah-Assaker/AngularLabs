import { Component } from '@angular/core';
import { PostsService } from '../../services/posts-services/posts.service';
import { IPost } from 'src/app/models/IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

postsList:IPost[] | null = null;
DisplayPosts():void{
  this.PostsService.getAllPosts().subscribe({
    next : posts => this.postsList = posts
  })
}

constructor(private PostsService:PostsService ) { }
}
