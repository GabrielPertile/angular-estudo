import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandPageComponent } from './brand/pages/brand-page/brand-page.component';

const routes: Routes = [
  {
    path: 'brands', component: BrandPageComponent
  },
  {
    path: 'models', component: BrandPageComponent
  },
  {
    path: 'vehicles', component: BrandPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
