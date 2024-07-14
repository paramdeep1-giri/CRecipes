import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { cockTail } from '../cocktail.model';
import { CocktailDataService } from '../cocktail-data.service';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports:[CommonModule,RouterModule],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.scss'
})
export class CocktailsComponent implements OnInit{
  cocktails:cockTail[]=[];
  filteredCockTails:cockTail[]=[];
  favouriteCockTails:cockTail[]=[];
  searchItem:String;
  constructor(private router:Router,private cocktailDataService:CocktailDataService){

  }
  ngOnInit() {
   this.getCockTailData();
  }
  getCockTailData(){
    this.cocktailDataService.getData().subscribe((data:cockTail[])=>{
      this.cocktails = data;
      this.filteredCockTails = this.cocktails;
    })
  }
   getFilteredItems(event:Event){
    const target = event.target as HTMLInputElement;
    this.searchItem = target.value;
    if(!this.searchItem){
      this.filteredCockTails = this.cocktails;
    }else{
      this.filteredCockTails = this.cocktails.filter((item: cockTail) => {
        return item?.name.toLowerCase().includes(this.searchItem.toLowerCase())
      }
      )
    }

  }

  FavouriteToggle(item:cockTail){
    this.cocktailDataService.FavouriteToggle(item);
  }

  cockTailSelected(item:cockTail){
   return this.cocktailDataService.cockTailSelected(item)
  }

  concatArray(item:string[]){
    return item.join('|');
  }





}
