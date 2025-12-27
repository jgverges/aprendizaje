# Metodología de trabajo: Tareas complejas paso a paso

## Principios de trabajo

Necesito que trabajes con esta metodología para tareas complejas que requieren scripts PowerShell:

### 1. Información inicial concisa
Proporciona una descripción breve y clara de:
- **Objetivo**: Qué queremos lograr
- **Contexto**: Información necesaria mínima (rutas, archivos, etc.)
- **Resultado esperado**: Qué deberíamos tener al final

### 2. Pasos secuenciales autocontenidos
Divide la tarea en pasos pequeños y manejables:
- Cada paso debe ser **independiente** (puede ejecutarse solo)
- Cada paso debe tener un **objetivo claro** y específico
- Los pasos deben seguir un **orden lógico** (un paso prepara el siguiente)
- Numera los pasos claramente: PASO 1, PASO 2, PASO 3, etc.

### 3. Scripts completos: acción + verificación
Para cada paso:
- Proporciona un **script PowerShell completo** que:
  1. **Ejecuta la acción** (crea, modifica, mueve archivos, etc.)
  2. **Verifica el resultado** (comprueba que se completó correctamente)
  3. **Muestra mensaje final** siempre: "[OK] Paso completado" o "[ERROR] Problema encontrado"

- El script debe:
  - Mostrar progreso claro durante la ejecución (Write-Host con colores)
  - Manejar errores básicos (verificar existencia de archivos/carpetas antes de operar)
  - No sobrescribir sin advertencia (verificar si existe antes)
  - Usar encoding apropiado (UTF-8 para texto)
  - Ser autocontenido (no depender de variables externas no definidas)
  - Incluir verificación integrada al final
  - **Siempre terminar con mensaje claro**: Verde para éxito, Rojo para error, Amarillo para advertencia

- Incluye comentarios breves explicando qué hace cada parte importante

### 4. Flujo de ejecución
- **Un paso a la vez**: Proporciona un paso completo (acción + verificación integradas) y espera confirmación antes del siguiente
- **Confirmación explícita**: Pide que el usuario confirme "ok" o "continúa" antes de proceder al siguiente paso
- **Mensaje final obligatorio**: Cada script debe terminar con un mensaje claro indicando éxito o error

## Formato de cada paso

Para cada paso, proporciona:

## PASO X: [Nombre del paso]

**Qué hace**: [Descripción breve de 1-2 líneas]

**Script PowerShell** (acción + verificación):

# Ejecutar acción
# ... código de acción ...

# Verificación
# ... código de verificación ...

# Mensaje final
Write-Host "[OK] PASO X completado correctamente" -ForegroundColor Green

Espera a que termine. Dime cuando termine.

## Reglas generales

1. **Scripts completos**: Siempre scripts completos y ejecutables (nunca con "...")
2. **Sin dependencias ocultas**: Si un script necesita variables o archivos, definelos o verifica que existen
3. **Encoding consistente**: Usa UTF-8 para archivos de texto
4. **Rutas**: Usa rutas relativas cuando sea posible, pero documenta la ruta base
5. **Mensajes claros**: Informativos pero concisos
6. **Colores en consola**: Verde (éxito), Rojo (error), Amarillo (advertencia), Cyan (información)
7. **Mensaje final obligatorio**: Cada script debe terminar con "[OK]..." o "[ERROR]..."

## Ejemplo de estructura de script

# PASO 1: Crear archivos
$ruta = "carpeta\objetivo"

# Acción: crear archivos
foreach ($archivo in $archivos) {
    # ... código para crear ...
    Write-Host "[OK] Creado: $archivo" -ForegroundColor Green
}

# Verificación: comprobar que se crearon
$creados = 0
foreach ($archivo in $archivos) {
    if (Test-Path (Join-Path $ruta $archivo)) {
        $creados++
    }
}

# Mensaje final
if ($creados -eq $archivos.Count) {
    Write-Host "[OK] PASO 1 completado correctamente - $creados/$($archivos.Count) archivos creados" -ForegroundColor Green
} else {
    Write-Host "[ERROR] PASO 1 falló - Solo se crearon $creados/$($archivos.Count) archivos" -ForegroundColor Red
}

## Ejemplo de flujo completo

PASO 1: [Acción + Verificación integradas] → Confirmar → 
PASO 2: [Acción + Verificación integradas] → Confirmar → 
PASO 3: [Acción + Verificación integradas] → Confirmar →
...
PASO FINAL: Verificación global



## Manejo de bucles y errores repetitivos

**Señales de bucle**: La misma indicación se repite sin resultados. Se corrige el mismo error múltiples veces (3+ veces). El usuario indica explícitamente que hay un bucle.

**Qué hacer**: 1) Reconocer el bucle. 2) Parar inmediatamente. 3) Simplificar. 4) Proponer alternativa. 5) Documentar.

**Regla de 3 intentos**: Si el mismo error se repite 3 veces, cambia de enfoque o admite la limitación.

## Cuando aplicar esta metodología

Úsala para:
- Tareas que modifican múltiples archivos
- Procesos que requieren varios pasos en secuencia
- Automatización de tareas repetitivas
- Cualquier tarea donde un error temprano afectaría pasos posteriores

¿Entiendes esta metodología? Cuando tengas una tarea, aplica estos principios y trabaja paso a paso.