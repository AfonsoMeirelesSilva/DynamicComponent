import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchAll } from 'rxjs';
import { Cliente } from 'src/model/cliente';

@Component({
  selector: 'app-vistador-observador-crud',
  templateUrl: './vistador-observador-crud.component.html',
  styleUrls: ['./vistador-observador-crud.component.css']
})
export class VistadorObservadorCrudComponent implements OnInit {


  form: FormGroup;
  isEdit = false
  tipos = [
    {
      id: 1, Descricao: 'Vistador'
    },
    {
      id: 2, Descricao: 'Observador'
    }
  ]


  editCliente: Cliente
  constructor(
    public dialogRef: MatDialogRef<VistadorObservadorCrudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {
    if (data != null) {
      this.editCliente = data
      this.isEdit = true
      console.log("EDITAR ",this.editCliente)
    }

  }


  ngOnInit() {
    this.form = this.fb.group({
      nome: [this.isEdit ? this.editCliente.nome : '',Validators.required],
      email: [this.isEdit ? this.editCliente.email : '',[Validators.required, Validators.email]],
      cpf: [this.isEdit ? this.editCliente.cpf : '',Validators.required],
      tipo: [this.isEdit ? this.editCliente.tipo : '',Validators.required],
    });
  }

  inserirRegistro() {
    if(this.form.valid){
      console.log(this.form.value)
      this.dialogRef.close(this.form.value)
    }else{
      alert("Preencha os campos obrigatórios")
    }
  }
   
  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
}
