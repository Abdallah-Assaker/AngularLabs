import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/models/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

constructor(private httpClient: HttpClient) {} 
  getAllPosts():Observable<any>
  {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
}
