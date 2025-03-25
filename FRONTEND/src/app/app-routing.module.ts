import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component'; 
import { ListsessionComponent } from './component/session/listsession/listsession.component';
import { CreatesessionComponent } from './component/session/createsession/createsession.component';
import { UpdatesessionComponent } from './component/session/updatesession/updatesession.component';
import { ListcourseComponent } from './component/course/listcourse/listcourse.component';
import { CreatecourseComponent } from './component/course/createcourse/createcourse.component';
import { UpdatecourseComponent } from './component/course/updatecourse/updatecourse.component';
import { UpdateclasseComponent } from './component/classe/updateclasse/updateclasse.component';
import { ListclasseComponent } from './component/classe/listclasse/listclasse.component';
import { CreateregistrationComponent } from './component/registration/createregistration/createregistration.component';
import { UpdateregistrationComponent } from './component/registration/updateregistration/updateregistration.component';
import { ListregistrationComponent } from './component/registration/listregistration/listregistration.component';
import { CreateclasseComponent } from './component/classe/createclasse/createclasse.component';
import { ListstudentComponent } from './component/student/liststudent/liststudent.component';
import { CreatestudentComponent } from './component/student/createstudent/createstudent.component';
import { UpdatestudentComponent } from './component/student/updatestudent/updatestudent.component';
import { AverageComponent } from './component/student/average/average.component';
import { ListmatiereComponent } from './component/matiere/listmatiere/listmatiere.component';
import { CreatematiereComponent } from './component/matiere/creatematiere/creatematiere.component';
import { UpdatematiereComponent } from './component/matiere/updatematiere/updatematiere.component';
import { ListnoteComponent } from './component/note/listnote/listnote.component';
import { CreatenoteComponent } from './component/note/createnote/createnote.component';
import { UpdatenoteComponent } from './component/note/updatenote/updatenote.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  // ********************* URLS POUR SESSION *****************//
  {path: 'SessionList', component: ListsessionComponent},
  {path: 'SessionCreate', component: CreatesessionComponent},
  {path: 'SessionUpdate/:id', component: UpdatesessionComponent},
   // ********************* URLS POUR COURSE *****************//
   {path: 'CourseList', component: ListcourseComponent},
   {path: 'CourseCreate', component: CreatecourseComponent},
   {path: 'CourseUpdate/:id', component: UpdatecourseComponent},
  
      // ********************* URLS POUR CLASSE *****************//
  {path: 'ClasseList', component: ListclasseComponent},
   {path: 'ClasseCreate', component: CreateclasseComponent},
  {path: 'ClasseUpdate/:id', component: UpdateclasseComponent}, 
   // ********************* URLS POUR REGISTRATION *****************//
 {path: 'RegistrationList', component: ListregistrationComponent},
  {path: 'RegistrationCreate', component: CreateregistrationComponent}, 
  {path: 'RegistrationUpdate/:id', component: UpdateregistrationComponent}, 
     // ********************* URLS POUR STUDENT *****************//
   {path: 'StudentList', component: ListstudentComponent},
  {path: 'StudentCreate', component: CreatestudentComponent},
  {path: 'StudentUpdate/:id', component: UpdatestudentComponent},  
  {path: 'StudentAverage/:id', component: AverageComponent},
   // ********************* URLS POUR MATIERE *****************//
   {path: 'MatiereList', component: ListmatiereComponent},
  {path: 'MatiereCreate', component: CreatematiereComponent},
  {path: 'MatiereUpdate/:id', component: UpdatematiereComponent},  
     // ********************* URLS POUR NOTE *****************//
     {path: 'NoteList', component: ListnoteComponent},
  {path: 'NoteCreate', component: CreatenoteComponent},
  {path: 'NoteUpdate/:id', component: UpdatenoteComponent}, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }