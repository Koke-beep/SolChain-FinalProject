import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailComponent } from './Components/Detail/detail.component'
import { AboutUsComponent } from './Components/Main/aboutUs/about-us/about-us.component'
import { ContactUsComponent } from './Components/Main/contact-us/contact-us.component'
import { DashboardComponent } from './Components/Main/dashboard/dashboard.component'
import { HomeComponent } from './Components/Main/home.component'
import { SolServicesComponent } from './Components/Main/solServices/sol-services/sol-services.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:coinId', component: DetailComponent },
  { path: 'network', component: DashboardComponent },
  { path: 'services', component: SolServicesComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
