import { Component, OnInit } from '@angular/core'
import { DashboardService } from 'src/app/core/Services/dashboard.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  login = this.userLogin.user

  constructor (private userLogin: DashboardService) {}

  ngOnInit (): void {
  }
}
