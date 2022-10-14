import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../projects.component';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit, OnDestroy {
  project: Project | undefined;
  private subscription: Subscription;

constructor(private projectsService: ProjectsService){
}
ngOnInit(): void {
  this.project = this.projectsService.getProjects()
  this.subscription = this.projectsService.projectsChanged.subscribe(
    (project: Project) => {
      this.project = project;
    }
  )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
