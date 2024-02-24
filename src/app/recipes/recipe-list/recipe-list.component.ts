import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Burek',
      'Burek me mish',
      'https://i.ytimg.com/vi/JKvvXGcBKJ4/maxresdefault.jpg'
    ),
  ];
}
