import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componenets/layouts/main/header/menu/menu.component';
import { CopyrightComponent } from './componenets/layouts/main/footer/copyright/copyright.component';
import { FormLoginComponent } from './componenets/user/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CopyrightComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
