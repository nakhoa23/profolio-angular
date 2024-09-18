import { Component } from '@angular/core';
import { appProjects, orthers, webProjects } from '../../data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  webProjects = webProjects;
  appProjects = appProjects;
  othersProject = orthers;
}
