import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareInfoService } from 'src/app/common/providers/share-info.service';

@Component({
  selector: 'app-custom-countdown',
  templateUrl: './custom-countdown.component.html',
  styleUrls: ['./custom-countdown.component.scss']
})
export class CustomCountdownComponent implements OnInit ,OnDestroy {

  public _modalObserver: Subscription = new Subscription;
  public _inputDate: any;
  public _inputTime:any
  public _inputName :any;
  public _inputMessage : any;
  public _idKey : any;
  private timeGap :any;
  sec : number = 1000
  min : number = this.sec * 60
  hour : number = this.min * 60
  day : number = this.hour * 24
  public remainingSeconds : number = 0
  public remainingMinutes : number = 0
  public remainingHours : number = 0
  public remainingDays : number = 0
  public showMessage :string = 'Counting...';

  constructor( private  _shareInfoService : ShareInfoService,) { 

  }
  ngOnInit(): void {
    this._modalObserver = this._shareInfoService.createFormValue.subscribe( (data) =>{
      this._inputDate =data.inputDate
      this._inputTime = data.inputTime
      this._inputMessage = data.inputMessage
      this._inputName = data.inputName
      this._idKey = data.idKey
    });
    console.log('customData',this._modalObserver)
  }

  private timer = setInterval(() =>{
    // inputDate and inputTime values are coming from the common modal component
    let time_date = this._inputDate+" "+this._inputTime;
    let endClock = new Date(time_date).getTime()
    let now : any  = new Date().getTime()

    //calculate the difference between time
    this.timeGap = endClock - now
    this.remainingDays = Math.floor(this.timeGap / (this.day));
    this.remainingHours = Math.floor((this.timeGap % (this.day)) / (this.hour));
    this.remainingMinutes = Math.floor((this.timeGap % (this.hour)) / (this.min));
    this.remainingSeconds = Math.floor((this.timeGap % (this.min) / this.sec));

    //To stop the timer when reached end time  
    if (this.timeGap < 0) {
      console.log('in Else')
      clearInterval(this.timer);
      this.remainingDays = 0
      this.remainingHours = 0
      this.remainingMinutes = 0
      this.remainingSeconds = 0
      this.showMessage = this._inputMessage;
    }
  },1000)

  ngOnDestroy(){
    clearInterval(this.timer);
    this._modalObserver.unsubscribe();
  }

}
