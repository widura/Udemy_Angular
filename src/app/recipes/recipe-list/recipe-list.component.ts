import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [new Recipe('Rice','Rice description','https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/White%2C_Brown%2C_Red_%26_Wild_rice.jpg/1280px-White%2C_Brown%2C_Red_%26_Wild_rice.jpg'),
  new Recipe('Cake','Cake description','https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/16730-beckys-butter-cake-600x600.jpg?ext=.jpg')];

  constructor() { }

  ngOnInit() {
  }

}
