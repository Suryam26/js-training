import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, CellComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  @Input() row: number = 0;
  @Input() col: number = 0;
  @Input() curr_x: number = 0;
  @Input() curr_y: number = 0;
}
