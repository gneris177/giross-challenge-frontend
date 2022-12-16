import { Observable, lastValueFrom } from 'rxjs'
import { UsersService } from './../../services/users.service'
import { Component, EventEmitter, Output } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { User } from '../../users'

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss'],
})
export class UsersUpdateComponent {
  messages!: Array<any>
  success: boolean = false 
  dataUser!: User
  id: number = Number(this.route.snapshot.paramMap.get('id'))

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getUser(this.id)
  }

  async getUser(id: number) {
    this.usersService.getUser(id).subscribe({
      next: (item) => (this.dataUser = item),
      error: (e) => (this.messages = e.error.message),
    })
  }

  updateHandler(user: User) {
    this.usersService.updateUser(this.id, user).subscribe({
      next: () => {
        this.messages = ['Sucesso!']
        this.success = true
        setTimeout(() => this.router.navigate([`/users/view/${this.id}`]), 3000)
      },
      error: (e) => {
        this.messages = e.error.message
      },
      complete: () => {
        setTimeout(() => (this.messages = []), 4000)
      },
    })
  }
}
