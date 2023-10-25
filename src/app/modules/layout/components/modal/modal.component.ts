import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {
  #userSvc = inject(UserService)

  content: string = ''

  @ViewChild('blah') set modal(modal: ElementRef) {
    if (modal) {
      modal.nativeElement.addEventListener('show.bs.modal', (event: any) => {
        // Button that triggered the modal
        const button = event.relatedTarget
        const recipient = button.getAttribute('data-bs-whatever')

        if (recipient === 'user') {
          this.content = this.getUser()
        }

        const modalTitle: any = modal.nativeElement.querySelector('.modal-title')
        modalTitle.textContent = `New message to ${recipient}`
      })
    }
  }

  getUser(): string {
    this.#userSvc.me()

    // console.log(this.#userSvc.user())
    return JSON.stringify(this.#userSvc.user())
  }
}
