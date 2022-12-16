import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { UsersRoutingModule } from './users-routing.module'
import { UsersComponent } from './containers/users/users.component'
import { UsersGridComponent } from './components/users-grid/users-grid.component'
import { UsersCreateComponent } from './containers/users-create/users-create.component'
import { UsersFormComponent } from './components/users-form/users-form.component'
import { UsersUpdateComponent } from './containers/users-update/users-update.component'
import { UsersViewComponent } from './containers/users-view/users-view.component'
import { UsersHeaderComponent } from './components/users-header/users-header.component'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    UsersComponent,
    UsersGridComponent,
    UsersFormComponent,
    UsersCreateComponent,
    UsersUpdateComponent,
    UsersHeaderComponent,
    UsersViewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
  ],
  exports: [RouterModule],
})
export class UsersModule {}
