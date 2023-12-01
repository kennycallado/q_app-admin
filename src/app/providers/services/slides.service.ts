import { HttpClient } from '@angular/common/http';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Slide } from '../models/slide.model';
import { Observable } from 'rxjs/internal/Observable';

type Response<G> = {
  status: string
  time: string
  result: G
}

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  #http   = inject(HttpClient)
  #r_url  = "https://surreal.kennycallado.dev"
  #slides = signal<Slide[]>([] as Slide[])
  slides = computed(() => this.#slides())
  resource_update = effect(() => {})

  constructor() {
    this.get_from_api().subscribe(res => {
      if (res.length > 1) { throw new Error("More than one response from API") }
      if (res[0].status !== "OK") { throw new Error("Failed to get resources from API") }
      if (!res[0].result) { throw new Error("No resources from API") }

      this.#slides.set(res[0].result)
    })
  }

  private get_from_api(): Observable<Response<Slide[]>[]> {
    let url = this.#r_url + "/key/slides"
    let headers = {
      Accept: "application/json",
      NS: "test",
      DB: "resources",
      Authorization: "Basic " + btoa("viewer:viewer")
    }
    return this.#http.get<Response<Slide[]>[]>(url, { headers })
  }
}
