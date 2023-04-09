import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/models/icomment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  commentsList: IComment[] | null = null;
  postId!: number;

  constructor(
    private commentsService: CommentsService,
    private activateRoute: ActivatedRoute,
    private location:Location
  ) {}

  ngOnInit(): void {
    this.postId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.commentsService.getPostComments(this.postId).subscribe({
      next: (comments) => (this.commentsList = comments),
    });
  }

  back()
  {
    this.location.back();
  }
}
