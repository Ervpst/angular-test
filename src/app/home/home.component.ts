import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  tere1 = 'Tere tulemast!';
  tere2 = 332;
  tere3 = true;
  tere4 = false;
  constructor() { }

  ngOnInit(): void {
  }

}
