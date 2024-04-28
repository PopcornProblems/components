import { Component } from '@angular/core';

@Component({
  selector: 'app-take-it-to-eleven',
  templateUrl: 'take-it-to-eleven.component.html',
  styleUrls: ['take-it-to-eleven.component.css']
})
export class TakeItToElevenComponent {
  formatLabel(value: number): string {
    if (value >= 11) {
      return '11';
    }
    return value.toString();
  }
}