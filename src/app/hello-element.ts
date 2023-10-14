import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('hello-element')
export class HelloElement extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }`;

  @property()
  name?: string = 'World';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
