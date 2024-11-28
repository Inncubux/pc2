import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { RickService } from '../../service/rick.service';

@Component({
  selector: 'rick-pagination',
  imports: [HttpClientJsonpModule],
  providers: [RickService],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() prevPage!: string | null;
  @Input() nextPage!: string | null;
  @Output() pageChange = new EventEmitter<number>();
  next(){
    const nextPage = this.nextPage ? + this.nextPage.split('=')[1]: 1;
    this.pageChange.emit(nextPage);
  }

  previous(){
    const prevPage = this.prevPage ? + this.prevPage.split('=')[1]: 1;
    this.pageChange.emit(prevPage);
  }
}
