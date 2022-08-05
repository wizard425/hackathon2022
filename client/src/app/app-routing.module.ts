import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';

const routes: Routes = [
  { path: '', redirectTo: 'tests', pathMatch: 'full' },
  { path: 'tests', component: ViewTestsComponent },
  { path: 'tests/:id', component: ViewDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
