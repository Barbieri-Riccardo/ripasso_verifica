import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css']
})
export class ThirdCompComponent implements OnInit {
  name:string;
  constructor() { 
    this.name="terzo"
  }

  ngOnInit(): void {
  }

}
