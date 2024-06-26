# Proyecto de E-commerce

## Descripción del Proyecto

Este proyecto es una aplicación móvil de e-commerce desarrollada con React Native y Expo CLI. La aplicación permite a los usuarios explorar productos, agregar productos al carrito, realizar compras y ver el historial de pedidos. El proyecto incluye funcionalidades de autenticación, integración con Firebase para el manejo de datos en tiempo real, y navegación mediante React Navigation.

## Alcances del Proyecto

- **Exploración de Productos**: Los usuarios pueden ver una lista de productos organizados por categorías.
- **Carrito de Compras**: Los usuarios pueden agregar productos al carrito, ver el contenido del carrito y eliminar productos del carrito.
- **Realización de Compras**: Los usuarios pueden confirmar la compra de los productos en el carrito.
- **Historial de Pedidos**: Los usuarios pueden ver una lista de sus pedidos anteriores.
- **Autenticación**: Los usuarios pueden registrarse e iniciar sesión en la aplicación.

## Features Incluidos

- **Navegación por Tabs**: Implementado con React Navigation para una navegación intuitiva entre diferentes secciones de la aplicación.
- **Integración con Firebase**: Utilizado para el almacenamiento de datos en tiempo real, autenticación de usuarios y almacenamiento de imágenes.
- **Persistencia de Datos**: Utilizado SQLite para almacenamiento local de sesiones de usuario.
- **Notificaciones**: Implementado con react-native-toast-message para mostrar notificaciones contextuales a los usuarios.

## Librerías Utilizadas

- **React Native**: Framework principal para el desarrollo de la aplicación móvil.
- **Expo CLI**: Herramienta utilizada para la creación, compilación y despliegue de la aplicación.
- **React Navigation**: Utilizado para manejar la navegación dentro de la aplicación.
- **Redux Toolkit**: Utilizado para el manejo del estado global de la aplicación.
- **Firebase**: Utilizado para la autenticación de usuarios y el manejo de la base de datos en tiempo real.
- **Styled Components**: Utilizado para el estilizado de componentes de manera modular y reutilizable.
- **react-native-toast-message**: Utilizado para mostrar notificaciones contextuales a los usuarios.
- **SQLite**: Utilizado para la persistencia de datos localmente.

## Instalación

Sigue los siguientes pasos para instalar y poner en marcha el proyecto:

1. **Clonar el repositorio**:

   ```sh
   git clone https://github.com/Brayan0campo/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Instalar dependencias**:

   ```sh
   npm install
   ```

3. **Configurar Firebase**:

   - Crear un proyecto en Firebase.
   - Habilitar la autenticación por correo y contraseña.
   - Configurar una base de datos en tiempo real y copiar las credenciales en un archivo `.env`

4. **Iniciar la aplicación**:

   ```sh
   expo start
   ```

5. **Compilar la aplicación** (opcional):
   ```sh
   expo build:android
   expo build:ios
   ```

## Uso de la Aplicación

1. **Registro e Inicio de Sesión**:

   - Los nuevos usuarios pueden registrarse proporcionando un correo electrónico y una contraseña.
   - Los usuarios existentes pueden iniciar sesión con sus credenciales.

2. **Exploración de Productos**:

   - Los usuarios pueden navegar por las categorías de productos y ver los detalles de cada producto.

3. **Carrito de Compras**:

   - Los usuarios pueden agregar productos al carrito, ver el contenido del carrito y eliminar productos del carrito.

4. **Realización de Compras**:

   - Los usuarios pueden confirmar la compra de los productos en el carrito y recibir una notificación de éxito.

5. **Historial de Pedidos**:
   - Los usuarios pueden ver una lista de sus pedidos anteriores.
