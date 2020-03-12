import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TemplateFormComponent } from "./template-form/template-form.component";
import { DrivenComponent } from "./driven/driven.component";
import { DrivenService } from "./driven/driven.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "template",
    component: TemplateFormComponent
  },
  {
    path: "driven",
    canActivateChild: [AuthGuard],
    component: DrivenComponent
  },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/not-found", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
