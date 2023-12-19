import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Counter';
  counter: number = 0;
  isModalOpen: boolean = false;

  increase() {
    if (this.counter == 5) {
      this.isModalOpen = true;
      return;
    }
    this.counter = this.counter + 1;
  }

  decrease() {
    if (this.counter == -5) {
      this.isModalOpen = true;
      return;
    }
    this.counter = this.counter - 1;
  }

  resetCounter() {
    this.counter = 0;
    this.isModalOpen = false;
  }
}
