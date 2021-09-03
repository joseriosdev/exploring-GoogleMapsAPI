#  <a href="https://imgbb.com/"><img src="https://i.ibb.co/NVmJfFm/google-maps-icon-130921.png" alt="google-maps-icon-130921" border="0" /></a> Exploring Google Maps API!


Con la API de google mapas podemos crear mapas personalizados y aplicaciones basadas en la ubicación para web, Android e iOS.

Gracias a mapas interactivos sobre lugares y rutas optimizadas en tiempo real, información completa y precisa sobre el mundo en sus aplicaciones. 

Se puede configurar un proyecto con las herramientas de Google Maps Platform y explorar API y SDK.



# ¿Cómo puedo usar las herramientas de Google Maps API?

**1.**  Debes tener una cuenta de Google, para asociarla con la cuenta de desarrolador de Google **(https://developers.google.com/maps)**

**2.** En caso de no tener una cuenta de desarrollador de Google, la plataforma te avisa que debes registrarte para poder tener acceso a las herramientas, luego de haber creado tu cuenta, puedes ir a la parte superior a:
 * **productos**, buscar la sección:

	 *	**Desarrollar** y allí seleccionar **Plataforma de mapas** (Maps Platform).

**3.** Al dirigirte allí, pudes dar click en **Comenzar** o mirar las diferentes opciones que tiene la plataforma para poder desarrollar con la API de Google Maps.
* Primero: te envía a la página principal de la documentación, donde hay un inicio rápido donde puedes crear un **proyecto** o **una cuenta de facturación** en *Google Cloud Console (https://console.cloud.google.com/)*.

		La plataforma también ofrece un inicio rápido para 
		configurar de manera interactiva estas caracteristicas,
		mediante videos y tutoriales
	
**4.** En nuestro caso, elegimos un **proyecto**, en la página principal de la consola de Google Cloud, encontramos la opción **"CREAR PROYECTO"**, al hacer click encontramos una ventana donde nos pide colocar un nombre al proyecto, debe descriptivo por que luego la plataforma no te permite cambiarlo y tu ubicación u organización, damos click en **CREAR**.

**5.** **_API de Google Maps y servicios_**: Aqui se puede elegir y habilitar las diferentes opciones de las API y servicios ofrecidos por la plataforma de acuerdo a nuestras necesidades, las dos opciones que se eligieron fueron:

*	Maps JavaScript API
*	Maps Embed API

Luego de habilitar las API y servicios que se van a usar, se debe:

**6.** Crear el API KEY, con este se podran hacer los llamados a los servicios y API que se quieran usar, para esto debemos ir a la parte izquierda de la plataforma y seleccionar la opción **credenciales**.
Una vez allí, escogemos la opción que aparece en la parte superior que dice: **crear credenciales**, luego hacemos click en _clave de API_ y al finalizar aparece una ventana emergente que muestra la clave.

Se puede copiar o regresar a la opción para usarla después, esta clave se transfiere en el parámetro **key=API_KEY**, cuando se hacen los llamados a la API.


## Maps JavaScript API

La API de JavaScript de Maps permite personalizar los mapas mapas con contenido propio e imágenes para mostrarlos en páginas web y móviles, también se caracteriza por añadir controles que dejan que el usuario interactue con la interfaz, esto último puede ser agradado por el desarrolador o dejar que la API haga el resto.
<a href="https://ibb.co/mb84pBP"><img src="https://i.ibb.co/4Kdpkf0/jsmaps-example.png" alt="jsmaps-example" border="0" /></a>


El mapa anterior es un ejemplo de como se verían los controles predeterminados que muestra esta API.
Algunos de los controles usados son: 
* **_Zoom control_** (control de zoom): los iconos "+" y "-".
* **_Map Type control_** (control de tipo de mapa): botón superior que permite al usuario escoger el tipo de mapa.
* **_Street View control_**(control de Street View): contiene un icono de hombrecito naranja que se puede arrastrar al mapa para habilitar Street View.
* Entre otros.

**El código inicial luciría así:**
```
HTML:
<!DOCTYPE html>  
<html>
	<head> 
		<title>Simple Map</title>
		<script  src="https://polyfill.io/v3/polyfill.min.js?	features=default"></script>
		<link  rel="stylesheet"  type="text/css"  href="./style.css"  /> 
		<script  src="./index.js"></script>
	</head> 
	<body> 
		<div  id="map"></div>

		<!-- Async script executes immediately and must be after any DOM elements used in callback. -->
		<script  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"  async  ></script>
	</body>  
</html>
```
```
CSS:
/* Always set the map height explicitly to define the size of the div  
       * element that contains the map. */  
#map {  height:  100%;  
}  
  
/* Optional: Makes the sample page fill the window. */  
html,body {  height:  100%;  margin:  0;  padding:  0;  
}
```
```
JAVASCRIPT:
let map;  
  
function initMap()  {
	map =  new google.maps.Map(document.getElementById("map"),  {
	center:  { lat:  -34.397, lng:  150.644  },
	zoom:  8,
	});  
}
```
**Para obtener más información:**
-   Documentación oficial: [API de JavaScript de Maps](https://developers.google.com/maps/documentation/javascript)

## Maps Embed API

La API de Maps Embed permite colocar un mapa interactivo en una página web con una simple solicitud HTTP, no se requiere JavaScript, esta consta de una URL y parámetros, es util cuando no se puede usar la etiqueta `<script>`.

Mediante la etiqueta `<iframe>` se pueden insertar mapas de la siguiente manera:
```
<iframe
width="600"
height="450"
style="border:0"
loading="lazy"
allowfullscreen
src="https://www.google.com/maps/embed/v1/place?key= API_KEY &q=Space+Needle,Seattle+WA">  
</iframe>
```
Así luciría el mapa insertado:

<a href="https://ibb.co/1Q3n9Ds"><img src="https://i.ibb.co/3dws0Df/embedmaps-example.png" alt="embedmaps-example" border="0" /></a>

Cabe mencionar que todas las solicitudes de Maps Embed API son gratuitas con uso ilimitado.

**Para obtener más información:**
- Documentación oficial: [API de inserción de mapas](https://developers.google.com/maps/documentation/embed)

# Ejemplo práctico

Con esta breve introducción, mostraremos un poco del ejemplo práctico haciendo uso de la API:

### *[Maps JavaScript API](https://github.com/joseriosdev/exploring-GoogleMapsAPI/tree/main/docs)*


### *[Maps Embed API](https://github.com/joseriosdev/exploring-GoogleMapsAPI/tree/main/VisualForce)*
