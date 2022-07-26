from django.db import models

# Modelo para la base de datos de una "empresa"
    # "Nombre" es un campo de caracteres
    # "Direccion" es un campo de caracteres
    # "NIT" solo acepta números positivos porque el NIT nunca es negativo
    # "Telefono" solo acepta números positivos porque el telefono nunca es negativo
class Empresa(models.Model):
    NombreEmpresa = models.CharField(max_length=50)
    Direccion = models.CharField(max_length=100)
    NIT = models.CharField(max_length=10)
    Telefono = models.CharField(max_length=10)