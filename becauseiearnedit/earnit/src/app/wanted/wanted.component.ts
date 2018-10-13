import { Component, OnInit } from '@angular/core';
import { IGoals } from '../Goals';
import { getLocaleNumberSymbol } from '@angular/common';

@Component({
  selector: 'app-wanted',
  templateUrl: './wanted.component.html',
  styleUrls: ['./wanted.component.css']
})
export class WantedComponent implements OnInit {

  testGoal: IGoals;

  constructor() {
    this.testGoal = {
      'cost': 'Jogging',
      'description': 'Doughy and delicious',
      'goal': 'A Donut'
    };
  }

  ngOnInit() {
  }

}
