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
import { ListComponent } from './Components/list/list.component'
import { HomeComponent } from './Components/Main/home.component'

import { NgxPaginationModule } from 'ngx-pagination'
import { FormsModule } from '@angular/forms';
import { SolServicesComponent } from './Components/Main/solServices/sol-services/sol-services.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    HomepageComponent,
    DashboardComponent,
    ListComponent,
    HomeComponent,
    SolServicesComponent
  ],

  imports: [
    BrowserModule,
    NgParticlesModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
