import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.css']
})
export class RepresentantesComponent implements OnInit {

  isLoading = false
  constructor() { }

  ngOnInit() {
  }

  paraporra() {
    this.isLoading = !this.isLoading
  }
}

