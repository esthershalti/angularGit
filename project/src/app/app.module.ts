import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { MinitPipe } from 'src/app/messageTime';
import { difficultyPipe } from 'src/app/difficultyPipe';

import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { TipsComponent } from './tips/tips.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllRecipesComponent,
    AddRecipeComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    
   
    MinitPipe,
    difficultyPipe,
    EditRecipeComponent,
    TipsComponent,
    LogoutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
