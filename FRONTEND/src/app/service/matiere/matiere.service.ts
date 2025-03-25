import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Matiere } from 'src/app/model/matiere/matiere';
import { environment } from 'src/environments/environment';

const apiUrl=`${environment.apiUrl}/matiere`;
@Injectable({
  providedIn: 'root'
})
export class MatiereService {
 constructor( private http: HttpClient) { }
  public getAllMatieres(): Observable<any>{
    return this.http.get(apiUrl);
  }
  public getMatiereById(id: number): Observable<any>{
    return  this.http.delete<any>(`${apiUrl}/delete/${id}`);
   }
  public createMatiere(matiere: Matiere): Observable<Matiere>{
    return this.http.post<any>(`${apiUrl}/create`, matiere);
  }
  public updateMatiere(id: number, matiere: Matiere): Observable<Matiere>{
    return this.http.put<any>(`${apiUrl}/update/${id}`, matiere);
  }
  public deleteMatiere(id: number): Observable<any>{
   return  this.http.delete<any>(`${apiUrl}/delete/${id}`);
  }
}