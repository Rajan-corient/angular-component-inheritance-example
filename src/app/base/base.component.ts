import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  preText = 'pre';
  nextText = 'next';

  @Input()
  pageCount: number;

  @Input()
  page: number;

  @Output()
  pageChanged = new EventEmitter<number>();

  constructor(
    private utils: UtilsService,
  ) { }

  ngOnInit() {
    console.log('base', this)
  }

  prePage() {
    this.page--;
    this.pageChanged.emit(this.page);
    this.utils.alert('pre');
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

}