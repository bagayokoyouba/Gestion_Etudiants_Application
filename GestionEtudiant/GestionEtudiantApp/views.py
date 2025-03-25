from django.template.context_processors import request
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Etudiant, Matiere, Note
from .serializer import EtudiantSerializer, MatiereSerializer, NoteSerializer
# Create your views here.
#####################  ETUDIANT ###########################
########## FONCTION DE CREATION D'UN ETUDIANT #############
@api_view(['GET'])
def EtudiantsList(request):
    listEtudiant= Etudiant.objects.all()
    serializer= EtudiantSerializer(listEtudiant, many=True)
    return  Response(serializer.data)
###### FONCTION DE CREATION D'UN ETUDIANT #############
@api_view(['POST'])
def EtudiantCreate(request):
    serializer = EtudiantSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
####### FONCTON  QUI PERMET DE METTRE A JOUR UN ETUDIANT #######
@api_view(['PUT'])
def EtudiantUpdate(request, id):
    etudiant = Etudiant.objects.filter(id=id).first()
    if not etudiant:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = EtudiantSerializer(etudiant, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
####### FONCTION QUI PERMET DE SUPPRIMER UN ETUDIANT #########
@api_view(['DELETE'])
def EtudiantDelete(request, id):
    try:
        etudiant= Etudiant.objects.get(id=id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    etudiant.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
#####################  MATIERE ###########################
##### FONCTION QUI RETOURNE LA LISTE DES MATIERE ##########
@api_view(['GET'])
def MatieresList(request):
    listMatiere= Matiere.objects.all()
    serializer= MatiereSerializer(listMatiere, many=True)
    return  Response(serializer.data)
############## FONCTION QUI CREE UNE MATIERE ########
@api_view(['POST'])
def MatiereCreate(request):
    serializer = MatiereSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
####### FONCTON  QUI PERMET DE METTRE A JOUR UN MATIERE #######
@api_view(['PUT'])
def MatiereUpdate(request, id):
    matiere = Matiere.objects.filter(id=id).first()
    if not matiere:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = MatiereSerializer(matiere, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
####### FONCTION QUI PERMET DE SUPPRIMER UN ETUDIANT #########
@api_view(['DELETE'])
def MatiereDelete(request, id):
    try:
        matiere= Matiere.objects.get(id=id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    matiere.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
######################### NOTE ##########################
##### FONCTION QUI RETOURNE LA LISTE DES NOTE ##########
@api_view(['GET'])
def NotesList(request):
    listNote= Note.objects.all()
    serializer= NoteSerializer(listNote, many=True)
    return  Response(serializer.data)
############## FONCTION QUI CREE UNE NOTE ########
@api_view(['POST'])
def NoteCreate(request):
    serializer = NoteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
####### FONCTON  QUI PERMET DE METTRE A JOUR UN NOTE #######
@api_view(['PUT'])
def NoteUpdate(request, id):
    note = Note.objects.filter(id=id).first()
    if not note:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = NoteSerializer(note, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
####### FONCTION QUI PERMET DE SUPPRIMER UN NOTE #########
@api_view(['DELETE'])
def NoteDelete(request, id):
    try:
        note= Note.objects.get(id=id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    note.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

############### CALCULE DE LA MOYENNE ##################
@api_view(['GET'])
def EtudiantMoyenne(request, id):
    somme_note = 0
    somme_coefficient=1
    listNotes= Note.objects.filter(etudiant_id=id)
    for note in listNotes:
        matiere=note.matiere
        somme_coefficient += matiere.coefficient
        somme_note += note.valeur*matiere.coefficient
    try:
        moyenne = somme_note/(somme_coefficient-1)
    except:
        moyenne =0
    return Response(moyenne)
