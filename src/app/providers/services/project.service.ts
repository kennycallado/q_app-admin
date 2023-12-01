import { Injectable, Signal, computed, effect, inject, isDevMode, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { Project } from '../models/project.model';
import { StorageService } from './storage.service';
import { UserService } from './user.service';
import { PROJECT_URL } from '../constants';
import { PubRecord } from '../models/record.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  #http         = inject(HttpClient)
  #storageSvc   = inject(StorageService)
  #authSvc      = inject(AuthService)
  #userSvc      = inject(UserService)

  #project_url  = !isDevMode() ? PROJECT_URL : "http://localhost:8051/api/v1/project/"

  #project      = signal<Project>(this.#storageSvc.get('project') as Project || new Project)
  #projects     = signal<Project[]>([] as Project[])
  #p_records    = signal<PubRecord[]>(this.#storageSvc.get('project_records') as PubRecord[] || [new PubRecord])

  project       = computed(() => this.#project())
  projects      = computed(() => this.#projects())
  p_records     = computed(() => this.#p_records())

  project_update= effect(() => this.#storageSvc.set('project', this.#project()) )

  constructor() {
    this.get_api_all_projects().subscribe(res => this.#projects.set(res))
    this.get_api_project().subscribe(res => {
      if (!res) this.#projects.set([this.project()] as Project[])

      this.#project.set(res)
    })
  }

  set_project(project: Project) {
    this.put_api_project(project).subscribe(res => this.#project.set(res))
  }

  restore_project() {
    this.#project.set(this.#storageSvc.get('project') as Project)
  }

  get_records(): Signal<PubRecord[]> {
    this.get_api_records().subscribe(res => this.#p_records.set(res.records))
    return this.p_records
  }

  change_project(project: Project) {
    this.#project.set(project)
  }

  private get_api_all_projects(): Observable<Project[]> {
    let url = this.#project_url + '/'
    if (this.#authSvc.access_token == null) {
      alert('No access token')

      window.history.back()
    }

    let headers = {
      Authorization: 'Bearer ' + this.#authSvc.access_token,
      ContentType: 'application/json'}

    return this.#http.get<Project[]>(url, { headers })
  }

  private get_api_records(): Observable<Project> {
    let url = this.#project_url + this.project().id + '/record/'
    if (this.#authSvc.access_token == null) {
      alert('No access token')

      window.history.back()
    }

    let headers = {
      Authorization: 'Bearer ' + this.#authSvc.access_token,
      ContentType: 'application/json'}

    // ???
    return this.#http.get<Project>(url, { headers })
  }

  private get_api_project(): Observable<Project> {
    let url = this.#project_url + this.#userSvc.user().project.project_id + '/'
    if (this.#authSvc.access_token == null) {
      alert('No access token')

      window.history.back()
    }

    let headers = {
      Authorization: 'Bearer ' + this.#authSvc.access_token,
      ContentType: 'application/json'}

    return this.#http.get<Project>(url, { headers })
  }

  private put_api_project(project: Project): Observable<Project> {
    let url = this.#project_url + this.project().id
    if (this.#authSvc.access_token == null) {
      alert('No access token')

      window.history.back()
    }

    let headers = {
      Authorization: 'Bearer ' + this.#authSvc.access_token,
      ContentType: 'application/json'}

    return this.#http.put<Project>(url, project, { headers })
  }
}
