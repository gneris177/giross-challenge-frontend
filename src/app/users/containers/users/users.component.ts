import { Component } from '@angular/core'
import { UsersService } from '../../services/users.service'
import { User } from '../../users'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users!: User[]

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers()
  }

  async getUsers() {
    this.usersService.getUsers().subscribe((items) => (this.users = items))
  }
}
