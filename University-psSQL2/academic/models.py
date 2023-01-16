from django.db import models
from django.utils.html import format_html
from .choices import sex

class Docent(models.Model):
    last_name = models.CharField(max_length=30,verbose_name='Last name')
    second_lastname =models.CharField(max_length=30,verbose_name='Second last name')
    first_name = models.CharField(max_length=30,verbose_name='First name')
    birth_date = models.DateField(verbose_name='Birth Date')
    sex = models.CharField(max_length=1,choices=sex,default='X')
    
    def full_name(selft):
        return "{} {}, {}".format(selft.second_lastname,selft.last_name,selft.first_name)
    
    def __str__(self):
        return self.full_name()
    
    class Meta:
        verbose_name = 'Docent'
        verbose_name_plural = 'Docents'
        db_table = 'docent'
        ordering = ['last_name','-second_lastname']
    

class Curso(models.Model):
    name = models.CharField(max_length=50)
    creditos = models.PositiveSmallIntegerField()
    docent = models.ForeignKey(Docent,null = True , blank=True,on_delete=models.CASCADE)

    def __str__(self):
        texto = "{0} ({1})"
        return texto.format(self.name,self.creditos)
    
    def coloreado(self):#personalisa etqueta de color ya se name en admin
        return format_html('<span style="color:white;">{0}</span>'.format(self.name))
           