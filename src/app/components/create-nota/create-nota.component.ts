import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-create-nota',
  templateUrl: './create-nota.component.html',
  styleUrls: ['./create-nota.component.css']
})
export class CreateNotaComponent implements OnInit {

  createNota: FormGroup;
  submitted = false;
  id: string | null;

  constructor(private formularioNota: FormBuilder,
              private _notaService: NotaService,
              private router : Router,
              private aRoute : ActivatedRoute) {
      this.createNota = this.formularioNota.group({
        titulo: ['', Validators.required],
        Descripcion: ['', Validators.required]
      });
      this.id = this.aRoute.snapshot.paramMap.get('id');
   }
   

  ngOnInit(): void {
    if (this.id != null){
      this.getNota()
    }
  }

  crearNota() {
    const nota: any = {
      titulo: this.createNota.value.titulo,
      descripcion: this.createNota.value.Descripcion

    }
    if (this.id == null) {
      this._notaService.agregarNota(nota);
      this.router.navigate(['list-notas']).catch(error => {
        console.log(error);
      });
    } else {
      this._notaService.actualizarNota(this.id, nota)
      this.router.navigate(['list-notas']).catch(error => {
        console.log(error);
      });
    }
  }
  
  getNota(){
    this._notaService.getNota(this.id).subscribe(data=>{
    this.createNota.setValue({
          titulo: data['titulo'],
          Descripcion: data['descripcion']
        })
      });
    }
  }
