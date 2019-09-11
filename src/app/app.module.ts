import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { YillyModule } from './yilly/yilly.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, YillyModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
