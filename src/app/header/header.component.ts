import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  pokemons: any[] = [];
  term: any;
  grandPokemon: any;
  nb = 0;
  abi: any;

  constructor(
    private dataService: DataService
  ){ }

  ngOnInit(): void {
    this.getPokemons();
  }

  // Get Pokemons
  getPokemons(){
    this.dataService.getPokemons(100).subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this.dataService.getMoreData(result.name).subscribe((uResponse: any) => {
            this.pokemons.push(uResponse);
            if (this.nb == 0){
              this.changeGrandPoke(uResponse);
              this.nb++;
            }
        });
      });
    });
  }

  changeGrandPoke(poke: any){
    this.grandPokemon = poke;
  }

}


