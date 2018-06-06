import { ExtraOptions, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes = [
  { path: 'administrator', loadChildren: 'app/administrator/administrator.module#AdministratorModule' },

  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
];

const config: ExtraOptions = {
  useHash: false,
  onSameUrlNavigation: 'reload',
  //preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
