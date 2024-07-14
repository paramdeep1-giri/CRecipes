import { Routes } from '@angular/router';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';

export const routes: Routes = [ 
    {path:'',redirectTo:'/cocktails', pathMatch:'full'},
    {path:'cocktails',component:CocktailsComponent},
    {path:'details/:id',component:CocktailDetailComponent},
    {path:'**',component:CocktailsComponent},
];
