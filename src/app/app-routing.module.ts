import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { CanActivateGuard } from './can-activate-guard.service';
import { FifthResolver } from './fifth.resolver';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'second',
    component: SecondComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'third',
    component: ThirdComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'fourth',
    component: FourthComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'fifth',
    component: FifthComponent,
    canActivate: [CanActivateGuard],
    resolve: {people: FifthResolver}
  },
  {
    path: '**',
    redirectTo: '/first'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
