#  auditoría para detectar búsqueda de empleo usando Gemini Pro

Voy a darte **formas concretas y realistas**, como se hace en auditorías internas, **no teoría**.

---

# OBJETIVO DE ESTA FASE

Detectar **indicios** (no “pruebas judiciales”) de que una persona **usa la IA corporativa para buscar trabajo**.

👉 Esto **no va de una frase**, va de **patrones de uso**.

---

## 1️⃣ Auditoría directa de prompts (la base)

### Qué necesitas

* Acceso a **logs de Gemini Pro (Workspace / Enterprise)**
* Usuario, fecha, prompt, longitud, idioma

Sin esto → no hay auditoría.

---

### Qué buscar (ejemplos REALES)

No busques “quiero irme”.

Busca **familias de prompts**:

#### A) CV / Resume

Ejemplos:

* “Improve my CV for a senior role”
* “Rewrite my resume”
* “Make my experience sound stronger”
* “Quantify achievements in my CV”
* “Adapt my CV to this job description”

🔍 Indicadores:

* resume, CV, curriculum
* experience, achievements
* job description

---

#### B) Entrevistas

* “Interview questions for React developer”
* “Behavioural interview questions”
* “How to answer why you want to change jobs”
* “Tell me about your weaknesses interview”

🔍 Indicadores:

* interview
* recruiter
* HR
* behavioural
* hiring manager

---

#### C) LinkedIn / marca personal

* “Optimize my LinkedIn profile”
* “Write a LinkedIn headline”
* “About me for LinkedIn”
* “Open to work summary”

🔍 Indicadores:

* LinkedIn
* headline
* profile
* summary

---

#### D) Mercado laboral / salario

* “What salary should I ask”
* “Market salary for senior frontend”
* “How to negotiate salary”
* “Notice period best practices”

🔍 Indicadores:

* salary
* compensation
* negotiate
* notice period
* offer

---

## 2️⃣ El criterio CLAVE: patrón, no evento

📌 **Regla de auditoría típica**:

| Condición                | Interpretación    |
| ------------------------ | ----------------- |
| 1 prompt aislado         | Ruido             |
| 2–3 prompts relacionados | Señal débil       |
| 4+ prompts en 30 días    | **Indicio claro** |

Ejemplo real:

* Día 3: “Improve my CV”
* Día 10: “Interview questions”
* Día 18: “Salary negotiation tips”

➡️ **No es casualidad**

---

## 3️⃣ Auditoría temporal (muy efectiva)

Cruza prompts con **cuándo** se hacen.

### Señales claras:

* Uso:

  * **fuera del horario laboral**
  * en pausas largas
  * cerca de festivos
* Uso concentrado en:

  * tardes
  * viernes

Ejemplo:

> CV + entrevistas + viernes 18:30
> → señal fuerte

---

## 4️⃣ Correlación básica (sin invadir privacidad)

Sin espiar pantalla.

Cruza:

* Uso de Gemini
* Con:

  * picos de LinkedIn (proxy / firewall)
  * descarga de PDFs personales
  * uso de portales de empleo

No necesitas ver contenido, solo **categoría de tráfico**.

---

## 5️⃣ Lenguaje usado (detalle muy útil)

Indicadores:

* Uso de **primera persona**

  * “my experience”
  * “my role”
  * “my achievements”
* Tono personal, no profesional

Ejemplo:

> “Rewrite my experience as a frontend developer with 5 years”

Eso **no es formación**, es preparación.

---

## 6️⃣ Lo que NO debes hacer (para no falsear)

❌ Marcar como riesgo:

* “How to write better documentation”
* “Explain STAR interview method” (formación general)
* “How to improve communication skills”

➡️ Eso es **desarrollo profesional**, no salida.

---

## 7️⃣ Resultado correcto de la auditoría

Nunca:

> “esta persona quiere irse”

Siempre:

> “uso reiterado de IA corporativa para actividades **no relacionadas con el proyecto** y **orientadas al mercado laboral externo**”

Eso es defendible legalmente.

---

## 8️⃣ Ejemplo de informe de auditoría (realista)

> Durante el periodo marzo–abril, el usuario X realizó múltiples consultas a Gemini Pro relacionadas con optimización de CV, preparación de entrevistas técnicas y negociación salarial.
> El patrón temporal y temático indica un uso de la IA corporativa para fines personales ajenos al proyecto asignado.

---

Si quieres, en el siguiente paso puedo:

* Convertir esto en **reglas automáticas**
* Definir **umbrales de alerta**
* Ayudarte a redactar la **política interna** que lo respalde

👉 Dime el siguiente paso que quieres dar.
