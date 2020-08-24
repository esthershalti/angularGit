import { Component, OnInit, Input } from '@angular/core';
import { recipe } from 'src/app/class/recipe';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private receipeService: UserService, public active: ActivatedRoute) { }
  @Input()
  myCurrentRecipe: recipe;
  name;
  link;
  ngOnInit() {
    if (sessionStorage.getItem('userNow'))
      this.link = "/recipeDetail/" + this.myCurrentRecipe.NameRecipe;
    else
      this.link = "/login";
  }
  check() {
    if (sessionStorage.getItem('userNow'))
      this.link = "/recipeDetail/" + this.myCurrentRecipe.NameRecipe;
    else {
      alert("אינך מחובר/ת");
      this.link = "/login";
    }
  }
}