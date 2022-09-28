import { MatchingAlgoComponent } from './matching-algo/matching-algo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'matching-algo',
    component:MatchingAlgoComponent
  },
  { path: '',   redirectTo: '/matching-algo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
