import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.sass']
})
export class TokenComponent implements OnInit {
  #route    = inject(ActivatedRoute)
  #router   = inject(Router)
  #userSvc  = inject(UserService)

  #token: string

  ngOnInit(): void {
    this.#token = this.#route.snapshot.queryParams['access_token']

    if (this.#token) {
      // should be from auth
      localStorage.setItem('access_token', this.#token)

      try {
        this.#userSvc.me()

        this.#router.navigate(['/admin'])
      } catch (e) {
        window.history.back()
      }
    } else {
      window.history.back()
    }
  }
}
