import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css'],
})
export class Level1Component implements DoCheck {
  timesChecked = 0;
  private _timesGetted = 0;

  ngDoCheck(): void {
    this.timesChecked++;
  }

  get timesGetted(): number {
    return this._timesGetted++;
  }
}
