import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/Http";

import { MessageModule } from "./messages/message.module";

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";

import { routing } from "./app.routing";


@NgModule({
    declarations: [
    AppComponent,
    AuthenticationComponent,
    HeaderComponent,
    LogoutComponent,
    SignupComponent,
    SigninComponent,
    ErrorComponent
    ],
    imports: [
    BrowserModule, 
    routing, 
    ReactiveFormsModule,
    HttpModule,
    MessageModule
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})

export class AppModule {

}