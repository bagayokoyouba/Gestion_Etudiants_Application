from django.urls import path

from . import views

urlpatterns = [
    path('', views.EtudiantsList),
    ################# URL POUR ETUDIANT ###############
    path('etudiant/', views.EtudiantsList),
    path('etudiant/create', views.EtudiantCreate),
    path('etudiant/update/<int:id>', views.EtudiantUpdate),
    path('etudiant/delete/<int:id>', views.EtudiantDelete),
    path('etudiant/moyenne/<int:id>', views.EtudiantMoyenne),
    ################# URL POUR MATIERE ###############
    path('matiere/', views.MatieresList),
    path('matiere/create', views.MatiereCreate),
     path('matiere/update/<int:id>', views.MatiereUpdate),
     path('matiere/delete/<int:id>', views.MatiereDelete),
    ################# URL POUR NOTE ###############
    path('note/', views.NotesList),
     path('note/create', views.NoteCreate),
     path('note/update/<int:id>', views.NoteUpdate),
     path('note/delete/<int:id>', views.NoteDelete)
]