import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number;

  constructor(
    private dataService: DataService
  ){ }

  ngOnInit(): void {
    this.getPokemons();
  }

  // Get Pokemons
  getPokemons(){
    this.dataService.getPokemons(12, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach((result: any) => {
          this.dataService.getMoreData(result.name)
            .subscribe((uResponse: any) => {
              this.pokemons.push(uResponse);
              console.log(this.pokemons);
            });
        });
      });
  }

}
