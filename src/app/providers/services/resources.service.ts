import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resource } from '../models/resource.model';
import { Observable } from 'rxjs';

type Response<G> = {
  status: string
  time: string
  result: G
}

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  #http   = inject(HttpClient)
  #r_url  = "https://surreal.kennycallado.dev"
  #resources = signal<Resource[]>([] as Resource[])
  resources = computed(() => this.#resources())
  resource_update = effect(() => {})

  constructor() {
    this.get_from_api().subscribe(res => {
      if (res.length > 1) { throw new Error("More than one response from API") }
      if (res[0].status !== "OK") { throw new Error("Failed to get resources from API") }
      if (!res[0].result) { throw new Error("No resources from API") }

      this.#resources.set(res[0].result)
    })
  }

  private get_from_api(): Observable<Response<Resource[]>[]> {
    let url = this.#r_url + "/key/resources"
    let headers = {
      Accept: "application/json",
      NS: "test",
      DB: "resources",
      Authorization: "Basic " + btoa("viewer:viewer")
    }
    return this.#http.get<Response<Resource[]>[]>(url, { headers })
  }
}
