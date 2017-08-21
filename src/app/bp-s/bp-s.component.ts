// import { Bp } from 'bps/bps';
import { Component, OnInit } from '@angular/core';
import { Bp } from './bp.model';
 
@Component({
  selector: 'app-bp-s',
  templateUrl: './bp-s.component.html',
  styleUrls: ['./bp-s.component.css']
})
export class BpSComponent implements OnInit {
  bps: Bp[] = [
    new Bp('John', 'Deep', 'MrX')
  ];

  constructor() { }

  ngOnInit() {
  }

}
