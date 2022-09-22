import { JobFinderComponent } from './job-finder/job-finder.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'job-finder',
    component:JobFinderComponent
  },
  { path: '',   redirectTo: '/job-finder', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
