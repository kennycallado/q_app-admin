import { HttpClient } from '@angular/common/http';
import { Injectable, Injector, effect, inject, isDevMode, signal } from '@angular/core';

import jwtDecode, { JwtPayload } from 'jwt-decode';

import { User } from '../models/user.model';
import { AUTH_URL, BASE_URL } from '../constants';
import { UserService } from './user.service';


type AuthUser = {
  user: User;
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // #destrSvc   = inject(DestructorService)
  #injector   = inject(Injector)
  #http       = inject(HttpClient)

  #base_url   = !isDevMode() ? BASE_URL : "http://localhost:8000/"
  #auth_url   = !isDevMode() ? AUTH_URL : "http://localhost:8003/auth/"

  update = effect(() => { localStorage.setItem('access_token', this.#access_token()) })
  #access_token = signal<string>(localStorage.getItem('access_token') || '')
  get access_token(): string {
    const HOURS = 60 * 60 * 12;

    if (this.#access_token() !== '') {
      const payload = jwtDecode<JwtPayload>(this.#access_token())
      const now = new Date().getTime() / 1000;

      if (payload.exp - now < HOURS) {
        this.#http.get<AuthUser>(this.#auth_url, { withCredentials: true })
          .subscribe((auth) => {
            // maybe move this outside the subscription
            const userSvc = this.#injector.get(UserService)

            localStorage.setItem('access_token', auth.access_token)
            this.#access_token.set(auth.access_token)

            userSvc.me()
          });
      }
    }

    return this.#access_token();
  }

  logout(): void {
    // delete cookie
    this.#http.get(this.#auth_url + 'logout', { withCredentials: true }).subscribe();

    this.destructor()
    // this.#destrSvc.destructor()

    window.location.href = this.#base_url
  }

  private destructor() {
    this.#access_token.set('')
  }
}
