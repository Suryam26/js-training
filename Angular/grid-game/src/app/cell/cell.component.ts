import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css',
})
export class CellComponent implements OnChanges {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() curr_x: number = 0;
  @Input() curr_y: number = 0;

  isCurrent: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['curr_x'] || changes['curr_y']) {
      if (this.curr_x == this.x && this.curr_y == this.y) {
        this.isCurrent = true;
      } else {
        this.isCurrent = false;
      }
    }
  }
}
