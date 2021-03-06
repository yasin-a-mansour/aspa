import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RouteConstants} from './utils/route-constants';
import {AppGuard} from './core/guards/app-guard';
import {LoginComponent, AuthComponent} from './shared';

const appRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [AppGuard],
    children: [
      {
        path: RouteConstants.LOGIN,
        component: LoginComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
