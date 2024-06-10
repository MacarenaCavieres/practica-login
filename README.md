# Registro y autenticación de usuarios

Este proyecto proporciona una aplicación de registro y autenticación de usuarios utilizando JSON Web Tokens (JWT) y bcrypt.

## ¿Cómo funciona?

Los usuarios se registran con su mail y contraseña, que es encriptada con el paquete bcrypt, y luego pasan a la página de login que es donde obtienen su token. Este es necesario para tener acceso a los productos que se guardan.

Cabe destacar que este proyecto es con fines netamente educativos.

## Tecnologías

-   Node.js: Plataforma de tiempo de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor.

-   Express.js: Framework de aplicaciones web para Node.js que simplifica el desarrollo de aplicaciones web y APIs.

-   JSON Web Tokens (JWT): Estándar abierto basado en JSON para crear tokens de acceso que permiten autenticar y autorizar usuarios.

-   bcrypt: Librería de hashing de contraseñas para Node.js, utilizada para almacenar contraseñas de manera segura mediante el algoritmo de hash bcrypt.

-   PostgreSQL: Sistema de gestión de bases de datos relacional utilizado para almacenar los datos de usuarios y otros recursos.

-   dotenv: Módulo de Node.js que carga variables de entorno desde un archivo .env en el entorno de la aplicación.

-   Bootstrap: Framework front-end de código abierto para diseño de sitios y aplicaciones web.

-   HTML y CSS: Lenguajes de marcado y estilos utilizados para la creación de las páginas web de la aplicación.

## Configuración

Variables de Entorno: La aplicación utiliza variables de entorno para configurar el puerto del servidor y la clave secreta para firmar los tokens JWT. Estas variables se pueden configurar en un archivo .env.

## Ejecución

-   Clonar el repositorio desde GitHub.
-   Instalar las dependencias con npm install.
-   Configurar las variables de entorno en un archivo .env.
-   Iniciar la aplicación con npm start.

Si quieres aportar no dudes en comunicarte conmigo!
