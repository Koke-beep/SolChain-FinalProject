/* eslint-disable no-useless-constructor */
import { Component } from '@angular/core'
import { DashboardService } from './core/Services/dashboard.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  login = this.statusLogin.login

  constructor (private statusLogin:DashboardService) {}
}
