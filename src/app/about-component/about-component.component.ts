import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {
aboutObject={
  age:25,
  yearsOfExperiance:4.5,
  address:'Thiruvanmiyur,Chennai',
  email:'raogowtham@gmail.com',
  phoneNumber:'+91-9790903202',
  blogs:'easyaptitudes.blogspot.com,resultsandjobupdates.blogspot.com',
  educationDetails:['B.E Computer Science and Engineering (2014) in Jaya Engineering College GPA'
  ,'10+2 with Maths , Computer Science (2010) in Velammal matriculation higher secondary school.']
}
  constructor() { }

  ngOnInit() {
  }

}
