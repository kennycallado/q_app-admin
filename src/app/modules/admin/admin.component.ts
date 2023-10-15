import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
  #router = inject(Router)

  ngAfterViewInit() {
    this.#router.navigate(['/admin/dashboard'])
  }
}
