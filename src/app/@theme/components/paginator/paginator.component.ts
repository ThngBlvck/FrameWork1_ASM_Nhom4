import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {
  @Input() totalItems: number;
  @Input() pageSize: number;
  @Output() pageChange = new EventEmitter<number>();
  currentPage: number = 1;
  totalPages: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.totalItems || changes.pageSize) {
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    }
  }

  goFirstPage() {
    if (this.currentPage > 1) {
      this.currentPage = 1;
      this.pageChange.emit(this.currentPage);
    }
  }

  goPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  goNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  goLastPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.totalPages;
      this.pageChange.emit(this.currentPage);
    }
  }
}
