import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { ToolsComponent } from './tools/tools.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cv', component: CvComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tools', component: ToolsComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];
