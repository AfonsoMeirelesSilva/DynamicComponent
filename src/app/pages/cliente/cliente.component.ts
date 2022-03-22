import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente, FormalizacaoRequest, objVistadorObservador } from 'src/model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  objetoBackEnd: FormalizacaoRequest
  objAlterado: objVistadorObservador

  formalizacao: FormGroup;

  comCertisign = false
  semCertisign = false
  isLoading = false;
  constructor(fb: FormBuilder) {
    this.formalizacao = fb.group({
      f1: false,
      f2: false,
      f3: false,
      f4: false,
      f5: false,
      f6: false
    });
  }

  ngOnInit() {
    this.isLoading = true;  
    this.objetoBackEnd = new FormalizacaoRequest();
    this.formalizacao.valueChanges.subscribe(value => {
      this.comCertisign = value.f5
      this.semCertisign = value.f6
      if(!this.comCertisign && !this.semCertisign){
        console.log("ZERAR OBJETO")     
      }
    })

  }
  objetoAlterado(obj: objVistadorObservador) {
    this.objAlterado = obj
  }

  salvar() {
    this.objetoBackEnd.idCliente = 1;
    this.objetoBackEnd.formalizacao = this.formalizacao.value;
    this.objetoBackEnd.vistadorObservador = this.objAlterado
    console.log(this.objetoBackEnd)  
  }

}
