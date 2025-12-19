# listado de palabras clave y patrones específicos de prompts* para detectar uso de Gemini Pro orientado a entrevistas externas

Esto se puede usar para filtrar logs y generar reportes.

---

# 1️⃣ Palabras clave principales por categoría

### A) Entrevistas técnicas

```
interview, coding questions, technical interview, simulate interview, solve algorithm, data structure, leetcode, coding challenge, problem solving
```

### B) Preparación de respuestas

```
how to answer, explain my experience, describe project, my achievements, STAR method, behavioral questions, tell me about yourself
```

### C) CV / resume / perfil profesional

```
CV, resume, curriculum, rewrite resume, improve CV, LinkedIn profile, optimize LinkedIn, portfolio
```

### D) Mercado laboral y salario

```
salary, compensation, negotiate salary, offer, hiring manager, notice period, job description
```

---

# 2️⃣ Patrones de uso para auditoría

**Patrón = combinación de palabras clave + contexto temporal + frecuencia**

| Patrón                                                             | Interpretación                                          |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ≥3 prompts en 30 días conteniendo palabras de entrevistas técnicas | **Alerta blanda** – posible preparación externa         |
| ≥2 prompts + palabras de CV/resume/LinkedIn                        | **Alerta fuerte** – preparación para búsqueda de empleo |
| Uso fuera del horario laboral                                      | Aumenta riesgo de uso personal                          |
| Secuencia: simulate interview → solve coding → how to answer       | Indicador de preparación real para otra empresa         |
| Uso de primera persona (“I”, “my”, “me”)                           | Refuerza evidencia de uso personal                      |

---

# 3️⃣ Ejemplo de reglas automáticas

Si tus logs son en CSV o base de datos, podrías implementar algo así (pseudocódigo):

```python
for prompt in logs:
    score = 0
    if any(keyword in prompt.text.lower() for keyword in TECHNICAL_KEYWORDS):
        score += 2
    if any(keyword in prompt.text.lower() for keyword in CV_KEYWORDS):
        score += 2
    if any(keyword in prompt.text.lower() for keyword in BEHAVIORAL_KEYWORDS):
        score += 1
    if prompt.timestamp not in work_hours:
        score += 1
    if "I" in prompt.text or "my" in prompt.text:
        score += 1
    if score >= 4:
        alert(prompt.user, prompt.timestamp, score)
```

✅ **Interpretación:**

* Score ≥4 → indicio fuerte de búsqueda de empleo
* Score 2–3 → alerta blanda (revisión manual)

---

# 4️⃣ Buenas prácticas para auditoría defensible

1. **Documenta las palabras clave y reglas**

   * Definir antes de auditar evita acusaciones de arbitrariedad.
2. **No tomar prompts aislados como evidencia**

   * Solo patrones repetidos y consistentes.
3. **Cruza con contexto temporal**

   * Horario laboral vs fuera de horario.
4. **Mantén registro de alertas**

   * Para generar informes internos sin vulnerar privacidad.

---

# 5️⃣ Resumen práctico

1. Detectar prompts con palabras clave de **entrevistas técnicas, CV, LinkedIn, salario**.
2. Contabilizar frecuencia por usuario y período.
3. Analizar contexto (horario, tecnología usada, primera persona).
4. Generar **alertas automáticas** según score predefinido.
5. Revisar manualmente solo los casos con **patrón consistente**, para reportar.

---

Si quieres, puedo hacerte **una tabla completa lista para usar con logs reales**:

* Palabra clave
* Categoría
* Score asignado
* Comentario de auditoría

Esto se puede importar directamente para generar alertas automáticas.

¿Quieres que haga esa tabla?
