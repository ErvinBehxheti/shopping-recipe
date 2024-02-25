import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe(
      'Burek',
      'Burek me mish',
      'https://i.ytimg.com/vi/JKvvXGcBKJ4/maxresdefault.jpg'
    ),
    new Recipe(
      'Burek1',
      'Burek me mish1',
      'https://i.ytimg.com/vi/JKvvXGcBKJ4/maxresdefault.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
