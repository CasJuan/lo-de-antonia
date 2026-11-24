Lo de Antonia

Aplicación web de reserva de cabañas en Bariloche (sur de Argentina). Permite a los visitantes explorar las cabañas del complejo y a los administradores gestionarlas desde un panel propio.

Proyecto final del Desafío Profesional — Digital House · Full Stack Developer. Estado actual: Sprint 1 completo.

Funcionalidades del Sprint 1
#	Historia	Estado
1	Encabezado fijo con logo, lema, enlace al home y botones "Crear cuenta" / "Iniciar sesión" (sin funcionalidad), con menú hamburguesa en celular	✅
2	Cuerpo del sitio con fondo de la identidad de marca y tres secciones: buscador, categorías y recomendaciones	✅
3	Registro de cabañas (nombre, descripción, precio, capacidad e imágenes), con aviso si el nombre ya existe	✅
4	Home con cabañas en orden aleatorio (mezcla Fisher-Yates), en 2 columnas	✅
5	Detalle de cabaña con título y botón de volver	✅
6	Galería: imagen principal, grilla de 4 imágenes y "Ver más" con modal	✅
7	Pie de página con isologotipo, año y copyright	✅
8	Paginado de 10 cabañas por página, con contador y botones atrás / adelante / inicio	✅
9	Panel de administración con menú (no disponible en celular)	✅
10	Lista de cabañas en el panel (ID, nombre y acciones)	✅
11	Eliminación de cabañas con mensaje de confirmación	✅
Tecnologías

Frontend

React (Vite)
Tailwind CSS 4
React Router
lucide-react (íconos)

Backend

Java + Spring Boot 4 (Web, Data JPA, Security)
Lombok
Maven

Base de datos: MySQL 8

Identidad de marca
Color	HEX
Marrón Principal	#9A6F4E
Marrón Claro	#B38968
Marrón Oscuro	#78573D
Arena	#E0D9C6
Crema	#F2EFE7
Blanco	#FFFFFF
Estructura del repositorio
lodeAntonia/
├── backend/lodeAntonia/    # API REST con Spring Boot
│   └── uploads/            # imágenes subidas (se crea sola, no se versiona)
├── frontend/lodeAntonia/   # Aplicación React
Cómo correrlo en local
Requisitos
JDK 21 o superior (probado con JDK 26)
Node.js 20.19 o superior
MySQL 8
1. Base de datos

Creá una base vacía (las tablas las genera Hibernate al arrancar):

sql
CREATE DATABASE lodeantonia;
2. Backend

La conexión usa el usuario root y lee la contraseña de la variable de entorno DB_PASSWORD. Definila y levantá la API (en PowerShell):

powershell
cd backend/lodeAntonia
$env:DB_PASSWORD="tu_contraseña"
.\mvnw.cmd spring-boot:run

También podés correr LodeAntoniaApplication desde IntelliJ, definiendo DB_PASSWORD en Edit Configurations → Environment variables.

La API queda en http://localhost:8080.

3. Frontend
bash
cd frontend/lodeAntonia
cp .env.example .env
npm install
npm run dev

La aplicación queda en http://localhost:5173. La variable VITE_API_URL del archivo .env indica dónde está el backend.

El backend solo acepta pedidos desde http://localhost:5173 (CORS).

API REST
Método	Ruta	Descripción
GET	/cabanas	Lista todas las cabañas
GET	/cabanas/{id}	Trae una cabaña (404 si no existe)
POST	/cabanas	Crea una cabaña (409 si el nombre ya existe)
PUT	/cabanas/{id}	Edita una cabaña
DELETE	/cabanas/{id}	Elimina una cabaña (204, o 404 si no existe)
GET	/cabanas/{id}/imagenes	Imágenes de una cabaña
GET	/imagenes	Lista todas las imágenes
POST	/imagenes	Registra una imagen asociada a una cabaña
POST	/imagenes/subir	Sube un archivo (multipart/form-data, campo archivo) y devuelve su nombre
DELETE	/imagenes/{id}	Elimina el registro de una imagen
GET	/uploads/{archivo}	Sirve un archivo subido
Pantallas
Ruta	Pantalla
/	Home: hero, buscador, categorías y recomendaciones paginadas
/cabanas/:id	Detalle de una cabaña con su galería
/administracion	Menú del panel
/administracion/agregar	Formulario de alta de cabañas
/administracion/listado	Lista de cabañas con acciones
Documentación y pruebas


Limitaciones conocidas del Sprint 1
El panel de administración todavía no tiene autenticación: se accede directamente por la URL. El login llega en el Sprint 2.
Los botones "Crear cuenta" e "Iniciar sesión", el buscador y las categorías todavía no tienen funcionalidad.
La subida de imágenes no valida el tipo ni el tamaño del archivo.
Próximos pasos
Sprint 2: registro e inicio de sesión, categorías y características de las cabañas.
Sprint 3: búsqueda por fechas, favoritos, disponibilidad, políticas y puntuaciones.
Sprint 4: reservas completas, historial y notificación por email.
Autor

Juan Ignacio Castro https://github.com/CasJuan/lo-de-antonia