import { Component, OnInit } from '@angular/core';
import { recipe } from 'src/app/class/recipe';
import { RecipeService } from 'src/app/recipe.service';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from 'src/app/class/Category';
import { CategoryService } from 'src/app/category.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from 'src/app/class/User';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']

})
export class AddRecipeComponent implements OnInit {
  arr: recipe[] = [];
  arrCat: string[] = [];
  myCat: recipe = new recipe();
  returnValue: recipe;
  u: string;
  form;
  flag: boolean = false;
  ok: boolean = false;
  stop:boolean=false;
  ezerI = [];
  ezerP = [];
  constructor(public ser: CategoryService, public ser1: RecipeService, public router: Router) { }


  ngOnInit() {
    this.myCat.DateAdd = new Date(Date.now());
    this.form = new FormGroup({
      nameR: new FormControl("",Validators.compose([Validators.required,Validators.pattern('[a-zA-Zא-ת ]*')])),
      nameT: new FormControl("", Validators.pattern('[0-9]*')),
      nameD: new FormControl("", Validators.pattern('[0-9]*')),
    });
    this.myCat.Ingredients=[""];
    this.myCat.Preparetion=[""];
    this.ser1.gettAllR().subscribe(suc=>{this.arr=suc;},err=>{alert("errrrrror");console.log(err);});    
    this.myCat.CategoryRecipe = new Category(1, "חלבי")
    console.log(this.arrCat)
    this.u = sessionStorage.getItem("userNow");
    if (this.u == null) {
      this.u = "לא מחובר";
      this.flag = false;
    }
    else {
      this.flag = true;
    }

    this.ser.gettAllC().subscribe(suc => { this.arrCat = suc; }, err => { alert("errrrrror"); console.log(err); });
  }
  OnSubmit(frm) {
    console.log(frm);
  }
  onSubmit() {
    this.ok = false;
    this.stop = false;
    for (let i of this.arr) {
      if (this.myCat.NameRecipe == i.NameRecipe) {
        alert("מתכון זה נמצא במאגר.  החלף שם מתכון!");
        this.ok = true;
      }
    }
    if (this.ok == false) {
      if (this.myCat.Image == undefined) {
        this.myCat.Image = "defallt.PNG";
      }

      this.myCat.Image = this.myCat.Image.slice(12);
      this.myCat.UserName = this.u;
      this.ser1.addRecipe(this.myCat).subscribe(suc => {this.returnValue=suc;
        console.log(this.myCat);

        alert("👍 המתכון " + this.returnValue + " נוסף בהצלחה ");
        this.router.navigate(['/all']);

      }
        , err => { alert("errrrrror"); console.log(err); });
    }
  }
  ngChange(value) {
    this.myCat.Difficulty = value;

  }
  FindCategory() {
    this.ser.findcategory(this.myCat.CategoryRecipe).subscribe(suc => this.myCat.CategoryRecipe = suc, err => alert(err));

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
    if (this.myCat.Ingredients[i+1] == undefined)
     {this.myCat.Ingredients.push("");} 
     this.I();
  }
  addRowMaking(i) {
    if (this.myCat.Preparetion[i+1] == undefined)
      {this.myCat.Preparetion.push("");}
      this.P();
  }
  trackByFn(index: any, item: any) {
    return index;
  }
}

