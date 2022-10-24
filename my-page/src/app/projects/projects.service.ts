import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Project } from './projects.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectsChanged = new Subject<Project>()
  page: number;
  allProjects: Project[] = [
    {
      imageUrl: '../../assets/youtube.png',
      name: 'Youtube search',
      skills: 'HTML, SCSS, Typescript, Angular',
      codeLink: '',
      liveLink: 'https://gs-youtube-app.netlify.app/'
    },
    {
      imageUrl: '../../assets/natours.png',
      name: 'Natours',
      skills: 'HTML and SCSS',
      codeLink: 'https://github.com/amberseas/natours',
      liveLink: 'https://amberseas-natours.netlify.app'
    },
    {
      imageUrl: '../../assets/english-game.png',
      name: 'Card game',
      skills: 'HTML, SCSS, Javascript',
      codeLink: 'https://github.com/amberseas/card-game',
      liveLink: 'https://amberseas-game.netlify.app'
    },
    {
      imageUrl: '../../assets/three-column-card.jpg',
      name: 'Responsive card',
      skills: 'HTML and CSS',
      codeLink: 'https://github.com/amberseas/Frontend_Mentor_Challenges',
      liveLink: 'https://amberseas-cars.netlify.app'
    },
    {
      imageUrl: '../../assets/webdev.png',
      name: 'A simple site',
      skills: 'HTML and CSS',
      codeLink: '',
      liveLink: 'https://amberseas-web.netlify.app'
    },
    {
      imageUrl: '../../assets/keyboard.png',
      name: 'Virtual keyboard',
      skills: 'CSS, Javascript',
      codeLink: 'https://github.com/amberseas/keyboard',
      liveLink: 'https://amberseas-web.netlify.app'
    },
    {
      imageUrl: '../../assets/calculator.png',
      name: 'Calculator',
      skills: 'HTML, CSS, Javascript',
      codeLink: '',
      liveLink: 'https://amberseas-calculator.netlify.app'
    },
  ]

  getProjects(id = 0) {
    return this.allProjects[id]
  }

  updateProjects(id:number){
      return this.projectsChanged.next(this.allProjects[id])
  }
}
