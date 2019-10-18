import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  tik = 0;

  constructor() { }

  ngOnInit() {
    // const timer = interval(30);
    // timer.subscribe((value: number) => {
    //   this.tik = value;
    // })
  }

}
