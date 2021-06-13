import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-list-notas',
  templateUrl: './list-notas.component.html',
  styleUrls: ['./list-notas.component.css']
})
export class ListNotasComponent implements OnInit {
  filtro : string | null;
  notas: any[] = [];
  constructor(private _notaService: NotaService,
              private aRoute : ActivatedRoute) {
    this.filtro = this.aRoute.snapshot.paramMap.get('filtro');
   }

  ngOnInit(): void {
    if (this.filtro == null){ 
      this.getNotas();
    }else{
      this.getNotasFiltro();
    }
  }
  getNotas(){
    this._notaService.getNotas().subscribe(data => {
      this.notas = [];
      data.forEach((element: any)=>{
        this.notas.push({
          id: element.key,
          ...element.payload.val()
        });
      })
    });
  }
  eliminaNota(id: string){
    this._notaService.eliminarNota(id).catch(error => {
      console.log(error);
    });
  }
  getNotasFiltro(){
    this._notaService.getNotas().subscribe(data => {
      this.notas = [];
      data.forEach((element: any)=>{
        var nombre = element.payload.val()['titulo']; 
        if(nombre == this.filtro){
          this.notas.push({
            id: element.key,
            ...element.payload.val()
            })
          };
      })
    })
  }
}
