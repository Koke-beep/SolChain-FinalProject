/* eslint-disable no-debugger */
/* eslint-disable no-useless-constructor */
import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
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

  constructor (
    private checkLogin: DashboardService,
    private toastr: ToastrService) {
  }

  submitForm (dataForm) {
    return this.checkLogin.postUser(dataForm).subscribe(data => {
      this.checkLogin.user.next(data)
      this.closeLogin()
      this.toastr.success('Welcome', 'Login successfull')
    }, () => {
      this.toastr.error('Password/mail inaccurate ', 'Login fail')
    })
  }

  closeLogin () {
    this.checkLogin.popupLogin()
  }
}
