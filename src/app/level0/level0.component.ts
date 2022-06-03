import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-level0',
  templateUrl: './level0.component.html',
  styleUrls: ['./level0.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Level0Component {
  constructor() {
    // setInterval(() => {}, 1000);
  }
}
