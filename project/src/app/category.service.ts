import { Injectable } from '@angular/core';
import { Category } from 'src/app/class/Category';
import { HttpClient } from '@angular/common/http';
import { recipe } from 'src/app/class/recipe';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  gettAllC()
  {  
    return this.http.get<string[]>("http://localhost:54016/api//category/GettAllCategory")
  }
  findcategory(name:Category)
  {
    return this.http.post<Category>("http://localhost:54016//api/category/FindCategory",name);
  }
  constructor(public http:HttpClient) { }
}
