import { Component, OnInit } from '@angular/core';
import { ShareInfoService } from 'src/app/common/providers/share-info.service';

@Component({
  selector: 'app-view-countdown',
  templateUrl: './view-countdown.component.html',
  styleUrls: ['./view-countdown.component.scss']
})
export class ViewCountdownComponent implements OnInit {

  inKey :any;
  keydata :any;
  sec : number = 1000
  min : number = this.sec * 60
  hour : number = this.min * 60
  day : number = this.hour * 24
  public remainingSeconds : number = 0
  public remainingMinutes : number = 0
  public remainingHours : number = 0
  public remainingDays : number = 0
  public showMessage : string = 'Still Counting...'

  _date :any;
  _time:any;
  _message :any;

  constructor(private _shareInfoService: ShareInfoService) { }

  ngOnInit(): void {
    this.inKey = this._shareInfoService.sharedViewCountdownKey;
    console.log('ViewKey-step2',this.inKey);
    this._shareInfoService.read_Countdown_By_Id(this.inKey).subscribe(value => {
      this.keydata = value.data();
      this._date = this.keydata.date
      this._time = this.keydata.time
      this._message = this.keydata.message
    });
  }
  private timer = setInterval(() =>{
    // inputDate and inputTime values are coming from the common modal component
    let time_date = this._date+" "+this._time;
    let endClock = new Date(time_date).getTime()
    let now : any  = new Date().getTime()

    //calculate the difference between time
    let timeGap = endClock - now
    this.remainingDays = Math.floor(timeGap / (this.day));
    this.remainingHours = Math.floor((timeGap % (this.day)) / (this.hour));
    this.remainingMinutes = Math.floor((timeGap % (this.hour)) / (this.min));
    this.remainingSeconds = Math.floor((timeGap % (this.min) / this.sec));

    //To stop the timer when reached end time  
    if (timeGap < 0) {
      console.log('in Else')
      clearInterval(this.timer);
      this.remainingDays = 0
      this.remainingHours = 0
      this.remainingMinutes = 0
      this.remainingSeconds = 0
      this.showMessage = this._message;
    }
  },1000)


  te(){
    console.log('love',this.keydata);
    console.log('hate',this._date);
    console.log('crime',this._time);
  }

  ngOnDestroy(){
    clearInterval(this.timer);
    // this._modalObserver.unsubscribe();
  }

}
