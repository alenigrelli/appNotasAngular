import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-view-nota',
  templateUrl: './view-nota.component.html',
  styleUrls: ['./view-nota.component.css']
})
export class ViewNotaComponent implements OnInit {

  visualizarNota: FormGroup;
  submitted = false;
  id: string | null;

  constructor(private formularioNota: FormBuilder,
              private _notaService: NotaService,
              private router : Router,
              private aRoute : ActivatedRoute) {
      this.visualizarNota = this.formularioNota.group({
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
  getNota(){
    this._notaService.getNota(this.id).subscribe(data=>{
      console.log(data['titulo']);
      this.visualizarNota.setValue({
        titulo: data['titulo'],
        Descripcion: data['descripcion']
      }

      )
    })
  }
}
