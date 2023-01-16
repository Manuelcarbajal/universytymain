from django.contrib import admin
from .models import Curso,Docent

# Register your models here.

@admin.register(Curso)
class CursoAdmin(admin.ModelAdmin):
    list_display = ('id', 'coloreado', 'creditos')  # table
   # ordering = ('creditos','name')#ordena
   # search_fields = ('name', 'creditos')  # buscador
   # list_editable  = ('name','creditos')#edotable desde consola
   # list_display_links = ('name')
   # list_filter = ('creditos')
   # list_per_page = 4 #muestra por paguina numero define elementos por paguina
   # exclude = ('creditos') #se ecluye lo que no quieres editar

   # opciones avanzadas

    #         fieldsets = (
    #             (None, {
    #                 'fields': ('name',)#campos que se muestran normalmente
    #             }),
    #             ('Advance options', {
    #                 'classes': ('collapse', 'wide', 'extrapretty'),
    #                 'fields': ('creditos',)#capos ocultos de opciones avanzadas
    #             })
    #         )
    # 


    def date(self, obj):
        return obj.name.upper()
    
    date.short_description = 'Curso'
    date.empty_value_display = '???'
    date.admin_order_field = 'name'

   
admin.site.register(Docent)

# admin.site.register(Curso,CursoAdmin)
