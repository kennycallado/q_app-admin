import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.sass']
})
export class TokenComponent implements OnInit {
  #route = inject(ActivatedRoute)
  #router = inject(Router)

  #token: string

  ngOnInit(): void {
    this.#token = this.#route.snapshot.queryParams['access_token']

    if (this.#token) {
      localStorage.setItem('access_token', this.#token);

      this.#router.navigate(['/admin']);
    }

    window.history.back();
  }
}
