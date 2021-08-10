import { Component, OnInit } from '@angular/core';
import { ShareInfoService } from 'src/app/common/providers/share-info.service';

@Component({
  selector: 'app-countdown-option',
  templateUrl: './countdown-option.component.html',
  styleUrls: ['./countdown-option.component.scss']
})
export class CountdownOptionComponent implements OnInit {

  constructor( private  _shareInfoService : ShareInfoService) { }

  ngOnInit(): void {
  }

  onView(){
    this._shareInfoService.setModal({
      isShowModal: true,
      openModalFor : 1
    });
  }

  onCreate(){
    this._shareInfoService.setModal({
      isShowModal: true,
      openModalFor : 2
    });
  }

}
