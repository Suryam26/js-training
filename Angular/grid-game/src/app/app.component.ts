import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'grid-game';

  row: number = 5;
  col: number = 5;
  curr_x: number = 1;
  curr_y: number = 2;

  @HostListener('window:keydown', ['$event'])
  onKeyPressed(event: KeyboardEvent): void {
    if (event.key === 'ArrowUp') {
      this.move(-1, 0);
    } else if (event.key === 'ArrowDown') {
      this.move(1, 0);
    } else if (event.key === 'ArrowRight') {
      this.move(0, 1);
    } else if (event.key === 'ArrowLeft') {
      this.move(0, -1);
    }
  }

  move(x: number, y: number) {
    if (
      this.curr_x + x < 0 ||
      this.curr_x + x >= 5 ||
      this.curr_y + y < 0 ||
      this.curr_y + y >= 5
    ) {
      alert("Can't move there!");
      return;
    }

    this.curr_x = this.curr_x + x;
    this.curr_y = this.curr_y + y;
  }
}
