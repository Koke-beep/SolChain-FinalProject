import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './Components/Shared/Header/header.component'
import { AsideComponent } from './Components/Shared/aside/aside.component'
import { HomepageComponent } from './Components/Main/homepage/homepage.component'
import { NgParticlesModule } from 'ng-particles'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
