import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Cliente, objVistadorObservador } from 'src/model/cliente';
import { VistadorObservadorCrudComponent } from '../vistador-observador-crud/vistador-observador-crud.component';

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

  cliente: Cliente;
  comEcpf = false
  isEdit = false
  insert = true
  update = false
  nomeso: any;

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.objs = this.objs || new objVistadorObservador
    console.log(this.objs)
    this.comEcpf = this.objs.ecpf
    this.isEdit = this.editClient ? true : false

  }

  inserirRegistro() {
    const dialogRef = this.dialog.open(VistadorObservadorCrudComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.objs.clientes.push(result)
        this.objs.ecpf = this.comEcpf;
        // this.emitirEvento()
      }
    })
  }

  // inserirRegistro() {
  // this.cliente = Object.assign({}, this.cliente, this.form.value);
  // console.log("CLIENTE INSERIDO ", this.cliente)
  // this.objs.clientes.push(this.cliente)
  // this.objs.ecpf = this.comEcpf;
  // this.form.reset()
  // this.emitirEvento()
  // }

  atualizarRegistro() {
    // update item in list and emit event
    // const index = this.objs.clientes.indexOf(this.editClient)
    // let cliente = Object.assign({}, this.objs, this.form.value, );
    // this.objs.clientes[index] = cliente;
    // this.camposInserir()
    // this.form.reset()
    // this.emitirEvento()
  }

  editar(editarCliente: Cliente) {
    const dialogRef = this.dialog.open(VistadorObservadorCrudComponent,{
      data: editarCliente
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.objs.clientes.indexOf(editarCliente)
        this.objs.clientes[index] = result
        // this.emitirEvento()
      }
    })

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
