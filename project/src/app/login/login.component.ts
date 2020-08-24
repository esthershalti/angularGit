import { Component, OnInit } from '@angular/core';
import { User } from '../class/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  arr:User[]=[];
  returnValue:User;
 constructor(public ser:UserService,public router:Router){}
 num:number;
 u:User=new User();
 form;
 GettAllUsers()
 {
   this.ser.gettAll().subscribe(suc=>{this.arr=suc;},err=>{alert("errrrrror");console.log(err);});
 }
 UserFound()
 {
  this.ser.foundUser(this.u).subscribe(suc=>
    {this.returnValue=suc;
    if(this.returnValue==true)
    {
      alert(this.u.UserName+" משתמש/ת קיים/ת ");
      sessionStorage.setItem("userNow", this.u.UserName)
      this.router.navigate(['/all']);
    }
    if(this.returnValue==this.u.Password)
    {
      alert("סיסמא שגויה");
      this.router.navigate(['/login']);
      this.u.Password=null;
      this.u.UserName="";
    }
    if(this.returnValue==false)
    {
      alert("משתמש/ת לא קיים/ת");
      this.router.navigate(['/register']);//ניתוב להרשמה
    }
    }
    ,err=>{alert("errrrrror");console.log(err);});
   
 }
  ngOnInit() {
    
      this.form=new FormGroup({
        nameU: new FormControl("" ,Validators.required),
        nameP: new FormControl("",  Validators.required)
      });
  }

}

