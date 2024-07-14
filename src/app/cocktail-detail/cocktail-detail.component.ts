import { Component, OnInit } from '@angular/core';
import { cockTail } from '../cocktail.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CocktailDataService } from '../cocktail-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss'
})
export class CocktailDetailComponent implements OnInit{

detail:cockTail;
id:string|null;
constructor(private route:ActivatedRoute,private cocktailDataService:CocktailDataService,private router:Router){
}
ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
  if(this.id){
    this.getDetails(this.id);
  }
}
goBack(): void{
  this.router.navigate(['/cocktails']);
}

getDetails(id:string){
  this.cocktailDataService.getDataDetail(id).subscribe((data:cockTail)=>{
    this.detail = data
  })
}

FavouriteToggle(item:cockTail){
  this.cocktailDataService.FavouriteToggle(item);
}

cockTailSelected(item:cockTail){
 return this.cocktailDataService.cockTailSelected(item)
}



}
