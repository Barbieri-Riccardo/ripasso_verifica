import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fouth-comp',
  templateUrl: './fouth-comp.component.html',
  styleUrls: ['./fouth-comp.component.css']
})
export class FouthCompComponent implements OnInit {
  name1:string;
  constructor() { 
    this.name1="quarto"
  }
  
  ngOnInit(): void {
  }

}
