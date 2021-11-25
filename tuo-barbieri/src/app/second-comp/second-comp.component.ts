import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {
  name2:string;
  constructor() { 
    this.name2="secondo"
  }

  ngOnInit(): void {
  }

}
