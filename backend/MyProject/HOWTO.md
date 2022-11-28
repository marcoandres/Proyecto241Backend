# Cómo crear un backend

## Introducción

## Instalando el software necesario
Crear una carpeta llamada Backend
Crear un entorno con conda
```console
conda create -n py311 python=3.11 --channel conda-forge
```
Una vez creado el entorno, activar por medio de:
```console
conda activate py311
```
Una vez activado conda, aparecerá el nombre del entorno en la terminal, en este caso py311, similar a esto:
```console
(py311) C:\Users\Usuario\Documents\Github\Proyecto241Backend>
```
```console
(py311)$
```
## Instalar los paquetes necesarios para el proyecto.

A continuación, instalar el entorno de Django rest Framework
```console
(py311)$ conda install djangorestframework
```

## Guardar los cambios en un archivo txt
para que se pueda replicar en otro equipo este proyecto, se debe generar un archivo txt con los paquetes instalados en el entorno. Para ello, se debe ejecutar el siguiente comando:
```console
(py311)$ conda list -e > requirements.txt
```
o bien, si solamente estás utilizando pip, lo puedes realizar por medio de 
```console	
pip freeze > requirements.txt
```
## Instalar las dependencias en otro equipo
para instalar las dependencias, se utiliza
```console	
conda install --file requirements.txt
```

# Iniciar el proyecto. 
Para iniciar el proyecto, se debe ejecutar el siguiente comando:
```console
(py311)$ django-admin startproject Proyecto241Backend
```
## Crear una aplicación
Para crear una aplicación, se debe ejecutar el siguiente comando:
```console
(py311)$ python manage.py startapp app
```
## Migrar los modelos a la base de datos
Para migrar el modelo a una base de datos, se debe ejecutar el siguiente comando:
```console
(py311)$ python manage.py makemigrations
(py311)$ python manage.py migrate
```
## Crear un superusuario
Para crear un superusuario, se debe ejecutar el siguiente comando:
```console
(py311)$ python manage.py createsuperuser
```
## Iniciar el servidor
Para iniciar el servidor, se debe ejecutar el siguiente comando:
```console
(py311)$ python manage.py runserver
```

