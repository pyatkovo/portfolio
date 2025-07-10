import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

export interface Project {
  id: number;
  title: { rendered: string };
  acf: {
    project_link: string;
    project_title: string;
    project_description: string;
    project_stack: string;
    project_image: number;
    project_image_link?: string;
  };
  link: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(environment.api + 'project');
  }

  getImageUrl(imageId: number): Observable<string> {
    return this.http.get<any>(environment.api + 'media/' + imageId)
      .pipe(map(response => response.source_url)
      );
  }

}
