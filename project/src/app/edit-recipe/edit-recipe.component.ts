import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { RecipeService } from 'src/app/recipe.service';
import { Category } from 'src/app/class/Category';
import { recipe } from 'src/app/class/recipe';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  constructor(public ser: CategoryService, public ser1: RecipeService, public router: Router, public active: ActivatedRoute) { }

  arrCat: string[] = [];
  myCat: recipe = new recipe();
  name;
  im: string;
  form;
  u: string;
  flag: boolean = false;
  ezerI = [];
  ezerP = [];
  ngChange(value) {
    this.myCat.Difficulty = value;
  }

  ngOnInit() {
    this.myCat.DateAdd = new Date(Date.now());
    this.form = new FormGroup({
      nameD: new FormControl("", Validators.pattern('[0-9]*')),
      nameT: new FormControl("", Validators.pattern('[0-9]*'))
    });
    this.active.params.subscribe(suc => {
      this.name = suc["name"];
      this.funcGetR(this.name);
      this.u = sessionStorage.getItem("userNow");
      if (this.u == null) {
        this.u = "לא מחובר";
        this.flag = false;
      }
      else {
        this.flag = true;
      }
    })
  }

  funcGetR(name: string) {
    console.log(name)
    this.ser1.gettrecipeDetails(name).subscribe(suc => {//שליפת מתכון לפי שם, וחילוץ קישור תמונה      
      console.log(suc)
      this.myCat = suc;//recipe!!
      this.im = this.myCat.Image;
      //this.myCat.Ingredients.push("");
     // this.myCat.Preparetion.push("");
      console.log(this.myCat.Preparetion)
    })
    this.ser.gettAllC().subscribe(suc => {//שליפת כל הקטגוריות
      this.arrCat = suc;
    },
      err => { alert("errrrrror"); console.log(err); });
  }

  gettRecipeDetails(name: string) {
    this.ser1.gettrecipeDetails(this.name).subscribe(suc => { this.myCat = suc; this.im = this.myCat.Image })
  }

  I() {
    this.ezerI = [];
    for (let i = 0; i < this.myCat.Ingredients.length; i++) {
      if (this.myCat.Ingredients[i] != "") { this.ezerI.push(this.myCat.Ingredients[i]) }
    }
    this.myCat.Ingredients = this.ezerI;
    this.myCat.Ingredients.push("");
  }
  P() {
    this.ezerP = [];
    for (let i = 0; i < this.myCat.Preparetion.length; i++) {
      if (this.myCat.Preparetion[i] != "") { this.ezerP.push(this.myCat.Preparetion[i]) }
    }
    this.myCat.Preparetion = this.ezerP;
    this.myCat.Preparetion.push("");
  }

  addRowIngridience(i) {
    if (this.myCat.Ingredients[i + 1] == undefined) { this.myCat.Ingredients.push(""); }
    this.I();
  }

  addRowMaking(i) {
    console.log(this.myCat);
    if (this.myCat.Preparetion[i + 1] == undefined) { this.myCat.Preparetion.push(""); }
    this.P();
  }

  FindCategory() {
    this.ser.findcategory(this.myCat.CategoryRecipe).subscribe(suc => this.myCat.CategoryRecipe = suc, err => alert(err));
  }

  onSubmit() {
    this.myCat.Ingredients.pop();
    this.myCat.Preparetion.pop();
    if (this.im != this.myCat.Image) { this.myCat.Image = this.myCat.Image.slice(12); }
    {
      console.log(this.myCat);
      this.ser1.editR(this.myCat).subscribe(suc => alert(suc), err => alert(err));
      this.router.navigate(['/all']);
    }
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
