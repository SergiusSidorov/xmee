import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('@features/signing').then(m => m.SigninModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(
    ROUTES,
    {
      scrollPositionRestoration: 'top',
      initialNavigation: 'enabled',
      anchorScrolling: 'enabled',
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload',
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
