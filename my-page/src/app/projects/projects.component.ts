import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectsService } from './projects.service';

export interface Project {
  imageUrl: string;
  name: string;
  skills: string;
  codeLink: string;
  liveLink: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  project: Project;
  page: number = 1;
  private subscription: Subscription;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.project = this.projectsService.getProjects();
    this.subscription = this.projectsService.projectsChanged.subscribe(
      (project: Project) => {
        this.project = project;
      }
      )
    }

    onShowPrev(){
      if(this.page > 0) {
        this.page--;
      } else {
        this.page = 6;
      }

      this.projectsService.updateProjects(this.page);
    }

    onShowNext(){
      if(this.page < 6) {
        this.page++;
    } else {
      this.page = 0;
    }

    this.projectsService.updateProjects(this.page);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
