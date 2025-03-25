import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Note } from 'src/app/model/note/note';
import { environment } from 'src/environments/environment';

const apiUrl=`${environment.apiUrl}/note`;
@Injectable({
  providedIn: 'root'
})
export class NoteService {
 constructor( private http: HttpClient) { }
  public getAllNotes(): Observable<any>{
    return this.http.get(apiUrl);
  }
  public getNoteById(id: number): Observable<any>{
    return  this.http.delete<any>(`${apiUrl}/delete/${id}`);
   }
  public createNote(session: Note): Observable<Note>{
    return this.http.post<any>(`${apiUrl}/create`, session);
  }
  public updateNote(id: number, session: Note): Observable<Note>{
    return this.http.put<any>(`${apiUrl}/update/${id}`, session);
  }
  public deleteNote(id: number): Observable<any>{
   return  this.http.delete<any>(`${apiUrl}/delete/${id}`);
  }
}