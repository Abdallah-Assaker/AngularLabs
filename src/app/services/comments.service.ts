import { Injectable } from '@angular/core';
import { IComment } from '../models/icomment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  getPostComments(id: number): Observable<any> {
    return this.HttpClient.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
  }

  constructor(private HttpClient: HttpClient) {}
}
