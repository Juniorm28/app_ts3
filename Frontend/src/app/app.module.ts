import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componenets/layouts/main/header/menu/menu.component';
import { CopyrightComponent } from './componenets/layouts/main/footer/copyright/copyright.component';
import { FormLoginComponent } from './componenets/user/form-login/form-login.component';
import { TituloComponent } from './componenets/layouts/main/content/titulo/titulo.component';
import { ClientListComponent } from './componenets/client/client-list/client-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CopyrightComponent,
    FormLoginComponent,
    TituloComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
