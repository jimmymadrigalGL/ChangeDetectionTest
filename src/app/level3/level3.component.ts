import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css'],
})
export class Level3Component implements DoCheck {
  timesChecked = 0;
  private _timesGetted = 0;

  ngDoCheck(): void {
    this.timesChecked++;
  }

  get timesGetted(): number {
    return this._timesGetted++;
  }

  click() {}
}
