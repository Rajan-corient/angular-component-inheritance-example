import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-derived',
  templateUrl: './derived.component.html',
  styleUrls: ['./derived.component.css'],
})
export class DerivedComponent extends AppService {
  preText = '<<';
  nextText = '>>';

  title = 'Random Title';

  // constructor(
  //   private appService: AppService
  // ) { }

  ngOnInit() {
    console.log('derived', this);
    const arr = this.getList();
    console.log(arr);
  }
}
