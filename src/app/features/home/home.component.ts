import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  oceanDayDate!: number;
  peaceDayDate!: number
  earthDayDate!: number;
  yogaDayDate!: number;
  wildlifeDayDate!: number;
  timer: any;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.setEventDates();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  setEventDates()  {
    const currentDate = new Date();
  
    // Ocean's Day
    let oceanDay = new Date(currentDate.getFullYear(), 5, 8); // June is 5 because months are zero-based
    if (currentDate > oceanDay) {
      oceanDay.setFullYear(oceanDay.getFullYear() + 1);
    }
    this.oceanDayDate = oceanDay.getTime();
  
    // Peace Day
    let peaceDay = new Date(currentDate.getFullYear(), 8, 21); // September is 8
    if (currentDate > peaceDay) {
      peaceDay.setFullYear(peaceDay.getFullYear() + 1);
    }
    this.peaceDayDate = peaceDay.getTime();
  
    // Earth Day
    let earthDay = new Date(currentDate.getFullYear(), 3, 22); // April is 3
    if (currentDate > earthDay) {
      earthDay.setFullYear(earthDay.getFullYear() + 1);
    }
    this.earthDayDate = earthDay.getTime();
  
    // Yoga Day
    let yogaDay = new Date(currentDate.getFullYear(), 5, 21); // June is 5
    if (currentDate > yogaDay) {
      yogaDay.setFullYear(yogaDay.getFullYear() + 1);
    }
    this.yogaDayDate = yogaDay.getTime();
  
    // Wildlife Day
    let wildlifeDay = new Date(currentDate.getFullYear(), 2, 3); // March is 2
    if (currentDate > wildlifeDay) {
      wildlifeDay.setFullYear(wildlifeDay.getFullYear() + 1);
    }
    this.wildlifeDayDate = wildlifeDay.getTime();
  }

  onCustom(): void {
    this.router.navigate(['option']);
  }
}