import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.scss'],
})
export class UsersHeaderComponent {
  @Input() title: String = ''
  @Input() buttonText: String = ''
  @Input() to: String = ''

  constructor(private router: Router) {}

  toLink() {
    this.router.navigate([this.to])
  }
}
