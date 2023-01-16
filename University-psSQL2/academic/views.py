from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view


from .models import Curso
from .serializers import CursoSerializer


@api_view(['GET'])
def getCurso(request):
    curso = Curso.objects.all()
    serializer = CursoSerializer(curso, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def postCurso(request):

    data = request.data
    curso = Curso.objects.create(  # se nombra cada variable nombrada en la clase de models
        name=data['name'],
        creditos=data['creditos']
    )
    serializer = CursoSerializer(curso, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def putCurso(request,pk):
        data = request.data
        curso = Curso.objects.get(id=pk)
        serializer = CursoSerializer(instance=curso , data=data)
        if serializer.is_valid():#Guarde varios serializadores de objetos solo si ambos son válidos
            serializer.save()
        return Response(serializer.data) #alinear return junto el if



@api_view(['DELETE'])
def deleteCurso(request, pk):
    curso = Curso.objects.get(id=pk)
    curso.delete()
    return Response('Deleted data')
