import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  flag1: boolean = false;
  flag2: boolean = false;
  flag3: boolean = false;
  flag4: boolean = false;
  flag5: boolean = false;
  flag6: boolean = false;
  flag7: boolean = false;
  flag8: boolean = false;
  flag9: boolean = false;
  constructor() { }

  ngOnInit() {

  }
  showTips1() {
    this.flag1 = !this.flag1;
  }
  showTips2() {
    this.flag2 = !this.flag2;
  } showTips3() {
    this.flag3 = !this.flag3;
  } showTips4() {
    this.flag4 = !this.flag4;
  } showTips5() {
    this.flag5 = !this.flag5;
  } showTips6() {
    this.flag6 = !this.flag6;
  } showTips7() {
    this.flag7 = !this.flag7;
  } showTips8() {
    this.flag8 = !this.flag8;

  } showTips9() {
    this.flag9 = !this.flag9;
  }

}
