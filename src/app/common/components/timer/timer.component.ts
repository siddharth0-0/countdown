import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() targetDate!: number;

  private countdownInterval: any;
  countdown!: { days: number, hours: number, minutes: number, seconds: number };

  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.countdownInterval);
  }

  startCountdown(): void {
    this.calculateCountdown();
    this.countdownInterval = setInterval(() => {
      this.calculateCountdown();
    }, 1000);
  }

  calculateCountdown(): void {
    const currentDate = new Date().getTime();
    const difference = this.targetDate - currentDate;
    this.countdown = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }
}
