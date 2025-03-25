import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable'; 
import { Student } from 'src/app/model/student/student';
import { environment } from 'src/environments/environment';
//const apiUrl='http://localhost:8083/api/students';
const apiUrl=`${environment.apiUrl}/etudiant`;
@Injectable({
  providedIn: 'root'
})
export class StudentService {
 constructor( private http: HttpClient) { }
  public getAllStudents(): Observable<any>{
    return this.http.get(apiUrl);
  }
  public getStudentAverage(id: number): Observable<any>{
    return  this.http.get<any>(`${apiUrl}/moyenne/${id}`);
   }
  public getStudentById(id: number): Observable<any>{
    return  this.http.delete<any>(`${apiUrl}/delete/${id}`);
   }
  public createStudent(session: Student): Observable<Student>{
    return this.http.post<any>(`${apiUrl}/create`, session);
  }
  public updateStudent(id: number, session: Student): Observable<Student>{
    return this.http.put<any>(`${apiUrl}/update/${id}`, session);
  }
  public deleteStudent(id: number): Observable<any>{
   return  this.http.delete<any>(`${apiUrl}/delete/${id}`);
  }
}
