import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { recipe } from 'src/app/class/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  gettAllR()
  {
    return this.http.get<recipe[]>("http://localhost:54016//api/recipe/GettAllRecipe")
  }
gettrecipeDetails(r:string)
  {
    return this.http.get<recipe>("http://localhost:54016/api/recipe/gettRecipeDetails?name="+r);
  }
  addIngredients(r:string){
    return this.http.get<recipe>("http://localhost:54016/api/recipe/addIngredients?name="+r);
  }
  addRecipe(r:recipe)
  {
    return this.http.post("http://localhost:54016//api/recipe/onSubmit",r);
  }
  findcategory(name:recipe)
  {
    return this.http.post<recipe>("http://localhost:54016//api/category/FindCategory",name);
  }
  editR(r: recipe)
  {
    return this.http.post("http://localhost:54016//api/recipe/editR",r);
  }
  
  constructor(public http:HttpClient) { }
}

