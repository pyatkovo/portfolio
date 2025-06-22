import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./shared/layout/layout.component";
import {MainComponent} from "./views/main/main.component";
import {ProjectsComponent} from "./views/projects/projects.component";
import {AboutComponent} from "./views/about/about.component";
import {ContactsComponent} from "./views/contacts/contacts.component";
import { StackComponent } from './views/stack/stack.component';

const routes: Routes = [
  {path:'',
    component: LayoutComponent,
    children: [
      {path: '', component: MainComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'stack', component: StackComponent},
    ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
