import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'users',
    loadChildren: './modules/users/users.module#UsersModule',
  },
  {
    path: 'account-settings',
    loadChildren: './modules/account-settings/account-settings.module#AccountSettingsModule',
  },
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule',
    data: {
      showHeader: false,
      showSidebar: false
    }
  },
  {
    path: 'registration',
    loadChildren: './modules/registration/registration.module#RegistrationModule',
    data: {
      showHeader: false,
      showSidebar: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
