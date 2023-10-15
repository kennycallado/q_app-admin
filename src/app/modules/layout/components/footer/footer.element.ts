import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('footer-element')
export class FooterElement extends LitElement {
  static styles = css`
    // :host {
    //   color: blue;
    // }

    span { color: blue; }

    p {
      margin: 0;
      text-align: center;
    }`;

  @property()
  brand?: string = 'Labpsitec';

  render() {
    return html`
      <footer>
        <p class="text-center">Made with 💙 by <span>${this.brand}<span></p>
      </footer>`;
  }
}
