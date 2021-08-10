import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gap :any
  sec : number = 1000
  min : number = this.sec * 60
  hour : number = this.min * 60
  day : number = this.hour * 24

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  oceanDayDate = new Date('June 8, 2022 00:00:00').getTime()
  peaceDayDate = new Date('September 21, 2021 00:00:00').getTime()
  earthDayDate = new Date('April 22, 2022 00:00:00').getTime()
  yogaDayDate = new Date('June 21, 2022 00:00:00').getTime()
  wildlifeDayDate = new Date('March 3, 2022 00:00:00').getTime()

  oceanDay(){
    var currentDate = new Date().getTime()
    this.gap = this.oceanDayDate - currentDate
    console.log(this.gap,'gap')

    let d  = Math.floor(this.gap / (this.day))
    let h = Math.floor((this.gap % (this.day)) / (this.hour))
    let m = Math.floor((this.gap % (this.hour)) / (this.min))
    let s = Math.floor((this.gap % (this.min) / this.sec))

    document.getElementById('oday')!.innerHTML  = String(d) ;
    document.getElementById('ohour')!.innerHTML = String(h);
    document.getElementById('ominute')!.innerHTML = String(m);
    document.getElementById('osec')!.innerHTML = String(s);
  }

  peaceDay(){
    var currentDate = new Date().getTime()
    this.gap = this.peaceDayDate - currentDate

    let d  = Math.floor(this.gap / (this.day))
    let h = Math.floor((this.gap % (this.day)) / (this.hour))
    let m = Math.floor((this.gap % (this.hour)) / (this.min))
    let s = Math.floor((this.gap % (this.min) / this.sec))

    document.getElementById('pDay')!.innerHTML  = String(d) ;
    document.getElementById('pHour')!.innerHTML = String(h);
    document.getElementById('pMinute')!.innerHTML = String(m);
    document.getElementById('pSec')!.innerHTML = String(s);
  }

  earthDay(){
    var currentDate = new Date().getTime()
    this.gap = this.earthDayDate - currentDate

    let d  = Math.floor(this.gap / (this.day))
    let h = Math.floor((this.gap % (this.day)) / (this.hour))
    let m = Math.floor((this.gap % (this.hour)) / (this.min))
    let s = Math.floor((this.gap % (this.min) / this.sec))

    document.getElementById('eDay')!.innerHTML  = String(d) ;
    document.getElementById('eHour')!.innerHTML = String(h);
    document.getElementById('eMinute')!.innerHTML = String(m);
    document.getElementById('eSec')!.innerHTML = String(s);
  }

  yogaDay(){
    var currentDate = new Date().getTime()
    this.gap = this.yogaDayDate - currentDate

    let d  = Math.floor(this.gap / (this.day))
    let h = Math.floor((this.gap % (this.day)) / (this.hour))
    let m = Math.floor((this.gap % (this.hour)) / (this.min))
    let s = Math.floor((this.gap % (this.min) / this.sec))

    document.getElementById('yDay')!.innerHTML  = String(d) ;
    document.getElementById('yHour')!.innerHTML = String(h);
    document.getElementById('yMinute')!.innerHTML = String(m);
    document.getElementById('ySec')!.innerHTML = String(s);
  }

  wildlifeDay(){
    var currentDate = new Date().getTime()
    this.gap = this.wildlifeDayDate - currentDate

    let d  = Math.floor(this.gap / (this.day))
    let h = Math.floor((this.gap % (this.day)) / (this.hour))
    let m = Math.floor((this.gap % (this.hour)) / (this.min))
    let s = Math.floor((this.gap % (this.min) / this.sec))

    document.getElementById('wDay')!.innerHTML  = String(d) ;
    document.getElementById('wHour')!.innerHTML = String(h);
    document.getElementById('wMinute')!.innerHTML = String(m);
    document.getElementById('wSec')!.innerHTML = String(s);
  }

  timer = setInterval(() => {
    this.oceanDay()
    this.peaceDay()
    this.earthDay()
    this.wildlifeDay()
    this.yogaDay()
  }, 1000);

  onCustom(){
    this.router.navigate(['option']);
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }
}


// this.sec = 1000
// this.min = this.sec * 60
// this.hour = this.min * 60
// this.day = this.hour * 24