import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
 
import { MatiereService } from 'src/app/service/matiere/matiere.service';
import { StudentService } from 'src/app/service/student/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-creatematiere',
  templateUrl: './creatematiere.component.html',
  styleUrls: ['./creatematiere.component.scss']
})
export class CreatematiereComponent implements OnInit {

matiere: Matiere = {
  id: undefined,
  nom: '',
  coefficient: 0,
  etudiant: 0
 };

 isSubmitted: boolean=false;
listEtudiant: any[]=[];
listMatiere: any[]=[];

  constructor(
    private matiereService: MatiereService, 
    private router: Router,
    private etudiantService: StudentService,
  ) { }

  ngOnInit(): void {
    // this.addCourse(course);
    this.getAllStudents();

  }
  addMatiere(matiere: any){
    this.isSubmitted=true;
    this.matiereService.createMatiere(matiere).subscribe(
      (data: any) => {
           Swal.fire({
                           icon: 'success',
                           title: 'Succès',
                           text: 'L\'enregistrement a été ajouté avec succès!',
                           showConfirmButton: false,
                           timer: 2000
                         }); 
                         setTimeout(() => {
                           this.router.navigate(["MatiereList"]);
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
  getAllStudents(): void {
    this.etudiantService.getAllStudents().subscribe(
      (data: any) => {
        console.log("Classes chargées avec succès");  
        this.listEtudiant =data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des cours :', error);
      }
    );
  }}

export class Matiere{
  id?: number;
  nom!: String;
coefficient!: number ; 
etudiant!: number;
}
