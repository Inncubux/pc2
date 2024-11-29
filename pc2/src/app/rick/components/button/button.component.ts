import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rick-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() action!: 'next' | 'prev';
  @Output() buttonClick = new EventEmitter<'next' | 'prev'>();

  onClickButton(): void {
    this.buttonClick.emit(this.action);
  }
}
