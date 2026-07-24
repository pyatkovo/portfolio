import { Component, OnInit } from '@angular/core';
import {Project, ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getFeaturedProjects().subscribe(data => {
      this.projects = data;
    });
  }

}
