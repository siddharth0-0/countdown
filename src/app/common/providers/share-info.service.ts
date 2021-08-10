import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from 'angular/fire/database';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareInfoService {

  public sharedViewCountdownKey :any;

  constructor(private firestore: AngularFirestore) { }

  public createFormValue = new BehaviorSubject<{
    inputTime : any;
    inputDate : any;
    inputName : string;
    inputMessage : string;
    idKey : any;
  }>({inputTime : '',inputDate : '',inputName : '',inputMessage :'', idKey : ''})

  public showModal = new BehaviorSubject<{
    isShowModal: boolean;
    openModalFor: number;
  }>({isShowModal: false , openModalFor: 0});

  read_Countdown() {
    return this.firestore.collection('countdown').snapshotChanges();
  }

  read_Countdown_By_Id(countKey:any){
    console.log('fromView',countKey);
    return this.firestore.collection('countdown').doc(countKey).get();
  }

  create_Countdown(countKey : any,record:any) {
    console.log('inCreateRecordService',record);
    console.log('inCreateRecordService-step3',countKey);
    return this.firestore.collection('countdown').doc(countKey).set(record);
  }

  public setModal(value : {isShowModal: boolean; openModalFor: number;} ) {
    this.showModal.next(value);
    console.log('data',value)
  }

  public setCountdown(value : {inputTime : any;  inputDate : any;inputName : string; inputMessage : string; idKey : any;}){
    this.createFormValue.next(value);
    console.log('formValue',value)
  }
}
