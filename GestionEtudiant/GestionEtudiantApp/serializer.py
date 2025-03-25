from rest_framework import serializers
from .models import Etudiant, Matiere, Note


######### SERIALIZER POUR ETUDIANT #############
class EtudiantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Etudiant
        fields = ['id','prenom', 'nom', 'date_naissance', 'niveau', 'filiere']
######### SERIALIZER POUR MATIERE #############
class MatiereSerializer(serializers.ModelSerializer):
    class Meta:
        model = Matiere
        fields = ['id', 'nom', 'coefficient', 'etudiant']
######### SERIALIZER POUR NOTE #############
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'valeur',  'etudiant', 'matiere']