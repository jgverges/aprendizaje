
## 🧠 Idea clave

En Cursor puedes crear un **Tutor de Aprendizaje Persistente** combinando:

1. **Un prompt base bien diseñado** (el rol del tutor)
2. **Archivos de estado** (para el seguimiento en el tiempo)
3. **Ejercicios corregibles**
4. **Criterios claros de aprendizaje**
5. **Revisión periódica (feedback + ajustes del plan)**

Cursor funciona muy bien porque **lee y escribe archivos**, no solo responde en chat.

---

## 1️⃣ Crear el “rol” del tutor (prompt base)

Crea un archivo en tu proyecto, por ejemplo:

```
/tutor/system_prompt.md
```

Ejemplo de contenido (esto es CLAVE):

```md
Eres un tutor experto en pedagogía y en la materia que se te indique.
Tu objetivo es diseñar y mantener un plan de aprendizaje efectivo, progresivo y evaluable.

Reglas:
- Divide el aprendizaje en niveles y sesiones.
- Cada sesión debe tener:
  - Objetivo claro
  - Explicación breve
  - Ejercicio práctico
  - Criterios de evaluación
- Ajusta el plan según el progreso real del estudiante.
- No avances si los criterios de la sesión anterior no se cumplen.
- Da feedback claro y accionable.
- Mantén un seguimiento en el tiempo usando los archivos del proyecto.
```

👉 Este archivo actúa como el **“cerebro pedagógico”** del tutor.

---

## 2️⃣ Archivo de estado (seguimiento en el tiempo)

Crea otro archivo:

```
/tutor/progreso.json
```

Ejemplo inicial:

```json
{
  "materia": "React avanzado",
  "nivel_actual": "principiante",
  "sesion_actual": 1,
  "objetivos_completados": [],
  "errores_recurrentes": [],
  "ultima_revision": null
}
```

Cursor puede **leer y actualizar este archivo**, lo que permite seguimiento real, no “memoria falsa”.

---

## 3️⃣ Generar el plan de aprendizaje

En Cursor, selecciona el archivo `system_prompt.md` y escribe algo como:

> Diseña un plan de aprendizaje para la materia: **Arquitectura Frontend con React**
> Duración estimada: 8 semanas
> Perfil del estudiante: desarrollador frontend con experiencia real

El tutor debería devolver algo como:

* Roadmap por semanas
* Dependencias entre conceptos
* Qué NO aprender todavía (muy importante)

💡 Esto evita el típico error de aprender “de todo un poco”.

---

## 4️⃣ Sesiones con ejercicios reales

Cada sesión debería generar un archivo, por ejemplo:

```
/tutor/sesiones/sesion-01.md
```

Estructura ideal:

```md
## Sesión 1 – Estado y responsabilidades

### Objetivo
Entender la diferencia entre estado local, global y derivado.

### Explicación
(explicación corta, conceptual, no larga)

### Ejercicio
Implementa un ejemplo donde:
- El estado global no se use incorrectamente
- El componente sea testeable

### Criterios de evaluación
- No hay lógica de negocio en componentes
- El estado tiene una única fuente de verdad
- El código es legible
```

Tú haces el ejercicio → Cursor lo revisa → actualiza `progreso.json`.

---

## 5️⃣ Evaluación efectiva (esto es lo que lo hace “serio”)

Dile explícitamente al tutor que evalúe así:

* ❌ **No por “funciona / no funciona”**
* ✅ Por:

  * Claridad
  * Decisiones técnicas
  * Errores conceptuales
  * Capacidad de explicar lo que hiciste

Ejemplo de prompt:

> Evalúa mi solución según los criterios de la sesión.
> Señala errores conceptuales antes que errores de código.

Esto es aprendizaje real, no copiar/pegar.

---

## 6️⃣ Revisión semanal y adaptación

Una vez por semana:

```
/tutor/revisiones/semana-01.md
```

Prompt típico:

> Revisa mi progreso esta semana.
> Ajusta el plan si estoy:
>
> * avanzando demasiado rápido
> * arrastrando errores conceptuales

👉 Aquí es donde el tutor se vuelve **personalizado**.

---

## 7️⃣ Materias que funcionan MUY bien con este sistema

Por tu perfil (React, arquitectura, TypeScript), te iría de lujo en:

* Arquitectura Clean / Hexagonal
* React avanzado con criterios profesionales
* TypeScript profundo (no “tipos básicos”)
* Testing estratégico (qué testear y qué NO)
* Transición a Senior (decisiones, trade-offs)

---

## 🎯 Consejo honesto

Esto funciona **si tú marcas el ritmo**. Cursor no debe “tirar del carro”, sino:

* tú haces
* el tutor corrige
* el plan se adapta

Si quieres, en el siguiente mensaje puedo:

* diseñarte **el tutor completo ya preparado**
* o crear **un ejemplo concreto** (por ejemplo: “Tutor de Arquitectura React en 6 semanas”)

Dime qué materia te gustaría aprender primero y el nivel al que quieres llegar.
