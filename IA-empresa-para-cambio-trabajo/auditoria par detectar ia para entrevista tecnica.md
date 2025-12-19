# Sistema completo de auditoría para detectar tanto el uso indebido de IA para entrevistas tecnicas externas
---

# 1️⃣ Categorías de prompts para entrevistas técnicas

| Categoría                 | Palabras clave / patrones                                                           | Ejemplo de prompt                                                            |
| ------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Simulación de entrevista  | simulate interview, mock interview, ask me questions, senior developer              | “Simulate a senior React developer technical interview”                      |
| Preguntas de código       | coding questions, algorithm, data structure, problem solving, LeetCode              | “Write a function to reverse a linked list in JavaScript”                    |
| Preparación de respuestas | how to answer, STAR method, describe project, my achievements, behavioral questions | “Explain my previous project experience concisely for an external interview” |
| Preparación de mercado    | salary, negotiate salary, job description, hiring manager                           | “What salary should I ask for a senior frontend role?”                       |

---

# 2️⃣ Indicadores de uso indebido

### A) Frecuencia y patrón temporal

* ≥3 prompts relacionados con entrevistas técnicas en 30 días → **alerta blanda**
* ≥5 prompts relacionados → **alerta fuerte**
* Uso **fuera del horario laboral** refuerza la evidencia
* Secuencia lógica de prompts (simulación → práctica → mejora de respuestas) → indicio de preparación real para otra empresa

### B) Contexto semántico

* Uso de primera persona: I, my, me, achievements
* Tecnología específica del mercado laboral pero no del proyecto
* Mezcla de técnicas + comportamiento

### C) Comparación con baseline

* Longitud promedio de prompts habitual
* Temáticas habituales (proyecto actual)
* Desviaciones importantes → posible evasión

---

# 3️⃣ Detección de intentos de evasión

## Técnicas que el usuario podría usar

1. **Flooding**: prompts muy largos con texto irrelevante para diluir los prompts críticos
2. **Prompt sandwich**: intercalar prompts de entrevista dentro de texto técnico válido
3. **Reformulación**: evitar palabras clave directas (“interview” → “assessment”)
4. **Uso de un chat único muy largo** para sobrecargar el contexto

## Cómo detectarlas

| Técnica                 | Detección práctica                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| Flooding                | Alertar si longitud media de prompts ×3 respecto al baseline                                                 |
| Prompt sandwich         | Analizar segmentación semántica de cada prompt; flag si contiene fragmentos de entrevistas                   |
| Reformulación semántica | Usar clasificación semántica o embeddings para detectar intención de entrevista aunque no aparezcan keywords |
| Chat único largo        | Auditar prompts individuales, no el chat completo; cada prompt sigue registrado con timestamp                |

---

# 4️⃣ Score de riesgo para entrevistas

Pseudocódigo de scoring:

```python
score = 0

if prompt_contains_keywords(prompt, TECHNICAL_INTERVIEW):
    score += 2
if prompt_contains_keywords(prompt, PREPARE_RESPONSES):
    score += 2
if prompt_contains_keywords(prompt, MARKET_PREP):
    score += 1
if prompt_outside_work_hours(prompt):
    score += 1
if uses_first_person(prompt):
    score += 1
if user_deviation_from_baseline(prompt):
    score += 1

if score >= 4:
    alert_strong(user, prompt)
elif score >= 2:
    alert_weak(user, prompt)
```

✅ Esto permite **automatizar la detección** y **mitigar intentos de evasión**.

---

# 5️⃣ Reporte de auditoría ejemplo (centrado en entrevistas)

> Durante el período 1–30 de diciembre, el usuario X realizó 7 consultas en Gemini Pro relacionadas con simulación de entrevistas técnicas, preparación de respuestas personales y simulación de escenarios de entrevistas externas.
>
> * 4 prompts fueron fuera del horario laboral
> * 3 prompts contenían tecnología del mercado laboral no usada en el proyecto
> * Secuencia de prompts indica preparación organizada (simulate → coding → improve answer)
>
> **Interpretación:** patrón consistente de uso de la IA corporativa para preparación de entrevistas externas, con intento de evasión detectable mediante prompts largos y reformulados.

---

# 6️⃣ Buenas prácticas de auditoría defensible

1. **Documentar palabras clave y reglas** antes de auditar
2. **Auditar patrones, no prompts aislados**
3. **Cruzar con contexto temporal y tecnología usada**
4. **Registrar alerts automáticas y score**
5. **Revisar manualmente solo casos con score alto**

---

Si quieres, puedo hacer **una tabla lista para usar** con todas las **palabras clave, score asignado y flags de evasión**, lista para **automatizar la auditoría en Gemini Pro**. Esto sería un checklist definitivo para entrevistas técnicas.

¿Quieres que haga esa tabla?
