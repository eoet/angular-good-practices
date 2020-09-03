import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class UnSubscribeComponent implements OnDestroy {
  unSubscribeOnDestroy: Subject<boolean> = new Subject();

  constructor() {}

  ngOnDestroy(): void {
    this.unSubscribeOnDestroy.next(true);
    this.unSubscribeOnDestroy.complete();
  }
}
