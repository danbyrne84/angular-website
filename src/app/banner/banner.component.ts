import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  public visible: Boolean = false;

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('afterViewInit');
      setTimeout(() => {
        console.log('setting visibility');
        this.visible = true; 
      },100);
  }

}
