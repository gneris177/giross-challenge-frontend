import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from '../../users'

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent {
  @Input() dataUser!: User
  @Input() view: boolean = false
  @Input() messages!: Array<any>
  @Input() textSubmit!: string
  @Output() onSubmit = new EventEmitter<User>()
  userForm!: FormGroup

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(this.dataUser ? this.dataUser.name : '', [
        Validators.required, Validators.minLength(3)
      ]),
      email: new FormControl(this.dataUser ? this.dataUser.email : '', [
        Validators.required, Validators.email
      ]),
      gender: new FormControl(this.dataUser ? this.dataUser.gender : '', [
        Validators.required,
      ]),
      phone: new FormControl(this.dataUser ? this.dataUser.phone : '', [
        Validators.required,
      ]),
      address: new FormControl(this.dataUser ? this.dataUser.address : '', [
        Validators.required,
      ]),
    })
  }

  get name() {
    return this.userForm.get('name')!
  }

  get email() {
    return this.userForm.get('email')!
  }

  get phone() {
    return this.userForm.get('phone')!
  }

  get gender() {
    return this.userForm.get('gender')!
  }

  get address() {
    return this.userForm.get('address')!
  }
  submit() {
    if (this.userForm.invalid) {
      return
    }

    this.onSubmit.emit(this.userForm.value)
  }
}
