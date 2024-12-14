import { Routes } from '@angular/router';
import { CatalogueComponent } from './app/components/catalogue/catalogue.component';
import { PanierComponent } from './app/components/panier/panier.component';

export const routes: Routes = [
  {path: '', redirectTo: 'catalogue', pathMatch: 'full'},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'panier', component: PanierComponent}
];
