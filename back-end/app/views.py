from rest_framework.views import APIView
from rest_framework.response import Response


class HomeApiView(APIView):
    def get(self, request, format=None):
        return Response({"name": "Wagner Rigoli da Rosa", "idade": 39}, status=200)