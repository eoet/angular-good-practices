import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomPreloadStrategy } from './core/custom-preload-strategy';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
      data: {
        preload: true
      }
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'account-settings',
    loadChildren: () =>
      import('./modules/account-settings/account-settings.module').then(
        (m) => m.AccountSettingsModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
    data: {
      showHeader: false,
      showSidebar: false,
    },
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./modules/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
    data: {
      showHeader: false,
      showSidebar: false,
    },
  },
];

// Using CustomPreloadStrategy to preload the frequent modules.
// Default: false
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadStrategy,
      useHash: true
    }),
  ],
  providers: [CustomPreloadStrategy],
  exports: [RouterModule],
})
export class AppRoutingModule {}
