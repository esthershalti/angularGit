import { Component, OnInit, Input } from '@angular/core';
import { recipe } from 'src/app/class/recipe';
import { UserService } from 'src/app/user.service';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(public ser: RecipeService, public active: ActivatedRoute) { }
  @Input()
  name;
  userNow: string;
  flag: boolean = false;
  r: recipe;
  u:string;
  ngOnInit() {
    this.active.params.subscribe(suc => {
      this.name = suc["name"];
      this.funcGetR(this.name);
      this.u=sessionStorage.getItem("userNow");
      if(this.u==null)
      {
        this.u="no connect";
      }
    })
  }

  funcGetR(name: string) {
    this.ser.gettrecipeDetails(this.name).subscribe(suc => {
      this.r = suc
      this.checkEdit();
    })
  }
  checkEdit() {
    this.userNow = sessionStorage.getItem("userNow");
    console.log(this.r.UserName)
    if (this.userNow == this.r.UserName) {
      {this.flag = true;}
    }
  }
}

