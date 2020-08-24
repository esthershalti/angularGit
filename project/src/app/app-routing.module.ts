import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { AllRecipesComponent } from 'src/app/all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from 'src/app/recipe-details/recipe-details.component';
import {AddRecipeComponent  } from 'src/app/add-recipe/add-recipe.component';
import { EditRecipeComponent } from 'src/app/edit-recipe/edit-recipe.component';
import { TipsComponent } from 'src/app/tips/tips.component';
import { LogoutComponent } from 'src/app/logout/logout.component';


const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"all",component:AllRecipesComponent},
  {path:"",component:LoginComponent },
  {path:"add-recipe",component:AddRecipeComponent },
  {path:"recipeDetail/:name",component:RecipeDetailsComponent },
   {path:"edit-recipe/:name",component:EditRecipeComponent },
   {path:"tips",component:TipsComponent },
   {path:"logout",component:LogoutComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
