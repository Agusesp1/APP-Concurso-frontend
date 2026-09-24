# APP-Concurso — Frontend

Aplicación web construida con **React 18** + **Vite** + **Bootstrap 5**.

---

## 📁 Estructura del proyecto

```
APP-Concurso-frontend/
├── public/                     ← Archivos estáticos públicos
├── src/
│   ├── main.jsx                ← Punto de entrada: monta React, importa Bootstrap
│   ├── App.jsx                 ← Configura Router y layout global (Navbar + Footer)
│   ├── index.css               ← Estilos globales complementarios
│   ├── components/             ← Componentes reutilizables
│   │   ├── Navbar.jsx          ← Barra de navegación responsiva
│   │   └── Footer.jsx          ← Pie de página
│   ├── pages/                  ← Una página = una ruta
│   │   ├── HomePage.jsx        ← Ruta "/"
│   │   ├── AboutPage.jsx       ← Ruta "/about"
│   │   └── NotFoundPage.jsx    ← Ruta "*" (404)
│   └── services/
│       └── api.js              ← Instancia de Axios para consumir el backend
├── .env.example                ← Variables de entorno de ejemplo
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Variables de entorno (opcional para desarrollo)
cp .env.example .env

# 3. Iniciar en modo desarrollo
npm run dev
# → http://localhost:3000

# 4. Build de producción
npm run build
```

---

## 🏗️ Convenciones

| Carpeta        | Contenido                                  |
|----------------|--------------------------------------------|
| `components/`  | Piezas reutilizables en múltiples páginas  |
| `pages/`       | Una página por ruta — importadas en App.jsx |
| `services/`    | Lógica de comunicación con el backend      |
| `hooks/`       | (Crear cuando sea necesario) Custom hooks  |
| `context/`     | (Crear cuando sea necesario) React Context |

---

## ➕ Agregar una nueva página

1. Crear `src/pages/NuevaPagina.jsx`
2. Importarla en `src/App.jsx`
3. Agregar la `<Route>` correspondiente:
   ```jsx
   <Route path="/nueva" element={<NuevaPagina />} />
   ```
4. Agregar el link en `src/components/Navbar.jsx`

---

## 🔗 Conexión con el backend

El archivo `src/services/api.js` exporta una instancia de Axios lista para usar:

```js
import api from '../services/api';

// Ejemplo de uso en un componente
const { data } = await api.get('/example');
```

En desarrollo el proxy de Vite redirige `/api` → `http://localhost:3001`.