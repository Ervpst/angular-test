import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-vorm',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './vorm.component.html',
  styleUrl: './vorm.component.css'
})
export class VormComponent implements OnInit {
  form!: FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      active: new FormControl(''),
      
    });
  }
  onSubmit(): void {
    console.log(this.form.value);
  }
}
