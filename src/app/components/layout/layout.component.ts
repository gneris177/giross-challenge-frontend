import { Component } from '@angular/core'

type NavLeftStatus = 'initial' | 'open' | 'close'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  navLeftStatus: NavLeftStatus

  constructor() {
    this.navLeftStatus = 'initial'
  }

  toggleNavLeftOpen(): void {
    this.navLeftStatus = 'open'
  }

  toggleNavLeftClose(): void {
    this.navLeftStatus = 'close'
  }
}
