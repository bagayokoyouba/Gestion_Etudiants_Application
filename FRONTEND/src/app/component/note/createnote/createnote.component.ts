import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatiereService } from 'src/app/service/matiere/matiere.service';
import { NoteService } from 'src/app/service/note/note.service';
import { StudentService } from 'src/app/service/student/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

 
 note: Note = {
   id: undefined,
   valeur: 0,
   etudiant: 0,
   matiere: 0
  };
 
  isSubmitted: boolean=false;
 listEtudiant: any[]=[];
 listMatiere: any[]=[];
 
   constructor(
     private matiereService: MatiereService, 
     private router: Router,
     private etudiantService: StudentService,
     private noteService: NoteService,
   ) { }
 
   ngOnInit(): void {
     // this.addCourse(course);
     this.getAllEtudiants();
     this.getAllMatieres();
   }
   addNote(note: any){
     this.isSubmitted=true;
     this.noteService.createNote(note).subscribe(
       (data: any) => {
            Swal.fire({
                            icon: 'success',
                            title: 'Succès',
                            text: 'L\'enregistrement a été ajouté avec succès!',
                            showConfirmButton: false,
                            timer: 2000
                          }); 
                          setTimeout(() => {
                            this.router.navigate(["NoteList"]);
                          }, 2000);
       },(error: any) => {   
         console.log('Erreur retournée par le backend:', error);
         const errorMessage = error?.error?.error || error?.message || 'Une erreur s\'est produite lors de l\'ajout de l\'enregistrement.';
         const statusCode = error?.status || 'N/A'; 
         
         Swal.fire({
           icon: 'error',
           title: `Erreur - Code: ${statusCode}`,  
           text: errorMessage,  
         });
       }
     )
   }
   getAllEtudiants(): void {
     this.etudiantService.getAllStudents().subscribe(
       (data: any) => {
         console.log("Classes chargées avec succès");  
         this.listEtudiant =data;
       },
       (error: any) => {
         console.error('Erreur lors de la récupération des cours :', error);
       }
     );
   }
   getAllMatieres(): void {
    this.matiereService.getAllMatieres().subscribe(
      (data: any) => {
        console.log("Classes chargées avec succès");  
        this.listMatiere =data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des cours :', error);
      }
    );
  }
}
 
 
 export class Note{
   id?: number; 
 valeur!: number ; 
 etudiant!: number;
 matiere!: number;
 }
