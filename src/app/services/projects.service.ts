import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  icons: string[];
  featured: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('assets/data/projects.json');
  }

  getFeaturedProjects(limit = 3): Observable<Project[]> {
    return this.getProjects().pipe(
      map(projects => projects.filter(project => project.featured).slice(0, limit))
    );
  }
}
