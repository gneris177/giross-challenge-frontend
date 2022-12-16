import { UsersService } from '../../services/users.service'
import { Component, EventEmitter, Output } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { User } from '../../users'

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent {
  messages!: Array<any>
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
}
