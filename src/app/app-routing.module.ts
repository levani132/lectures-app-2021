import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { AppGuardService } from './app-guard.service';
import { FifthResolverService } from './fifth-resolver.service';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    canActivate: [AppGuardService]
  },
  {
    path: 'second',
    component: SecondComponent,
    canActivate: [AppGuardService]
  },
  {
    path: 'third',
    component: ThirdComponent,
    canActivate: [AppGuardService]
  },
  {
    path: 'fourth',
    component: FourthComponent,
    canActivate: [AppGuardService]
  },
  {
    path: 'fifth',
    component: FifthComponent,
    canActivate: [AppGuardService],
    resolve: {
      people: FifthResolverService
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
