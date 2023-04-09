import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UsersService } from 'src/app/services/users_services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersList: IUser[] | null = null;

  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next: (users) => (this.usersList = users),
    });
  }
}
