import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokedexServiceService {

  constructor(private http: HttpClient) { }

pokedexApi = "https://pokeapi.co/api/v2/pokedex/1";

getPoxedex() {
    return this.http.get<any>(this.pokedexApi);
}
}
