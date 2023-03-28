import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  //Get Pokemons
  getPokemons(limit: number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  }

  // Get more pokemon data
  getMoreData(name: String){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
