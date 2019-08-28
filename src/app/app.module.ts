import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRouterModule } from "./router/app-router/app-router.module";

import { AppComponent } from "./app.component";
import { NavigationbarComponent } from "./navigation/navigationbar.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, NavigationbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,

    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
