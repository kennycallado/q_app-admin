import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// lit element
import { FooterElement } from './components/footer/footer.element';
import { ModalComponent } from './components/modal/modal.component'

@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [FooterElement],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
