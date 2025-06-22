import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {MainComponent} from "./views/main/main.component";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {LayoutComponent} from "./shared/layout/layout.component";
import { ProjectsComponent } from './views/projects/projects.component';
import { AboutComponent } from './views/about/about.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { StackComponent } from './views/stack/stack.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    MainComponent,
    ProjectsComponent,
    AboutComponent,
    ContactsComponent,
    StackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
