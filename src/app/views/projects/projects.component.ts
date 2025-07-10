import { Component, OnInit } from '@angular/core';
import {Project, ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(data => {
      this.projects = data;

      this.projects.forEach(project => {
        this.projectsService.getImageUrl(project.acf.project_image).subscribe(url => {
          project.acf.project_image_link = url;
        });
      });
    });
  }
}
