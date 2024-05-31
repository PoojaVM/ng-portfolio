import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { aboutMeComponent } from './about-me/aboutMe.component';
import { projectComponent } from './projects/projects.component';
import { skillsCompnent } from './skills/skills.component';
import { workExperienceComponent } from './work-experience/workExperience.component';
import { contactMeComponent } from './contact-me/contactMe.component';
import { CommonModule } from '@angular/common';
import { HEADERS } from './app.const';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    skillsCompnent,
    aboutMeComponent,
    projectComponent,
    contactMeComponent,
    workExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public headers = HEADERS;

  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.fragment.subscribe(frag => {
      if (frag) {
        const element = document.querySelector(`#${frag}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    });
  }

  scrollToSection(id:string) {
    this._router.navigate([], { fragment: id })
  }
}
