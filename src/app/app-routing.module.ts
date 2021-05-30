import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { authGuard } from './app-guard.service';
import { fifthResolver } from './fifth/fifth-resolver.service';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    canActivate: [authGuard]
  },
  {
    path: 'second',
    component: SecondComponent,
    canActivate: [authGuard]
  },
  {
    path: 'third',
    component: ThirdComponent,
    canActivate: [authGuard]
  },
  {
    path: 'fourth',
    component: FourthComponent,
    canActivate: [authGuard]
  },
  {
    path: 'fifth',
    component: FifthComponent,
    resolve: {
      people: fifthResolver
    }
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
