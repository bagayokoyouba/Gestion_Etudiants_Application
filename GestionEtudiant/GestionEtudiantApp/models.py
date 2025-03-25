from tkinter.constants import CASCADE

from django.db import models


# Create your models here.
#### MODEL ETUDIANT ####
class Etudiant(models.Model):
    # id= models.IntegerField(primary_key=True)
    prenom= models.CharField(max_length=100)
    nom= models.CharField(max_length=100)
    date_naissance= models.DateField()
    niveau = models.CharField(max_length=25)
    filiere = models.CharField(max_length=25)
    class Meta:
        db_table='etudiant'
#### MODEL MATIERE ####
class Matiere(models.Model):
    nom = models.CharField(max_length=20)
    coefficient= models.IntegerField()
    etudiant =models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name="id_etudiant")
    class Meta:
        db_table='matiere'
#### MODEL NOTE ####
class Note(models.Model):
    valeur= models.FloatField()
    etudiant = models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name="etudiant_note")
    matiere = models.ForeignKey(Matiere, on_delete=models.CASCADE, related_name="matiere_note")