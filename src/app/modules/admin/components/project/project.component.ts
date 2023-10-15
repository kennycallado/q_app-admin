import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent {
  keys: string[] = ["step", "mood"];

  removeKey(key: string) {
    this.keys = this.keys.filter(k => k !== key);
  }

  addKey(input: HTMLInputElement) {
    this.keys.push(input.value);
    input.value = '';
  }

  save() {
    console.log(this.keys);
  }
}
