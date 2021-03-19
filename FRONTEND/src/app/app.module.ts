import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './Components/Shared/Header/header.component'
import { AsideComponent } from './Components/Shared/aside/aside.component'
import { HomepageComponent } from './Components/Main/homepage/homepage.component'
import { NgParticlesModule } from 'ng-particles'
import { DashboardComponent } from './Components/Main/dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { DetailComponent } from './Components/Detail/detail.component'
import { HomeComponent } from './Components/Main/home.component'
import { SolServicesComponent } from './Components/Main/solServices/sol-services/sol-services.component'

import { NgxPaginationModule } from 'ngx-pagination'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IgxFinancialChartModule } from 'igniteui-angular-charts'
import { ClipboardModule } from 'ngx-clipboard'
import { LoginComponent } from './Components/Shared/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    HomepageComponent,
    DashboardComponent,
    DetailComponent,
    HomeComponent,
    SolServicesComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    NgParticlesModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    ClipboardModule,
    FormsModule,
    IgxFinancialChartModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
