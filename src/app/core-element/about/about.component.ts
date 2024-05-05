import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
   // el.scrollIntoView();
   el.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  } 
}
