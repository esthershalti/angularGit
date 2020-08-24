import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/User';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router) { }
  flag:boolean;
  u:User
  ngOnInit() {
    sessionStorage.removeItem("userNow");
    this.route.navigate(['/login']);
  }

}
