import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './Components/Shared/Header/header.component';
import { AsideComponent } from './Components/Shared/aside/aside.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
