import { EventEmitter, Injectable, Input, Output } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class AppService {
  constructor() {}

  @Input() page;
  @Input() pageCount;

  @Output()
  pageChanged = new EventEmitter<number>();

  prePage() {
    this.page--;
    this.pageChanged.emit(this.page);
  }

  nextPage() {
    this.page++;
    this.pageChanged.emit(this.page);
  }

  hasPre(): boolean {
    return this.page > 1;
  }

  hasNext(): boolean {
    return this.page < this.pageCount;
  }

  getList() {
    return ['one', 'two', 'banana'];
  }
}
