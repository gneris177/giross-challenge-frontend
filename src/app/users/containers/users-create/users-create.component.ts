import { UsersService } from './../../services/users.service'
import { Component, EventEmitter, Output } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { User } from '../../users'

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss'],
})
export class UsersCreateComponent {
  messages!: Array<any>

  constructor(private usersService: UsersService, private router: Router) {}

  createHandler(user: User) {
    this.usersService.createUser(user).subscribe({
      next: (res) => this.router.navigate(['/users']),
      error: (e) => {
        this.messages = e.error.message || ['Erro ao fazer o cadastro']
        setTimeout(() => (this.messages = []), 4000)
      },
    })
  }
}
