import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/User';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

u:User=new User();
returnValue:User;
form;
constructor(public ser:UserService,public router:Router){}
  AddUser()
  {
    this.ser.addUser(this.u).subscribe(suc=>
      {
        this.returnValue=suc;
        if(this.u!=null)
        {alert("הפרטים של "+this.returnValue+" נקלטו בהצלחה");
        sessionStorage.setItem("userNow", this.u.UserName)
        this.router.navigate(['/all']);}
      }
      ,err=>{alert("errrrrror");console.log(err);});
   
  }
  ngOnInit() {
    
      this.form=new FormGroup({
        nameU: new FormControl("", Validators.required),
        namePS: new FormControl("", Validators.required),
        nameP: new FormControl("",Validators.compose([
          Validators.required,
           Validators.maxLength(10)
        ])), 
        nameE:new FormControl("", Validators.compose(
        [Validators.required,
        Validators.email])),
        nameA: new FormControl("", Validators.required)
        
        // nameE: new FormControl('',[
        //   Validators.required,
        //   Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
      });
  }
}
