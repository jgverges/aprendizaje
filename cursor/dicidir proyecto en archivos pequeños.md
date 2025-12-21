Estrategias para proyectos en desarrollo con estructura incierta:

## Estrategias para estructura flexible

### Opción 1: Números flexibles (recomendada para desarrollo)

#### Sistema de numeración con gaps

En lugar de numeración secuencial (01, 02, 03...), deja gaps:

```
00-INDEX.md
10-Resum-Executiu.md
20-Tasques-Investigacio.md
30-Combinacio-Ideal.md
40-Ahorro-Tiempo.md
50-Mejora-Calidad.md
60-Herramientas-Por-Tarea.md
70-Tabla-Comparativa.md
80-Limites.md
90-Plan-Accion.md
95-Conclusion.md
```

Ventajas:
- Puedes añadir `15-`, `25-`, `35-` entre secciones existentes
- No necesitas renombrar archivos después
- Mantiene el orden lógico

Ejemplo de adición:
```
20-Tasques-Investigacio.md
25-Nueva-Seccion.md  ← Nueva sección entre 20 y 30
30-Combinacio-Ideal.md
```

---

### Opción 2: Nombres descriptivos (sin numeración)

Si la estructura es muy inestable:

```
index.md
resum-ejecutiu.md
tasques-investigacio.md
combinacio-herramientas.md
ahorro-tiempo.md
mejora-calidad.md
herramientas-por-tarea.md
tabla-comparativa.md
```

Luego gestiona el orden desde el `index.md`.

Ventajas:
- Máxima flexibilidad
- No necesitas renombrar al reorganizar

Desventajas:
- El orden depende del índice
- Puede ser menos claro en el explorador

---

### Opción 3: Sistema mixto (recomendada para proyectos grandes)

#### Categorías + subsecciones

```
00-INDEX.md
10-INTRODUCCIO/
  10-Resum-Executiu.md
  15-Tasques-Investigacio.md
20-HERRAMIENTAS/
  20-Combinacio-Ideal.md
  25-Herramientas-Por-Tarea.md
  30-Tabla-Comparativa.md
30-RESULTATS/
  30-Ahorro-Tiempo.md
  35-Mejora-Calidad.md
40-PRECAUCIONS/
  40-Limites.md
  45-Seguridad.md
50-ACCIO/
  50-Plan-Accion.md
  55-Conclusion.md
```

Ventajas:
- Reorganización dentro de categorías
- Estructura clara
- Fácil añadir/quitar categorías

---

## Cómo manejar adiciones de secciones

### Método 1: Usar Cursor para reorganizar

Cuando añadas una sección nueva:

```
"Tengo un nuevo archivo llamado 'Nueva-Seccion.md' que debe ir
entre 'Tasques-Investigacio.md' y 'Combinacio-Ideal.md'.

Actualiza:
1. El 00-INDEX.md para incluir el enlace en el lugar correcto
2. Los enlaces cruzados en otros archivos si es necesario"
```

Cursor puede:
- Actualizar el índice automáticamente
- Ajustar referencias cruzadas
- Reorganizar números si es necesario

---

### Método 2: Usar nombres temporales y renombrar después

Durante desarrollo:
```
seccion-temp-1.md
seccion-temp-2.md
ideas-pendientes.md
borrador-nueva-seccion.md
```

Cuando se estabilice:
```
Cursor: "Renombra 'seccion-temp-1.md' a '25-Nueva-Seccion.md'
y actualiza todas las referencias en otros archivos"
```

---

## Cómo manejar eliminaciones de secciones

### Proceso seguro para eliminar

**Paso 1: Buscar referencias**
```
"Busca todas las referencias a 'Seccion-Eliminar.md' en todos
los archivos del proyecto y muéstrame dónde aparece"
```

**Paso 2: Limpiar referencias**
```
"Elimina todas las referencias a 'Seccion-Eliminar.md' en:
- 00-INDEX.md
- Todos los otros archivos que la mencionen"
```

**Paso 3: Eliminar archivo**
```
Solo después de limpiar referencias, elimina el archivo
```

Cursor puede hacerlo todo de una vez:
```
"Elimina 'Seccion-Eliminar.md' y limpia todas las referencias
a este archivo en todo el proyecto, incluyendo el índice"
```

---

## Herramientas de Cursor para gestión dinámica

### 1. Búsqueda global (`Ctrl+Shift+F`)

Para encontrar todas las referencias:
- `Ctrl+Shift+F` → busca "nombre-archivo"
- Encuentra todas las menciones en todos los archivos
- Útil para actualizar referencias al reorganizar

---

### 2. Renombrar archivo con Cursor

Cursor puede renombrar y actualizar referencias:
```
"Renombra 'archivo-viejo.md' a 'archivo-nuevo.md' y actualiza
todas las referencias en el proyecto"
```

---

### 3. Multi-cursor editing

Para actualizar múltiples referencias:
- `Ctrl+D` → selecciona siguiente ocurrencia
- Edita todas a la vez
- Útil para actualizar enlaces al reorganizar

---

## Estrategia recomendada: fase de desarrollo

### Fase 1: Desarrollo inicial (estructura incierta)

**Estructura flexible:**
```
draft/
  ideas.md
  borrador-1.md
  borrador-2.md
  notas.md

sections/
  resum.md
  herramientas.md
  resultados.md

archive/
  (archivos que ya no necesitas pero no quieres perder)
```

**Características:**
- Nombres descriptivos simples
- Organización por estado (draft/sections/archive)
- Sin numeración rígida todavía

---

### Fase 2: Estructuración (cuando se clarifica)

**Usa Cursor para reorganizar:**
```
"Tengo estos archivos en 'sections/':
- resum.md
- herramientas.md
- resultados.md
- nueva-seccion.md

Reorganízalos en una estructura numerada:
- 00-INDEX.md (créalo)
- 10-Resum.md
- 20-Herramientas.md
- 30-Resultados.md
- 35-Nueva-Seccion.md (entre 30 y 40)

Actualiza todos los enlaces entre archivos"
```

---

### Fase 3: Estabilización (estructura casi final)

**Sistema con gaps para flexibilidad:**
```
00-INDEX.md
10-Resum.md
20-Herramientas.md
30-Resultados.md
35-Nueva-Seccion.md
40-Conclusion.md
```

Deja gaps de 5 o 10 entre números para añadir secciones.

---

## Script para reorganizar automáticamente

### Usando Cursor Chat:

```
"Analiza la estructura actual de archivos MD en este directorio
y proponme una reorganización numerada con gaps.

Asegúrate de:
1. Crear/actualizar 00-INDEX.md
2. Renombrar archivos con números apropiados
3. Actualizar todas las referencias cruzadas
4. Mantener gaps de 5-10 entre números para futuras adiciones"
```

Cursor puede hacer esto automáticamente.

---

## Gestión de índice dinámico

### Índice que se autoactualiza (idea avanzada)

**Archivo `00-INDEX.md` con enlaces:**

```markdown
# Índice General

## Secciones

1. [Resumen Ejecutivo](10-Resum.md)
2. [Tareas de Investigación](15-Tasques.md)
3. [Combinación de Herramientas](20-Combinacio.md)
4. [Ahorro de Tiempo](30-Ahorro.md)
5. [Mejora de Calidad](35-Mejora.md)
6. [Herramientas por Tarea](40-Herramientas.md)
7. [Tabla Comparativa](50-Tabla.md)
8. [Plan de Acción](60-Plan.md)
```

**Para añadir sección:**
```
"Añade una nueva entrada en 00-INDEX.md:
'3.5. [Nueva Sección](25-Nueva.md)'

Inserte entre la entrada 3 y la 4, actualizando la numeración"
```

---

## Ejemplo práctico completo

### Escenario: Añadir nueva sección en medio

**Situación inicial:**
```
20-Tasques.md
30-Combinacio.md
40-Ahorro.md
```

**Quieres añadir entre 30 y 40:**

**Opción A: Usar número intermedio**
```
20-Tasques.md
30-Combinacio.md
35-Seguridad.md  ← Nueva (gap de 5)
40-Ahorro.md
```

**Opción B: Renombrar todo**
```
"Renombra '40-Ahorro.md' a '50-Ahorro.md' para dejar espacio.
Luego crea '40-Seguridad.md' y actualiza todas las referencias"
```

---

## Recomendación final para tu caso

**Para proyectos en desarrollo:**

1. Empieza con nombres descriptivos simples (sin números)
2. Organiza en carpetas por estado (draft/sections/archive)
3. Cuando se clarifique la estructura, usa Cursor para numerar:
   ```
   "Reorganiza todos los archivos en 'sections/' con numeración
   00-INDEX.md, 10-, 20-, 30-... dejando gaps de 10"
   ```
4. Mantén el `00-INDEX.md` siempre actualizado
5. Usa gaps de 5-10 entre números para flexibilidad futura

**Ventajas:**
- Máxima flexibilidad al inicio
- Reorganización fácil cuando necesitas
- Cursor puede automatizar el proceso
- Sin necesidad de renombrar manualmente muchos archivos

¿Quieres que genere un script específico o comandos de Cursor para automatizar la reorganización de tu proyecto actual?
