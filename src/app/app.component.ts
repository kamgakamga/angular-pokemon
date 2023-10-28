import { Component, OnInit } from '@angular/core';
import Pokemon from './pokemon';
import POKEMONS from './mocks-pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  // template: `
  
  //   <h1>{{title}}</h1>
  //   <p>{{pokemonList[0]}}</p>
    
  // `

})
export class AppComponent implements OnInit {
     
/****************************** Déclaration des attributs *****************/
        title:string = 'Liste de pokémons';
        pokemonList: Pokemon[] = POKEMONS;
        pokemonSelected: Pokemon|undefined;


/****************************** Déclaration des Fonctions *****************/
      
ngOnInit():void{
  console.table(this.pokemonList);
  // this.selectPokemon(this.pokemonList[0]);
 }

 selectPokemon(pokemonId:string):void{
  const id = +pokemonId;
  this.pokemonSelected = this.pokemonList.find(pokemon => pokemon.id == id );
  
  if (this.pokemonSelected) {
    console.log(`Vous avez cliqué sur le pokemon: ${this.pokemonSelected.name}`);
  }else{
    console.log(`Aucun pokemon trouvé !`);
  } 
 }

 goToPokemon():void{
  
 }
//  selectPokemon(pokemon:Pokemon):void{
//   console.log(`Vous avez cliqué sur le pokemon: ${pokemon.name}`);
//  }
}
