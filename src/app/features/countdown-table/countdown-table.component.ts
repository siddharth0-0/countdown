import { Component, OnInit } from '@angular/core';
import { ShareInfoService } from 'src/app/common/providers/share-info.service';

@Component({
  selector: 'app-countdown-table',
  templateUrl: './countdown-table.component.html',
  styleUrls: ['./countdown-table.component.scss']
})
export class CountdownTableComponent implements OnInit {

  customers: any;
  countData: any;
  name: string = '';

  constructor(private customerService: ShareInfoService) { }

  ngOnInit(): void {
    this.customerService.read_Countdown().subscribe(data => {
      this.countData = data

      this.countData = data.map(e => {
        return {
          key: e.payload.doc.id,
          value: e.payload.doc.data(),
        };
      })
      console.log(this.countData);
    });
  }
}
