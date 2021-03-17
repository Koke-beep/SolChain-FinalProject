import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailComponent } from './Components/Detail/detail.component'
import { HomeComponent } from './Components/Main/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:coinId', component: DetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
