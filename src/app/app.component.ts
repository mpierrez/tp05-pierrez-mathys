import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { CakeState } from './shared/states/cake.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'tp05_pierrez_mathys';
  nb$: Observable<number>;

  constructor(private store : Store) {}

  ngOnInit() {
    this.nb$ = this.store.select(CakeState.getNbCakesInCart);
  }
}
