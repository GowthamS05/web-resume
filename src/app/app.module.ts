import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { SkillComponentComponent } from './skill-component/skill-component.component';
import { ExpComponentComponent } from './exp-component/exp-component.component';
import { AchievementComponentComponent } from './achievement-component/achievement-component.component';
import { EducationComponentComponent } from './education-component/education-component.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponentComponent,
    SkillComponentComponent,
    ExpComponentComponent,
    AchievementComponentComponent,
    EducationComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:AboutComponentComponent},
      {path:'about',component:AboutComponentComponent},
      {path:'skill',component:SkillComponentComponent},
      {path:'experience',component:ExpComponentComponent},
      {path:'achievement',component:AchievementComponentComponent},
      {path:'education',component:EducationComponentComponent}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
