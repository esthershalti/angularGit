import { Component, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { recipe } from 'src/app/class/recipe';
import { RecipeService } from 'src/app/recipe.service';
import { EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/class/Category';
import { fail } from 'assert';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  constructor(public ser: RecipeService, public ser1: CategoryService) { }
  u: string;

  myCat = new recipe();
  arr: recipe[] = [];
  arrC: string[] = [];
  ezer: recipe[] = [];
  flag: boolean = false;
  view: boolean = false;

  ngOnInit() {
    this.ser.gettAllR().subscribe(suc => this.arr = suc, err => { alert("ERROR!!!"); console.log(err) })
    this.myCat.CategoryRecipe = new Category();
    this.ser1.gettAllC().subscribe(suc => { this.arrC = suc; }, err => { alert("errrrrror"); console.log(err); });
    console.log(this.arrC)
    this.u = sessionStorage.getItem("userNow");
    if (this.u == null) {
      this.u = "no connect";
      this.flag = true;
    }
  }

  // getRecipe()
  // {var i;
  //   this.ezer=[]; 
  //   this.ser.getallrecipe().subscribe(suc=>{
  //     this.arr=suc;
  //   for(i=0;i<this.arr.length;i++)
  //   {
  //     if((this.arr[i].recipeName.indexOf(this.level)>-1|| this.level=="")&&
  //     (this.arr[i].categotyRecipe.name==this.cate||this.cate=="")&&
  //     (this.arr[i].makingTime<=this.time||this.time==0))
  //       this.ezer.push(this.arr[i]);
  //   }
  //   this.arr=this.ezer;
  //   if(this.arr.length<=0)
  //   {this.result="לא נמצאו תוצאות";}
  //   else
  //   {this.result="";}
  //   });

  // }‏‏
  filter() {
    var i;
    this.ezer = [];
    this.flag = false;
    this.ser.gettAllR().subscribe(suc => {
      this.arr = suc;
      for (let x of this.arr) {
        if ((x.NameRecipe.indexOf(this.myCat.NameRecipe) > -1 || this.myCat.NameRecipe == undefined) &&
          (x.CategoryRecipe.CategoryName == this.myCat.CategoryRecipe.CategoryName || this.myCat.CategoryRecipe.CategoryName == undefined) &&
          (x.Time <= this.myCat.Time || this.myCat.Time == undefined)) {
          this.ezer.push(x);
          this.flag = true;
        }
      }

      if (this.flag == false) {
        this.view = true;
      }
      this.arr = this.ezer;
      this.ezer = [];
      console.log(this.ezer);

    }, err => { alert("errrrrror"); console.log(err); });
  }
  clean() {
    this.view = false;
    this.myCat.NameRecipe =null;
    this.myCat.Time = null;
    this.myCat.CategoryRecipe =new Category();
    this.flag = false;
    this.ser.gettAllR().subscribe(suc => this.arr = suc, err => { alert("ERROR!!!"); console.log(err) })
    this.ser1.gettAllC().subscribe(suc => { this.arrC = suc; }, err => { alert("errrrrror"); console.log(err); });
  }
}

