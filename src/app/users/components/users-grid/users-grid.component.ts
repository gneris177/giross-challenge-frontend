import { ActivatedRoute, Router } from '@angular/router'
import { UsersService } from './../../services/users.service'
import { Component, Input } from '@angular/core'
import { User } from '../../users'

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss'],
})
export class UsersGridComponent {
  @Input() data: User[] = []
  @Input() messages: User[] = []

  constructor(private router: Router, private usersService: UsersService) {}

  reloadCurrentRoute() {
    let currentUrl = this.router.url
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl])
    })
  }

  delete(id: any): void {
    this.usersService.deleteUser(+id).subscribe({
      next: () => this.reloadCurrentRoute(),
      error: (e) => (this.messages = e.error.message),
    })
  }
}
