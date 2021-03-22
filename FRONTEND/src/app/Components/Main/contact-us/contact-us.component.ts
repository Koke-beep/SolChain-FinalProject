/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { DashboardService } from 'src/app/core/Services/dashboard.service'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
  messageForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl(''),
    text: new FormControl('', Validators.required)
  });

  constructor (
    private sendForm: DashboardService,
    private toastr: ToastrService) {}

  ngOnInit (): void {
  }

  submitMessage (dataMessage) {
    this.sendForm.sendMessage(dataMessage)
    this.messageForm.reset()
    this.toastr.success('Message sent successfully', 'Contact us:')
  }
}
