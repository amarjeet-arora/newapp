import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeBookAppComponent } from "./recipe-book.component";
import { HeaderComponent } from "./header.component";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";

@NgModule({
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent,
    ShoppingListAddComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
