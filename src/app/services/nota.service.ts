import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
    
  constructor(private db: AngularFireDatabase) {}

    agregarNota(nota: any) {
      const notas = this.db.list('nota');
      notas.push(nota);
      //return this.angularFireDatabase. firestore.collection('nota').add(nota);
    }
    
    getNotas(): Observable<any> {
      return this.db.list('nota').snapshotChanges();
      //return this.firestore.collection('nota').snapshotChanges();
    }

    eliminarNota(id: string){
      return this.db.list('nota').remove(id);
    }

    getNota(id:String | null ): Observable<any> {
      return this.db.object('/nota/'+id).valueChanges();
    }

    actualizarNota(id: string, nota:any) {
      return this.db.list('nota').set(id,nota);
    }
}
