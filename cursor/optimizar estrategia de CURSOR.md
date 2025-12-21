Recomendaciones para trabajar con documentos largos en Cursor:

## Mejor flujo de trabajo en Cursor para documentos largos

### Respuesta directa

Sí, dividir el archivo MD en secciones separadas ayuda. Ventajas:
- Cursor puede acceder a múltiples archivos sin copiar/pegar
- Navegación más rápida
- Contexto más específico por archivo
- Menos scroll
- Puedes trabajar en una sección sin cargar todo el documento

---

## Estructura recomendada para tu proyecto

### Organización por archivos separados:

```
ias/BIOMEDICINA/IA Biologia/
├── 00-INDEX.md (índice general con enlaces)
├── 01-Resum-Executiu.md
├── 02-Tasques-Investigacio.md
├── 03-Combinacio-Ideal-Herramientas.md
├── 04-Ahorro-Tiempo.md
├── 05-Mejora-Calidad.md
├── 06-Herramientas-Por-Tarea.md
├── 07-Tabla-Comparativa.md
├── 08-Limites-Precauciones.md
├── 09-Seguridad-Confidencialidad.md
├── 10-Plan-Accion.md
└── 11-Conclusion.md
```

Ventajas:
- Cada archivo es manejable (200-400 líneas)
- Cursor puede abrir múltiples archivos a la vez
- Puedes trabajar en una sección sin cargar el resto
- Facilita la colaboración y revisión

---

## Flujo de trabajo optimizado

### 1. Trabajo con múltiples archivos abiertos

Cómo hacerlo:
1. Abre los archivos relevantes en pestañas separadas
2. Cursor ve el contexto de todos los archivos abiertos
3. No necesitas copiar/pegar; Cursor lee los archivos directamente

Ejemplo:
```
Tienes abiertos:
- 06-Herramientas-Por-Tarea.md (trabajando aquí)
- 04-Ahorro-Tiempo.md (referencia)
- 07-Tabla-Comparativa.md (referencia)
```

Cursor puede usar contexto de los tres archivos sin copiar/pegar.

---

### 2. Usar referencias en lugar de copiar/pegar

En lugar de:
```
❌ "Aquí está el texto [pega 500 líneas]"
```

Hazlo así:
```
✅ "En el archivo 04-Ahorro-Tiempo.md, sección 'Tabla de ahorro',
añade esta nueva fila: [solo la nueva información]"
```

Cursor lee el archivo directamente.

---

### 3. Usar el índice para navegación rápida

**Archivo `00-INDEX.md`:**
```markdown
# Índice General

## Estructura del documento

1. [Resumen Ejecutivo](01-Resum-Executiu.md)
2. [Tareas de Investigación](02-Tasques-Investigacio.md)
3. [Combinación Ideal de Herramientas](03-Combinacio-Ideal-Herramientas.md)
4. [Ahorro de Tiempo](04-Ahorro-Tiempo.md)
5. [Mejora de Calidad](05-Mejora-Calidad.md)
6. [Herramientas por Tarea](06-Herramientas-Por-Tarea.md)
7. [Tabla Comparativa](07-Tabla-Comparativa.md)
8. [Límites y Precauciones](08-Limites-Precauciones.md)
9. [Seguridad y Confidencialidad](09-Seguridad-Confidencialidad.md)
10. [Plan de Acción](10-Plan-Accion.md)
11. [Conclusión](11-Conclusion.md)
```

---

## Técnicas específicas para evitar scroll

### 1. Usar "Go to Symbol" (Ctrl+Shift+O)

En Cursor:
- Presiona `Ctrl+Shift+O` (o `Cmd+Shift+O` en Mac)
- Ve directamente a cualquier sección por su título
- No necesitas hacer scroll

### 2. Usar Outline View

En Cursor:
- Abre el panel de Outline (normalmente a la derecha)
- Ve la estructura completa del documento
- Haz clic en cualquier sección para ir directamente

### 3. Dividir la vista (Split View)

En Cursor:
- `Ctrl+\` (o `Cmd+\`) para dividir la vista
- Mantén dos secciones visibles simultáneamente
- Útil para trabajar en una sección viendo otra de referencia

---

## Prompts eficientes sin copiar/pegar

### ❌ INEFICIENTE (evitar):

```
"Toma este texto largo [pega 1000 líneas] y mejóralo"
```

### ✅ EFICIENTE (recomendado):

**Opción 1: Referencia directa**
```
"En el archivo 06-Herramientas-Por-Tarea.md, sección 1.3 (Redacción),
mejora la explicación de Cursor añadiendo ejemplos más específicos"
```

**Opción 2: Trabajar con archivo abierto**
```
[Archivo ya abierto en Cursor]
"Ajusta esta sección para que sea más concisa, manteniendo
toda la información importante"
```

**Opción 3: Referencia cruzada**
```
"En 04-Ahorro-Tiempo.md hay una tabla. Asegúrate que los números
en 06-Herramientas-Por-Tarea.md sean consistentes"
```

---

## Cómo dividir tu documento actual

### Paso 1: Crear estructura de archivos

1. Identifica las secciones principales del documento
2. Crea un archivo MD para cada sección
3. Mantén un archivo índice que enlace todo

### Paso 2: Migrar contenido

Usa Cursor Agent para ayudar:
```
"Divide el contenido de 'beneficios que puede aportar ia...md'
en estos archivos separados según esta estructura:
- 01-Resum-Executiu.md: Resumen ejecutivo
- 02-Tasques-Investigacio.md: Tareas de investigación
- etc.

Crea los archivos y distribuye el contenido apropiadamente"
```

### Paso 3: Mantener coherencia

Usa referencias cruzadas:
```markdown
## En cualquier archivo

Como se menciona en [04-Ahorro-Tiempo.md](04-Ahorro-Tiempo.md),
el ahorro total es de 25-37 horas.
```

---

## Ventajas del modo Chat con archivos separados

### 1. Contexto específico
- Abres solo los archivos relevantes
- Cursor ve solo lo necesario
- Respuestas más rápidas y precisas

### 2. Menos tokens consumidos
- Si abres todo en un solo archivo → contexto enorme
- Si abres solo 2-3 archivos relevantes → contexto más pequeño
- Ahorro en tokens/credits

### 3. Navegación más rápida
- `Ctrl+P` → busca archivo por nombre
- `Ctrl+Shift+O` → salta a sección dentro del archivo
- Sin scroll constante

---

## Ejemplo práctico de flujo de trabajo

**Escenario:** Quieres mejorar la sección de "Herramientas por Tarea"

**Flujo optimizado:**

1. Abre solo archivos relevantes:
   ```
   - 06-Herramientas-Por-Tarea.md (trabajando)
   - 04-Ahorro-Tiempo.md (referencia para números)
   - 07-Tabla-Comparativa.md (referencia para consistencia)
   ```

2. Usa Chat sin copiar/pegar:
   ```
   "En 06-Herramientas-Por-Tarea.md, sección 1.3 (Cursor),
   verifica que los números de ahorro de tiempo sean consistentes
   con la tabla en 04-Ahorro-Tiempo.md"
   ```

3. Cursor:
   - Lee ambos archivos automáticamente
   - Compara números
   - Te indica inconsistencias o las corrige

4. Sin scroll:
   - Usa Outline para navegar dentro del archivo
   - Usa `Ctrl+Shift+O` para saltar a secciones
   - Mantén split view si necesitas ver dos secciones

---

## Recomendación final

Sí, divide el documento. Estructura propuesta:

```
✅ Dividir en 8-12 archivos por sección principal
✅ Crear un 00-INDEX.md con navegación
✅ Mantener cada archivo entre 200-500 líneas
✅ Usar nombres descriptivos con números para orden
```

Beneficios:
- ✅ No más copiar/pegar
- ✅ Sin scroll constante
- ✅ Chat más eficiente
- ✅ Navegación más rápida
- ✅ Mejor organización del proyecto

¿Quieres que genere los comandos específicos para dividir tu documento actual en esta estructura?
