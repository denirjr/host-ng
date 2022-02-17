import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slides = [
    { src: "./assets/images/img1.jpg" },
    { src: "./assets/images/img2.jpg" },
    { src: "./assets/images/img1.jpg" },
    { src: "./assets/images/img2.jpg" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
