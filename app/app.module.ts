import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DrivenComponent } from "./driven/driven.component";
import { DrivenService } from "./driven/driven.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { TemplateFormModule } from "./template-form/template-form.module";

import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrivenComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TemplateFormModule
  ],
  providers: [DrivenService, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// appRoutes will hold all the routes our application has

// once the path is loaded we have to tell angular which component should be loaded i.e. which page should be loaded

//  RouterModule.forRoot(appRoutes) is used for registering our routes in angular router

// router outlet will provide place in the dom to render our components related to the selected path

// users/:id :tells angular that it is dynamic part of the path with out colon it will simply take it as static path

// ** is used for all the wrong paths entered by the  user and it will redirect to page not found component

// and it should placed at the end of all the routes because routes are parsed in order in angular
