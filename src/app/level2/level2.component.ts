import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css'],
})
export class Level2Component implements DoCheck {
  timesChecked = 0;
  private _timesGetted = 0;

  ngDoCheck(): void {
    this.timesChecked++;
  }

  get timesGetted(): number {
    return this._timesGetted++;
  }
}
