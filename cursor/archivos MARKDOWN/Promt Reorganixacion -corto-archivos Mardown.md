
## Prompt genérico para reorganización de archivos Markdown


Necesito reorganizar un archivo Markdown grande en múltiples archivos más pequeños y manejables. Sigue este flujo de trabajo paso a paso:

## INFORMACIÓN DEL PROYECTO

**Ruta base**: [ESPECIFICA LA RUTA, ej: "proyecto\documentacion"]

**Archivo principal a dividir**: [NOMBRE DEL ARCHIVO.md, ej: "guia-completa.md"]

**Estructura de archivos objetivo**: [LISTA LOS ARCHIVOS NUMERADOS QUE QUIERES CREAR, ej:
- 00-INDEX.md
- 10-Introduccion.md
- 20-Conceptos.md
- 30-Ejemplos.md
- 40-Conclusion.md
]

**Rangos de líneas por sección**: [ESPECIFICA PARA CADA ARCHIVO EL RANGO DE LÍNEAS DEL ARCHIVO ORIGINAL, ej:
- 10-Introduccion.md: líneas 3-25
- 20-Conceptos.md: líneas 27-120
- etc.
IMPORTANTE: Los índices son 0-based, línea 1 = índice 0]

## FLUJO DE TRABAJO A SEGUIR

Trabaja **paso a paso**, ejecutando cada script y su verificación antes de continuar:

### PASO 1: Análisis inicial
Crea un script PowerShell que:
- Liste todos los archivos `.md` en la carpeta objetivo
- Cuente líneas y calcule tamaño de cada archivo
- Exporte resultados a `analisis-archivos.csv`
- Muestra progreso en consola

### PASO 1.5: Verificación del análisis
Crea un script que verifique que `analisis-archivos.csv` existe y muestra su contenido.

### PASO 2, 3, 4: Crear archivos numerados (en grupos)
Crea scripts que generen los archivos numerados en grupos de 3-4 archivos:
- Cada archivo debe tener un título básico y placeholder
- Verificar si ya existen antes de crear (no sobrescribir)
- Mostrar progreso por archivo

### PASO 4.5: Verificación de estructura
Script que verifique que todos los archivos numerados esperados existen.

### PASO 5: Dividir contenido del archivo principal
Crea un script que:
- Lea el archivo principal completo
- Extraiga secciones según los rangos de líneas especificados
- Añada títulos apropiados a cada sección
- Añada navegación entre archivos (← Anterior | Índice | Siguiente →)
- Guarde cada sección en su archivo correspondiente
- Use encoding UTF-8

### PASO 6: Crear índice completo
Genera el contenido del `00-INDEX.md` con:
- Título principal
- Índice navegable con enlaces a todas las secciones
- Descripción breve de cada sección
- Sección "Inicio rápido" con recomendaciones
- Estructura en árbol del documento

### PASO 7: Verificación final
Script que verifique:
- Que todos los archivos existen
- Que cada archivo tiene más de 5 líneas (contenido real)
- Que muestra tamaño de cada archivo
- Que reporta problemas encontrados
- Resumen final del estado

## REQUISITOS TÉCNICOS

1. **Encoding**: Siempre usar UTF-8 para preservar caracteres especiales
2. **Rutas**: Usar rutas relativas según la ruta base especificada
3. **Navegación**: Cada archivo debe tener enlaces Anterior/Índice/Siguiente
4. **Verificación**: Cada paso importante debe tener su script de verificación
5. **Progreso**: Todos los scripts deben mostrar progreso claro en consola

## METODOLOGÍA

- **Ejecutar un paso a la vez**: No pasar al siguiente hasta verificar el anterior
- **Mostrar scripts completos**: Proporciona el script completo para cada paso
- **Verificar antes de continuar**: Ejecutar script de verificación antes del siguiente paso
- **Reportar problemas**: Si algo falla, identificar el problema antes de continuar

## SALIDA ESPERADA

Para cada paso:
1. Proporciona el script PowerShell completo
2. Explica qué hace el script
3. Proporciona el script de verificación correspondiente
4. Espera confirmación antes de continuar al siguiente paso

Al final, todos los archivos numerados deben:
- Tener contenido del archivo original dividido
- Tener navegación entre archivos
- Estar correctamente numerados y ordenados
- Tener un índice navegable completo

¿Entiendes el flujo? Empieza con el PASO 1 y dime cuando termines para continuar.
```

---

## Versión simplificada (prompt corto)

Si prefieres una versión más corta:

```
Necesito dividir [ARCHIVO.md] en [CARPETA] en múltiples archivos numerados más pequeños.

Archivos objetivo: [LISTA]
Rangos de líneas: [ESPECIFICAR]

Sigue este flujo paso a paso con scripts PowerShell + verificación:
1. Análisis inicial → verificación
2. Crear archivos numerados (en grupos) → verificación
3. Dividir contenido del archivo principal
4. Crear índice navegable (00-INDEX.md)
5. Verificación final

Requisitos:
- Encoding UTF-8
- Navegación entre archivos (← Anterior | Índice | Siguiente →)
- Scripts de verificación después de cada paso importante
- Un paso a la vez, esperando confirmación

Empieza con PASO 1.


---


