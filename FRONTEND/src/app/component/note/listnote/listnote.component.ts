import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/service/note/note.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listnote',
  templateUrl: './listnote.component.html',
  styleUrls: ['./listnote.component.scss']
})
export class ListnoteComponent implements OnInit {


 
  listNotes : any[] = [];
  courseId: any
    constructor(private noteService: NoteService,  private route: ActivatedRoute, private router: Router) { }
 
    ngOnInit(): void {
      this.getAllNotes();
      //this.courseId= this.route.snapshot.paramMap.get('courseId');
    }
    getAllNotes(): void {
      this.noteService.getAllNotes().subscribe(
        (data: any) => {
          console.log("Données reçues :", data);  
          this.listNotes = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des cours :', error);
        }
      );
    }
    deleteStudent(id: any): void {
      this.noteService.deleteNote(id).subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'L\'enregistrement a été supprimé avec succès!',
            showConfirmButton: false,
            timer: 2000
          }).then(
            ()=>{
              window.location.reload();
            }
          );
        },
        (error: any) => {
          console.log('Erreur retournée par le backend:', error);
          const errorMessage = error?.error?.error || error?.message || 'Une erreur s\'est produite lors de la suppression de l\'enregistrement.';
          const statusCode = error?.status || 'N/A'; 
    
          Swal.fire({
            icon: 'error',
            title: `Erreur - Code: ${statusCode}`,  
            text: errorMessage,  
          });
        }
      );
    }
    
    updateCourse(id: number): void {
     this.router.navigate(["CourseUpdate/"+id])
    }
    showCreateStudent: boolean = false;
 
    toggleCreateStudent() {
      this.showCreateStudent = !this.showCreateStudent;
    }

}
