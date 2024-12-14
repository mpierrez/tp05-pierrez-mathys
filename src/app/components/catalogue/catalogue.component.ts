import { Component, OnInit } from '@angular/core';
import { AddCake } from '../../shared/actions/cake.action';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { Cake } from '../../shared/models/cake';
import { CakeState } from '../../shared/states/cake.state';
import { CommonModule } from '@angular/common';
import { NumberFormatPipe } from '../../shared/pipes/number-format.pipe';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css',
  imports: [CommonModule, NumberFormatPipe]
})

export class CatalogueComponent implements OnInit {
  availableCakes$: Observable<Cake[]>;
  cakesInCart$: Observable<Cake[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.availableCakes$ = this.store.select(CakeState.getAvailableCakes);
    this.cakesInCart$ = this.store.select(CakeState.getCakesInCart);
  }

  addToCart(cake: Cake, event: Event) {
    const button = event.target as HTMLElement;
    if(button.textContent === 'Ajouté !') return;

    this.store.dispatch(new AddCake(cake));

    button.textContent = 'Ajouté !';
    button.style.backgroundColor = 'green';
    button.blur();
    setTimeout(() => {
      button.style.backgroundColor = '';
      button.style.borderColor = '';
      button.textContent = 'Ajouter au panier';
    }, 1000);

  }
}
