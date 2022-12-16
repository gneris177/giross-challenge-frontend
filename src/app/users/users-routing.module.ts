import { UsersUpdateComponent } from './containers/users-update/users-update.component';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UsersCreateComponent } from './containers/users-create/users-create.component';
import { UsersComponent } from './containers/users/users.component'
import { UsersViewComponent } from './containers/users-view/users-view.component'

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'create', component: UsersCreateComponent },
  { path: 'update/:id', component: UsersUpdateComponent },
  { path: 'view/:id', component: UsersViewComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
