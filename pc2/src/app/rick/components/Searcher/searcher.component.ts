import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'rick-searcher',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.css'
})
export class SearcherComponent {
  searchTerm: string = '';
  @Output() search = new EventEmitter<string>();

  searchName(): void {
    this.search.emit(this.searchTerm);
  }
}
