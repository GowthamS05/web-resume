import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievement-component',
  templateUrl: './achievement-component.component.html',
  styleUrls: ['./achievement-component.component.css']
})
export class AchievementComponentComponent implements OnInit {

  constructor() { }
  strengthObject = [
    {desc:'I keep motivating myself in every situation.',animation:'0.3s' },
    {desc:'Quick learner with good grasping ability.',animation:'0.5s' },
    {desc:'Good narrator.',animation:'0.7s' },
    {desc:'Confident and self-determined person.',animation:'0.9s' },
    {desc:'Ability to handle and cope up responsibility in different situation.',animation:'1.1s' },
    {desc:'Lead & work as a team in an organized way.',animation:'1.3s' }
  ]
  achievements=[
    {desc:'Created a Basic cart Application in Angular Js',animation:'0.3s'},
    {desc:'A data table using underscore js',animation:'0.5s'},
    {desc:'OCR Application for Android Mobile.',animation:'0.7s'}
  ]
  ngOnInit() {
  }

}
