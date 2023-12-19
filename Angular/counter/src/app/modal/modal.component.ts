import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() isModalOpen: boolean = false;
  @Input() counter: any;
  @Output() resetCounter = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  resetAndClose() {
    this.resetCounter.emit();
  }
}
