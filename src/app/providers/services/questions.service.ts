import { HttpClient } from '@angular/common/http';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Question } from '../models/question.model';

type Response<G> = {
  status: string
  time: string
  result: G
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  #http   = inject(HttpClient)
  #r_url  = "https://surreal.kennycallado.dev"
  #questions = signal<Question[]>([] as Question[])
  questions = computed(() => this.#questions())
  questions_update = effect(() => {})

  constructor() {
    this.get_from_api().subscribe(res => {
      if (res.length > 1) { throw new Error("More than one response from API") }
      if (res[0].status !== "OK") { throw new Error("Failed to get resources from API") }
      if (!res[0].result) { throw new Error("No resources from API") }

      this.#questions.set(res[0].result)
    })
  }

  private get_from_api(): Observable<Response<Question[]>[]> {
    let url = this.#r_url + "/key/questions"
    let headers = {
      Accept: "application/json",
      NS: "test",
      DB: "resources",
      Authorization: "Basic " + btoa("viewer:viewer")
    }
    return this.#http.get<Response<Question[]>[]>(url, { headers })
  }
}
