import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTestsComponent } from './view-tests/view-tests.component';

const routes: Routes = [
  { path: '', redirectTo: 'tests', pathMatch: 'full' },
  { path: 'tests', component: ViewTestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
