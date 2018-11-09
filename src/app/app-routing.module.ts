import { ItemPageComponent } from './components/item-page/item-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent,
    data: {title: 'Marketplace'}
  },
  {
    path: 'item/:id',
    component: ItemPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
