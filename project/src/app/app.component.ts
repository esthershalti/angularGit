import { Component, Input, SimpleChanges, OnInit, OnChanges } from '@angular/core';
import {  Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {zzz
  title = 'מתכונים';
  isValid=true;
  stop: boolean = true;
  exsist: string;
  constructor(private route:Router) { }
  ngOnInit() {
    if (sessionStorage.getItem("userNow"))
      this.exsist = 'משתמש' + sessionStorage.getItem("userNow");
    else this.stop = false;
  }
  // onLogOut(){
  //   sessionStorage.removeItem("userNow");
  //   this.route.navigate(['/login']);
  // }
}





