import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div class="backdrop" *ngIf="isLoading">
    <lottie-player class="loader"  src="../../../assets/v3.json" 
     background="transparent"  speed="2" loop  autoplay >
  </lottie-player> 
  <!-- <img class="loader" src="https://assets.blu365.com.br/uploads/sites/4/2019/01/consultora-jequiti-cadastro.jpg" /> -->
  </div>`,
  styleUrls: ['./loader.component.css']

})
export class LoaderComponent implements OnInit {

  @Input()
  isLoading = false
  constructor() { }

  ngOnInit() {
  }

}
