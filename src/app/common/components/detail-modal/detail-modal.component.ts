import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShareInfoService } from '../../providers/share-info.service';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit {

  modalForm : FormGroup;

  isShowModal :boolean = false;
  public _modalObserver: Subscription = new Subscription;
  public _openFor  : number = 0;

  _name : any;
  _date : any;
  _time : any;
  _message : any;
  _idKey : any;

  viewKey : any;
  
  constructor(private fb: FormBuilder, private  _shareInfoService : ShareInfoService, private _router : Router) {
    this.modalForm = this.fb.group({
      in_name: [null,Validators.required],
      in_date: [null,Validators.required],
      in_time :[null,Validators.required],
      in_message : [null,Validators.required]
    });
  } 

  ngOnInit(): void {
    this._modalObserver = this._shareInfoService.showModal.subscribe( (data) =>{
    this.isShowModal = data.isShowModal;
    if(data.openModalFor == 1){
      this._openFor = data.openModalFor
    }
    else if(data.openModalFor == 2){
      this._openFor = data.openModalFor
    }
    });
  }

  
  // generates a random six(6) digit key
  getKey(length : number) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result; 
  }

  // Sends Records to share-info.service.ts collected from formGroup
  CreateRecord() {
    console.log('inCreateRecord');
    let record = {
      name : this._name,
      date: this._date,
      time : this._time,
      message : this._message,
    };
    let countKey = this._idKey
    return this._shareInfoService.create_Countdown(countKey,record);
  }

  // Sends data to share-info.service and closes the modal on click
  onStart(){
    this._name = this.modalForm.value.in_name;
    this._message = this.modalForm.value.in_message;
    this._date = this.modalForm.value.in_date;
    this._time =this.modalForm.value.in_time;
    this._idKey = this.getKey(6);
    this._shareInfoService.setCountdown({
      inputTime : this._time,
      inputDate : this._date,
      inputMessage : this._message,
      inputName : this._name,
      idKey : this._idKey,
    });
    this.CreateRecord() //Sends record to the firestore db
    this.isShowModal = false;
    this._router.navigate(['custom']);
  }

  onView(){
    console.log('viewKey-step1',this.viewKey);
    this._shareInfoService.sharedViewCountdownKey = this.viewKey;
    this.isShowModal = false;
    this._router.navigate(['view']);
  }

  onCloseModal(){
    this.isShowModal = false;
  }

  ngOnDestroy(){
    this._modalObserver.unsubscribe();
  }

}
