import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  constructor( @Inject(DOCUMENT) private document: any) { }
  
  activeTab(value) {
    let anchorDetails = document.querySelectorAll('.shift>ul>li>a');
    for (let i = 0; i < anchorDetails.length; i++) {
      document.querySelectorAll('.shift>ul>li>a')[i].classList.remove("animated", "bounce");
    }
    if (document.querySelector(value).classList.length > 1) {
      document.querySelector(value + '> a').classList.add("animated", "bounce");
    }
    document.getElementById("centerContainer").scrollTop=0;
    }
  goToUrl() {
    this.document.location.href = 'https://stackoverflow.com';

  }

}
