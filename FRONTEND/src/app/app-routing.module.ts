import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListComponent } from './Components/list/list.component'
import { HomeComponent } from './Components/Main/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: ListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
