import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }


  sidebarMode = 'side';

  ngOnInit() {
  }

  /*public search(cityName: string): void {
    this.cityName = cityName;
  }*/
}
