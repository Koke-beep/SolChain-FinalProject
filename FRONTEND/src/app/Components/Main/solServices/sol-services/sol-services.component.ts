import { Component, OnInit } from '@angular/core'
import AOS from 'aos'

@Component({
  selector: 'app-sol-services',
  templateUrl: './sol-services.component.html',
  styleUrls: ['./sol-services.component.scss']
})
export class SolServicesComponent implements OnInit {
  ngOnInit (): void {
    AOS.init()
  }
}
