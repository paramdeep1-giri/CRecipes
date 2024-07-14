import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cockTail } from './cocktail.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailDataService {
   private cocktails:cockTail[]=[];
   private favoriteCocktails:cockTail[]=[];
   private detail:cockTail;
  constructor( private http:HttpClient) { }

  getCockTails(){
    return this.http.get<cockTail[]>('/cockails');
  }

  getcockTailDetails(id:string){
    const params = {'id':id};
    return this.http.get<cockTail>(`cockails/${id}`,{params});
  }
  getData():Observable<cockTail[]>{
    return this.getCockTails().pipe(tap((data)=>{
      this.cocktails = data;
    }))
  }

  getDataDetail(id:string):Observable<cockTail>{
    return this.getcockTailDetails(id).pipe(tap((data)=>{
      this.detail = data;
    }))
    
  }
  FavouriteToggle(item:cockTail){
    const index = this.favoriteCocktails.findIndex((selected:cockTail) =>{
      return selected.id === item.id
    });
    if(index === -1){
      this.favoriteCocktails.push(item);
    }else{
      this.favoriteCocktails.splice(index,1);
    }
    sessionStorage.setItem('favouriteCockTails',JSON.stringify(this.favoriteCocktails))
  }
  cockTailSelected(item:cockTail){
    const favkey = sessionStorage.getItem('favouriteCockTails');
    if(favkey){
      this.favoriteCocktails = JSON.parse(favkey);
    }
    return this.favoriteCocktails.some((element:cockTail) => item.id === element.id)
  }
}
