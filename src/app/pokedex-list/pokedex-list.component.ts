import { Component, OnInit } from '@angular/core';
import {Pokedex} from '../modules/pokedex';
import {PokedexServiceService as PokedexService} from '../services/pokedex-service.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})

export class PokedexListComponent implements OnInit {
  pokedex?: Pokedex;
  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedexService.getPoxedex().subscribe(res => {
        this.pokedex = res;
    });
  }

getPokemonImage(entry: any) {
    let entryNumber = entry.toString().padStart(3, '0');
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${entryNumber}.png`;
}

}
