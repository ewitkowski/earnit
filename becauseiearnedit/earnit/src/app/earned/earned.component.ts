import { Component, OnInit } from '@angular/core';
import { IGoals } from '../Goals';

@Component({
  selector: 'app-earned',
  templateUrl: './earned.component.html',
  styleUrls: ['./earned.component.css']
})
export class EarnedComponent implements OnInit {

  goals: IGoals[] = [];

  // NEXT Steps - put goal retrieval in a service, and try using indexeddb to store that data (for now)

  constructor() {
    this.goals = [{
      cost: 'a',
      description: 'b',
      goal: 'c'
    }];
  }

  ngOnInit() {
  }

}
