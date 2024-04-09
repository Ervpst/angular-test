import { Component } from '@angular/core';

@Component({
  selector: 'app-leht',
  standalone: true,
  imports: [],
  templateUrl: './leht.component.html',
  styleUrl: './leht.component.css'
})
export class LehtComponent {
  colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'black', 'white', 'pink', 'brown'];
 
  showHello: boolean = true;
  showGoodbye: boolean = false;
  test(): void {
    this.showHello = !this.showHello;
    this.showGoodbye = !this.showGoodbye;
    console.log('showHello:', this.showHello);
    console.log('showGoodbye:', this.showGoodbye);
  }
}
