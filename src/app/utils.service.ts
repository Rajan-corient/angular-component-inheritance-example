import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  alert(msg: string) {
    window.alert(msg);
  }

}