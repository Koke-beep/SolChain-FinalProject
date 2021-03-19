/* eslint-disable no-debugger */
/* eslint-disable no-useless-constructor */
import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { DashboardService } from 'src/app/core/Services/dashboard.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  signinForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor (private checkLogin: DashboardService) {}

  submitForm (dataForm) {
    return this.checkLogin.postUser(dataForm).subscribe(data => {
      this.checkLogin.user.next(data)
      this.closeLogin()
    }, error => {
      console.log(error)
    })
  }

  closeLogin () {
    this.checkLogin.popupLogin()
  }
}
