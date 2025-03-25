import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.scss']
})
export class AverageComponent implements OnInit {
  studentId: any; 
  studentAverage: any;
  constructor(
      private studentService: StudentService,  
        private router: Router,
         private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');  
    this.findAverageById(this.studentId);
  }
  findAverageById(studentId: any): void { 
    this.studentService.getStudentAverage(studentId).subscribe(
      (data: any) => { 
         this.studentAverage = data;
         console.log(this.studentId)
          console.log(this.studentAverage)
        console.log("Session chargée avec succès");
      },
      (error) => {
        console.error("Erreur lors de la récupération de la session :", error);
      }
    );
  }

}
