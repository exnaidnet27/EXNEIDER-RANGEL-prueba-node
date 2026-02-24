# 🛒 Prueba Técnica Backend - Node.js + Express + Sequelize

API REST desarrollada como solución a prueba técnica backend utilizando Node.js, Express y Sequelize como ORM para la gestión de productos, categorías, pedidos, stock y promociones en una base de datos relacional MySQL.

---

# 📌 Tabla de Contenidos

1. Descripción del Proyecto
2. Tecnologías Utilizadas
3. Requisitos del Sistema
4. Configuración del Entorno
5. Instalación
6. Configuración de Base de Datos
7. Variables de Entorno
8. Ejecución del Proyecto
9. Endpoints Disponibles
10. Estructura del Proyecto
11. Modelo Relacional
12. Decisiones Técnicas
13. Scripts SQL
14. Posibles Mejoras

---

# 🧾 1. Descripción del Proyecto

Esta API permite:

- Consultar productos con stock por tienda.
- Obtener el top 10 de productos más vendidos.
- Listar categorías ordenadas por cantidad de productos.
- Consultar promociones activas según el día de la semana.

Se implementaron relaciones uno-a-muchos y muchos-a-muchos usando Sequelize.

---

# 🛠 2. Tecnologías Utilizadas

- Node.js
- Express
- Sequelize (ORM)
- MySQL
- dotenv
- Nodemon
- Git

---

# 💻 3. Requisitos del Sistema

Debe tener instalado:

- Node.js v18 o superior
- MySQL Server
- Git

Verificar instalación:

```bash
node -v
npm -v
mysql --version
⚙️ 4. Configuración del Entorno
4.1 Clonar el Repositorio
git clone https://github.com/TU-USUARIO/TU-REPOSITORIO.git
cd TU-REPOSITORIO
4.2 Instalar Dependencias
npm install
🗄 5. Configuración de Base de Datos

El proyecto incluye un script SQL en:

/sql/market.sql

Este script crea:

Base de datos Market

Tablas

Relaciones

Claves foráneas

Ejecutar el script

Desde consola:

mysql -u root -p < sql/market.sql

O desde MySQL Workbench importando el archivo.

🔐 6. Variables de Entorno

Crear un archivo .env en la raíz del proyecto:

PORT=3000
DB_NAME=Market
DB_USER=root
DB_PASSWORD=tu_password
DB_HOST=127.0.0.1

⚠️ El archivo .env está ignorado en .gitignore.

🚀 7. Ejecución del Proyecto
Modo desarrollo (recomendado)
npm run dev
Modo producción
npm start

Salida esperada en consola:

DB conectada correctamente
Servidor corriendo en puerto 3000
🌐 8. Endpoints Disponibles

Base URL:

http://localhost:3000/api
📦 8.1 Obtener productos con stock por tienda
GET /api/productos

Incluye:

Información del producto

Categoría asociada

Stock disponible

Tienda relacionada

Ejemplo respuesta:

[
  {
    "PRODUCTO_ID": 1,
    "NOMBRE": "Laptop",
    "PRECIO": 2500,
    "Categoria": {
      "NOMBRE": "Electrónica"
    },
    "ProductoStocks": [
      {
        "STOCK": 10,
        "Tienda": {
          "NOMBRE": "Tienda Centro"
        }
      }
    ]
  }
]
🔝 8.2 Top 10 productos más vendidos
GET /api/productos/top

Utiliza función agregada SUM sobre la tabla de pedidos.

Ejemplo respuesta:

[
  {
    "PRODUCTO_ID": 1,
    "TOTAL_VENDIDO": 6
  }
]
🗂 8.3 Categorías ordenadas por cantidad de productos
GET /api/categorias

Incluye conteo usando COUNT y agrupación.

🎯 8.4 Promociones activas por día
GET /api/promociones/:day

Donde:

Número	Día
0	Domingo
1	Lunes
2	Martes
3	Miércoles
4	Jueves
5	Viernes
6	Sábado

Ejemplo:

GET /api/promociones/3
🏗 9. Estructura del Proyecto
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── config/
 └── app.js

sql/
 └── market.sql

.env
package.json
🧩 10. Modelo Relacional

Relaciones implementadas:

Categoria → Productos (1:N)

Producto → Stock (1:N)

Tienda → Stock (1:N)

Pedido → PedidoProductos (1:N)

Producto → PedidoProductos (1:N)

Promoción ↔ Tienda (N:M)

Se usaron claves foráneas y asociaciones Sequelize:

belongsTo

hasMany

belongsToMany

🧠 11. Decisiones Técnicas

Se utilizó Sequelize para abstracción del modelo relacional.

Se implementaron funciones agregadas (SUM, COUNT).

Se modularizó el proyecto por capas:

Models

Controllers

Routes

Se implementó manejo de variables de entorno.

Se utilizó Nodemon para entorno de desarrollo.

📜 12. Scripts SQL

El archivo /sql/market.sql incluye:

Creación de base de datos

Creación de tablas

Relaciones

Claves primarias y foráneas

Puede incluir datos de prueba opcionalmente.

🚀 13. Posibles Mejoras

Implementar autenticación JWT.

Validaciones con middleware.

Manejo global de errores.

Documentación Swagger.

Dockerización del proyecto.

Testing con Jest o Supertest.
