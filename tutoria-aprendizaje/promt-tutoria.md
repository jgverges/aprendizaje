```bash
#!/bin/bash

# Tutor de Aprendizaje: React Avanzado con Criterios Profesionales
# Genera toda la estructura y documentación en Markdown
# Ejecutar desde la raíz del proyecto

set -e

mkdir -p tutor/sesiones
mkdir -p tutor/revisiones

cat > README.md << 'EOF'
# Tutor de Aprendizaje — React Avanzado con Criterios Profesionales

Este repositorio contiene un sistema de aprendizaje guiado orientado a criterios profesionales
para el desarrollo de aplicaciones React de nivel avanzado.

El enfoque no es aprender “features”, sino:
- tomar buenas decisiones técnicas
- escribir código mantenible
- entender responsabilidades y trade-offs
- pensar como un desarrollador senior

Todo el contenido está organizado en sesiones progresivas con criterios de evaluación claros.
EOF

cat > tutor/system_prompt.md << 'EOF'
# Rol del Tutor de Aprendizaje

Eres un tutor experto en React, arquitectura frontend y pedagogía técnica.

OBJETIVO:
Guiar al estudiante hacia un dominio profesional de React, priorizando:
- criterios de diseño
- separación de responsabilidades
- mantenibilidad
- testabilidad
- claridad conceptual

REGLAS:
- No avances de sesión si los criterios no se cumplen
- Corrige primero errores conceptuales antes que errores de código
- Exige explicaciones razonadas de cada decisión técnica
- Ajusta el ritmo según el progreso real
- Prioriza simplicidad sobre soluciones complejas

FORMATO DE CADA SESIÓN:
- Objetivo
- Explicación conceptual
- Ejercicio práctico
- Criterios de evaluación
EOF

cat > tutor/progreso.md << 'EOF'
# Progreso del Estudiante

Este archivo registra el progreso a lo largo del tiempo.

Campos a mantener:
- Sesión actual
- Sesiones completadas
- Conceptos dominados
- Errores recurrentes
- Observaciones del tutor

Actualizar este archivo tras cada sesión y revisión.
EOF

cat > tutor/curriculum.md << 'EOF'
# Curriculum — React Avanzado con Criterios Profesionales

Duración estimada: 6–8 semanas

## Bloques de aprendizaje

1. Fundamentos profesionales de React
2. Estado y responsabilidades
3. Arquitectura y escalabilidad
4. Performance y rendering
5. Testing con criterio
6. Diseño orientado a mantenimiento
7. Evaluación final y refactorización

No todos los bloques avanzan al mismo ritmo.
El progreso depende del cumplimiento de criterios, no del tiempo.
EOF

cat > tutor/sesiones/sesion-01.md << 'EOF'
# Sesión 1 — Qué significa “React profesional”

## Objetivo
Entender la diferencia entre usar React y diseñar aplicaciones React profesionales.

## Explicación
React no es solo componentes y hooks.
Un enfoque profesional implica:
- responsabilidades claras
- evitar lógica innecesaria en componentes
- entender el rol de cada capa

Se prioriza claridad sobre reutilización prematura.

## Ejercicio
Analiza un proyecto React existente y responde:
- Qué responsabilidades tiene cada componente
- Qué partes no deberían estar en React
- Qué decisiones parecen accidentales

## Criterios de evaluación
- Capacidad de identificar responsabilidades incorrectas
- Uso correcto del vocabulario técnico
- Razonamiento claro, no opiniones vagas
EOF

cat > tutor/sesiones/sesion-02.md << 'EOF'
# Sesión 2 — Estado: local, global y derivado

## Objetivo
Distinguir correctamente tipos de estado y cuándo usar cada uno.

## Explicación
El abuso de estado global es un error común.
El estado debe:
- vivir lo más cerca posible de donde se usa
- tener una única fuente de verdad
- ser derivado cuando sea posible

## Ejercicio
Diseña una pequeña aplicación y justifica:
- qué estado es local
- qué estado es global
- qué estado no debería existir

## Criterios de evaluación
- No hay estado redundante
- El estado global está justificado
- La explicación es más importante que el código
EOF

cat > tutor/sesiones/sesion-03.md << 'EOF'
# Sesión 3 — Arquitectura de componentes

## Objetivo
Separar correctamente lógica, UI y orquestación.

## Explicación
Componentes grandes no son el problema.
Componentes con múltiples responsabilidades sí lo son.

Se introducen conceptos como:
- contenedores
- componentes presentacionales
- composición frente a herencia

## Ejercicio
Refactoriza un componente complejo separando:
- lógica
- presentación
- dependencias externas

## Criterios de evaluación
- Cada pieza tiene una responsabilidad clara
- El componente final es más fácil de razonar
- No se introduce complejidad innecesaria
EOF

cat > tutor/sesiones/sesion-04.md << 'EOF'
# Sesión 4 — Performance con criterio

## Objetivo
Entender cuándo optimizar y cuándo no.

## Explicación
La mayoría de problemas de performance:
- no vienen de React
- vienen de mal diseño de estado

Se analizan:
- renders innecesarios
- memoización responsable
- medición antes de optimizar

## Ejercicio
Identifica un problema de renders y propón:
- una solución simple
- una solución compleja
Justifica por qué elegirías una u otra.

## Criterios de evaluación
- Uso correcto de métricas
- No optimizar por intuición
- Claridad en los trade-offs
EOF

cat > tutor/sesiones/sesion-05.md << 'EOF'
# Sesión 5 — Testing con mentalidad profesional

## Objetivo
Aprender qué testear y qué no.

## Explicación
Más tests no significa mejor calidad.
Un buen test:
- protege decisiones importantes
- no acopla la implementación
- facilita refactorizar

## Ejercicio
Propón una estrategia de testing para una app React:
- qué testearías
- qué NO testearías
- por qué

## Criterios de evaluación
- Tests alineados con el valor del negocio
- Evitar tests frágiles
- Argumentación sólida
EOF

cat > tutor/sesiones/sesion-06.md << 'EOF'
# Sesión 6 — Diseño para mantenimiento

## Objetivo
Escribir código que otros puedan mantener.

## Explicación
El código se lee más veces de las que se escribe.
Se valora:
- nombres claros
- estructuras predecibles
- decisiones explícitas

## Ejercicio
Refactoriza código existente priorizando legibilidad.
Explica cada cambio como si otro desarrollador lo fuera a mantener.

## Criterios de evaluación
- Mejora real de legibilidad
- Decisiones bien justificadas
- No sobreingeniería
EOF

cat > tutor/revisiones/revision-semanal.md << 'EOF'
# Revisión Semanal

Objetivo de la revisión:
- evaluar progreso real
- detectar errores conceptuales persistentes
- ajustar el plan si es necesario

Preguntas guía:
- Qué conceptos están claros
- Qué decisiones siguen siendo confusas
- Qué se debe reforzar antes de avanzar
EOF

echo "Tutor de React Avanzado generado correctamente."
```
