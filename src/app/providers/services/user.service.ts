import { HttpClient } from '@angular/common/http';
import { Injectable, computed, effect, inject, isDevMode, signal } from '@angular/core';
import { Observable } from 'rxjs';

import { USER_URL } from '../constants';
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  #storageSvc = inject(StorageService)
  // #destrSvc   = inject(DestructorService)
  #authSvc    = inject(AuthService)
  #http       = inject(HttpClient)

  #user_url   = isDevMode() ? USER_URL : "http://localhost:8002/api/v1/user/"

  #user       = signal<User>(this.#storageSvc.get('user') as User || new User)
  user        = computed(() => this.#user())
  user_update = effect(() => { this.#storageSvc.set('user', this.#user()) })

  // constructor() { this.#destrSvc.add(() => this.destructor()) }

  update_record(record: Record<string, number | string>) {
    this.#user.set({...this.#user(), project: {...this.#user().project, record }})
  }

  me() {
    this.get_api_user().subscribe(res => this.#user.set(res))
  }

  private get_api_user(): Observable<User> {
    let url = this.#user().id ? this.#user_url + this.#user().id + '/' : this.#user_url + 'me/' ;

    let max_retry = 10
    while (this.#authSvc.access_token == null && max_retry > 0) {
      setTimeout(() => {}, 100)
      max_retry--
    }

    if (this.#authSvc.access_token == null) {
      alert('No access token')

      window.history.back()
    }

    let headers = {
      Authorization: 'Bearer ' + this.#authSvc.access_token,
      ContentType: 'application/json'}

    return this.#http.get<User>(url, { headers })
  }

  // private destructor() {
  //   this.#user.set(new User)
  // }
}
