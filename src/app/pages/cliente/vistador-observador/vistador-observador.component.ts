import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente, objVistadorObservador } from 'src/model/cliente';

@Component({
  selector: 'vistador-observador',
  templateUrl: './vistador-observador.component.html',
  styleUrls: ['./vistador-observador.component.css']
})
export class VistadorObservadorComponent implements OnInit {
  @Input()
  objs: objVistadorObservador;


  @Output()
  objetoAlterado: EventEmitter<objVistadorObservador> = new EventEmitter();

  editClient: Cliente
  form: FormGroup;
  cliente: Cliente;
  comEcpf = false
  isEdit = false
  insert = true
  update = false
  tipos = [
    {
      id: 1, Descricao: 'Vistador'
    },
    {
      id: 2, Descricao: 'Observador'
    }
  ] 
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.objs = this.objs || new objVistadorObservador
    console.log(this.objs)
    this.comEcpf = this.objs.ecpf
    this.isEdit = this.editClient ? true : false
    this.form = this.fb.group({
      nome: [this.isEdit ? this.editClient.nome : ''],
      email: [this.isEdit ? this.editClient.email : ''],
      cpf: [this.isEdit ? this.editClient.cpf : ''],
      tipo: [this.isEdit ? this.editClient.tipo : ''],
    });
  }

  inserirRegistro() {
    this.cliente = Object.assign({}, this.cliente, this.form.value);
    console.log("CLIENTE INSERIDO ", this.cliente)
    this.objs.clientes.push(this.cliente)
    this.objs.ecpf = this.comEcpf;
    this.form.reset()
    this.emitirEvento()
  }

  atualizarRegistro() {
    // update item in list and emit event
    const index = this.objs.clientes.indexOf(this.editClient)
    let cliente = Object.assign({}, this.objs, this.form.value);
    this.objs.clientes[index] = cliente;
    this.camposInserir()
    this.form.reset()
    this.emitirEvento()
  }

  editar(editarCliente: Cliente) {
    this.editClient = editarCliente
    this.camposEditar()
    this.form.patchValue(this.editClient)
  }
  excluir(cliente: Cliente) {
    const index = this.objs.clientes.indexOf(cliente)
    this.objs.clientes.splice(index, 1)
    this.emitirEvento()
  }


  private camposEditar() {
    this.isEdit = true
    this.insert = false
    this.update = true
  }
  private camposInserir() {
    this.isEdit = false
    this.insert = true
    this.update = false
  }
  // emit event registroAlterado
  emitirEvento() {
    this.objetoAlterado.emit(this.objs)
  }
}
