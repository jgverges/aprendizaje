
---

## 📊 RESUM: PARTICIPACIÓ DE CURSOR

| Fase | Tasques | Participació Cursor | Eina Externa |
|------|---------|---------------------|--------------|
| **1. Cerca** | Buscar papers, extreure dades | ❌ 0% | Elicit, Research Rabbit |
| **2. Anàlisi** | Resumir, identificar gaps | ✅ 100% | - |
| **3. Dades** | Anàlisis estadístics | ✅ 100% | - |
| **4. Redacció** | Escriure paper | ✅ 80% | Elicit (només resultats) |
| **5. Bibliografia** | Cites i referències | ❌ 0% | Zotero |
| **6. Revisió** | Corregir i traduir | ✅ 50% | Trinka (correcció) |
| **7. Presentació** | Crear slides | ⚠️ 30% | Gamma, BioRender |

**Participació total de Cursor: ~60% del flux**

---

## 💻 ON PARTICIPA CURSOR EN EL FLUX

### ✅ **CURSOR ÉS EXCEL·LENT PER A:**

1. **Anàlisi de dades** ⭐⭐⭐⭐⭐
   - Generar codi Python/R
   - Anàlisis estadístics
   - Visualitzacions científiques
   - **Participa en:** Fase 3 completa

2. **Redacció científica** ⭐⭐⭐⭐
   - Introducció, metodologia, discussió
   - Estructura de papers
   - Millora de redacció
   - **Participa en:** Fase 4 (excepte resultats)

3. **Síntesi i anàlisi** ⭐⭐⭐⭐
   - Resumir papers
   - Identificar gaps
   - Generar hipòtesis
   - **Participa en:** Fase 2 completa

4. **Traducció** ⭐⭐⭐⭐
   - Traduir papers
   - Traduir termes mèdics
   - **Participa en:** Fase 6

### ⚠️ **CURSOR NO ÉS ADEQUAT PER A:**

1. **Cerca de papers** ❌
   - No accedeix a PubMed
   - **Utilitzar:** Elicit (web)

2. **Extracció de dades** ❌
   - Pot inventar dades
   - **Utilitzar:** Elicit (web)

3. **Redactar resultats** ❌
   - Pot inventar dades
   - **Utilitzar:** Elicit o redacció manual

4. **Gestió de bibliografia** ❌
   - No té aquesta funció
   - **Utilitzar:** Zotero (desktop)

5. **Generar cites** ❌
   - Inventa cites falses
   - **Utilitzar:** Zotero (desktop)

---

## ⚠️ REGLES D'OR

1. **MAI utilitzar Cursor/ChatGPT per a:**
   - Generar cites bibliogràfiques
   - Redactar resultats sense dades reals
   - Cerca en bases de dades

2. **SEMPRE verificar:**
   - Dades generades per IA
   - Cites i referències
   - Informació mèdica específica

3. **CURSOR és millor per a:**
   - Codi i anàlisi
   - Redacció general
   - Síntesi d'informació

4. **EINES especialitzades són millors per a:**
   - Cerca de papers (Elicit)
   - Bibliografia (Zotero)
   - Correcció acadèmica (Trinka)

---

## 🔒 SEGURETAT I CONFIDENCIALITAT EN CURSOR

### ⚠️ Consideració crítica: protecció de dades de recerca

En usar Cursor per a investigació biomèdica, especialment amb dades de salut sensibles com VIH, és **fonamental** entendre com es gestionen les teves dades i protegir la confidencialitat de la teva investigació.


---

### 🛡️ Riscos específics amb Cursor i com prevenirlos

| Risc | Com passa a Cursor | Impacte | Prevenció |
|------|-------------------|---------|-----------|
| **Fuga de dades de pacients** | Cursor llegeix fitxers amb dades identificables i les inclou en context | Violació legal, pèrdua de privacitat, sancions | Utilitzar `.cursorignore`, NO obrir fitxers sensibles amb Cursor |
| **Fuga de resultats exclusius** | Mode Agent pot processar i modificar fitxers amb dades experimentals | Pèrdua d'avantatge competitiu, risc de plagiat | NO utilitzar Agent amb dades no publicades |
| **Accés no autoritzat al context** | Cursor pot tenir accés a múltiples fitxers del projecte simultàniament | Exposició de dades confidencials | Configurar `.cursorignore`, limitar context |
| **Emmagatzematge en historial** | Les converses amb dades sensibles queden al historial | Possibilitat de recuperació de dades | Esborrar historial regularment |
| **Enviament a servidors externs** | Models online envien dades a servidors de Claude/OpenAI | Dades poden ser processades externament | Utilitzar models locals quan sigui possible |
| **Codi generat amb dades sensibles** | Cursor pot generar codi que conté dades reals | Dades sensibles en codi exposat | Generar codi amb dades d'exemple, revisar abans d'executar |


### Com funciona Cursor amb les teves dades?

#### Configuració de Cursor i privacitat

**Cursor pot funcionar de dues maneres:**

1. **Mode online (per defecte):**
   - Les teves consultes es poden enviar a servidors externs (Claude, GPT-4)
   - Les dades poden ser processades en la nube
   - Existeix risc de que les dades siguin emmagatzemades temporalment

2. **Mode local (configuració específica):**
   - Alguns models poden funcionar localment
   - Menor risc de fuga de dades
   - Requereix configuració avançada

**Important:** Cursor pot tenir accés a:
- Contingut de fitxers oberts
- Historial de converses
- Codi i dades que edites mentre treballes
- Context del projecte sencer

---

### 🚨 Dades que MAI has de posar a Cursor

#### Categories de dades sensibles a protegir

| Tipus de dada | Exemples | Risc si es filtra | Utilitzar Cursor? |
|---------------|----------|-------------------|-------------------|
| **Dades de pacients identificables** | Noms, DNI, adreces, historial clínic complet | Violació GDPR, pèrdua de privacitat | ❌ MAI |
| **Resultats no publicats crítics** | Dades experimentals exclusives, descobriments patentables | Pèrdua d'avantatge competitiu, risc de plagiat | ⚠️ Només versions locals/privades |
| **Informació de protocols patentats** | Mètodes exclusius, processos propietaris | Pèrdua de propietat intel·lectual | ⚠️ Només versions locals/privades |
| **Informació confidencial de col·laboracions** | Dades compartides sota acords de confidencialitat | Violació d'acords legals | ❌ MAI |
| **Dades d'assajos clínics en curs** | Resultats preliminars no publicats | Risc regulatori, pèrdua d'integritat de l'estudi | ❌ MAI |
| **Codi d'identificació de mostres** | Enllaços entre codis i pacients | Re-identificació de pacients | ❌ MAI |

---

### 🔐 Millors pràctiques de seguretat amb Cursor

#### 1. Configuració de privacitat recomanada

**Per treballar amb dades sensibles en Cursor:**

1. **Revisa la configuració de privacitat:**
   - Vés a Settings → Privacy
   - Desactiva "Share usage data" si està disponible
   - Desactiva "Telemetry" si és possible
   - Revisa les opcions de "Data collection"

2. **Configuració del model:**
   - Si és possible, utilitza models locals
   - Evita enviar dades a servidors externs
   - Considera versions empresarials amb major privacitat

3. **Configuració del context:**
   - Limita l'accés de Cursor a fitxers sensibles
   - Utilitza `.cursorignore` per excloure directoris sensibles
   - Configura regles que evitin que Cursor llegeixi certs fitxers

---

#### 2. Estratègies segures segons el mode de Cursor

**Mode Ask (només lectura):**

✅ **Relativament segur per a:**
- Fer preguntes sobre codi o textos ja publicats
- Consultar sobre literatura publicada
- Demanar explicacions generals

⚠️ **Precaució:**
- NO incloguis dades sensibles en les preguntes
- Cursor pot tenir accés al context de fitxers oberts
- Les converses es poden emmagatzemar

**Recomanació:** Utilitza mode Ask per a consultes generals, però NO per a dades experimentals exclusives.

---

**Mode Agent (edició automàtica):**

⚠️ **Major risc:**
- Agent pot llegir múltiples fitxers del projecte
- Pot editar i processar dades sensibles
- Pot executar codi que processa dades

❌ **NO utilitzar Agent per a:**
- Fitxers amb dades de pacients
- Resultats experimentals no publicats
- Informació confidencial

✅ **Utilitzar Agent només per a:**
- Codi general
- Estructuració de documents amb informació publicada
- Tasques que no involucrin dades sensibles

---

**Mode Composer/Plan:**

⚠️ **Similar a Agent:**
- Pot accedir a múltiples fitxers
- Pot planificar canvis en fitxers amb dades sensibles

❌ **Precaució extrema:**
- NO utilitzar per a projectes amb dades de pacients
- Verificar quins fitxers poden ser accessibles

---

#### 3. Protecció de dades segons la tasca amb Cursor

**Per a anàlisi de dades (Python/R):**

⚠️ **Precaució crítica:**
- Cursor pot generar codi que processa dades sensibles
- El codi generat pot estar en el historial de converses
- Les dades poden quedar exposades en consultes

**Recomanacions:**
- ✅ Utilitza dades anonimitzades per a provar el codi
- ✅ Genera el codi amb dades d'exemple
- ❌ NO utilitzis dades reals de pacients en el codi generat
- ✅ Revisa el codi generat abans d'executar-lo amb dades reals

**Exemple segur:**
```
✅ "Genera codi Python per analitzar dades de càrrega viral
usant dades d'exemple (sense identificadors)"
```

```
❌ "Analitza aquestes dades reals de pacients VIH: [llista de dades]"
```

---

**Per a redacció de papers:**

✅ **Relativament segur per a:**
- Estructurar papers amb informació general
- Redactar introduccions basades en literatura publicada
- Millorar redacció de textos ja escrits
- Generar esborranys sense dades específiques

⚠️ **Precaució:**
- NO incloguis dades experimentals exclusives en els prompts
- NO utilitzis resultats no publicats per a generar textos
- Utilitza només informació ja publicada com a referència

**Flux segur:**
1. Cursor genera estructura general (sense dades específiques)
2. Tu afegeixes manualment les dades experimentals reals
3. Cursor millora la redacció del text final (sense canviar dades)

---

**Per a síntesi i anàlisi:**

✅ **Relativament segur per a:**
- Resumir papers ja publicats
- Analitzar literatura pública
- Generar hipòtesis basades en informació publicada

❌ **NO utilitzar per a:**
- Analitzar resultats experimentals exclusius
- Sintetitzar dades no publicades
- Generar conclusions de dades sensibles

---

**Per a traducció:**

⚠️ **Precaució:**
- Cursor pot enviar text a servidors de traducció
- El text traduït pot ser emmagatzemat temporalment

**Recomanacions:**
- ✅ Utilitza només text ja publicat o completament anonimitzat
- ❌ NO tradueixis dades de pacients identificables
- ❌ NO tradueixis resultats exclusius no publicats
- ✅ Considera DeepL per a traduccions sensibles (versió empresarial)

---

#### 4. Configuració de `.cursorignore`

**Crea un fitxer `.cursorignore` per protegir directoris sensibles:**

```
# Dades sensibles - MAI incloure
**/pacients/**
**/dades_brutes/**
**/resultats_experimentals/**
**/*_identificable.*
**/*_personal.*

# Excloure bases de dades
*.db
*.sqlite
*.csv  # Si contenen dades sensibles

# Excloure configuracions amb credencials
**/.env
**/config/credentials.*
```

Això evitarà que Cursor accedeixi accidentalment a aquests fitxers.

---

#### 5. Neteja del historial i gestió de converses

**Bones pràctiques:**

1. **Esborra converses que continguin informació sensible:**
   - Revisa regularment l'historial de converses
   - Esborra qualsevol conversa amb dades sensibles

2. **Tanca sessions després de treballar amb dades confidencials:**
   - Tanca i reobre Cursor
   - Limita la retenció de context

3. **Configuració de retenció de dades:**
   - Revisa quant temps Cursor guarda les teves converses
   - Configura opcions de privacitat màximes

---

### ✅ Flux de treball segur amb Cursor per a recerca biomèdica

#### Per a redactar papers amb dades sensibles

**Flux SEGUR:**

1. **Preparació:**
   - Crea una versió anonimitzada del teu projecte
   - Utilitza `.cursorignore` per excloure fitxers sensibles
   - Configura privacitat màxima a Cursor

2. **Estructuració general amb Cursor:**
   - Utilitza mode Ask per a consultes generals
   - Demana estructuració sense dades específiques
   - Utilitza només literatura publicada com a referència

3. **Inserció manual de dades reals:**
   - Després d'usar Cursor per a l'estructura
   - Insereix dades reals directament tu
   - Verifica que no queden dades sensibles en historial

4. **Millora final:**
   - Utilitza Cursor per millorar redacció (sense canviar dades)
   - Revisa canvis abans d'acceptar
   - Neteja historial després

---

#### Per a anàlisi de dades amb Cursor

**Flux SEGUR:**

1. **Genera codi amb dades d'exemple:**
   - Demana a Cursor codi Python/R amb dades sintètiques
   - Verifica que el codi no conté dades reals
   - Prova el codi amb dades d'exemple primer

2. **Aplica codi a dades reals fora de Cursor:**
   - Executa el codi generat en el teu entorn segur
   - No incloguis resultats reals en noves consultes a Cursor
   - Mantén dades reals separades de Cursor

3. **Visualització:**
   - Genera codi de visualització amb dades d'exemple
   - Aplica a dades reals després
   - Assegura't que les gràfiques no exposin identificadors

---

### 📋 Checklist de seguretat abans d'usar Cursor

Abans d'utilitzar Cursor amb qualsevol dada, verifica:

- [ ] ¿Les dades contenen informació identificable de pacients? → **NO utilitzar Cursor**
- [ ] ¿He creat un fitxer `.cursorignore` per excloure directoris sensibles? → **Fes-ho sempre**
- [ ] ¿He revisat la configuració de privacitat de Cursor? → **Configura privacitat màxima**
- [ ] ¿He desactivat "Share usage data" i telemetria? → **Si és possible**
- [ ] ¿Utilitzo models locals o només online? → **Considera models locals per a dades sensibles**
- [ ] ¿El mode que utilitzo (Ask/Agent/Composer) és adequat? → **Evita Agent amb dades sensibles**
- [ ] ¿He exclòs fitxers sensibles del context? → **Utilitza `.cursorignore`**
- [ ] ¿He eliminat tots els identificadors possibles? → **Verifica múltiples vegades**
- [ ] ¿Planejo esborrar l'historial després? → **Neteja regularment**
- [ ] ¿Els resultats experimentals ja estan publicats? → **Si no, NO utilitzar Cursor**

---

### 🎯 Recomanació final: principi de precaució amb Cursor

**Regla fonamental:**

> **Si tens dubtes sobre si una dada és sensible, tracta com si fos sensible i NO la posis a Cursor.**

**Per a investigació biomèdica amb dades de salut:**

1. **MAI obrir fitxers amb dades de pacients identificables** a Cursor
2. **Utilitza Cursor només per a tasques generals** (estructuració, redacció amb literatura publicada)
3. **Mantén dades experimentals exclusives fora de Cursor** fins que estiguin publicades
4. **Configura `.cursorignore`** per protegir directoris sensibles
5. **Revisa configuració de privacitat** de Cursor abans de treballar amb dades sensibles
6. **Utilitza mode Ask** en lloc de Agent per a consultes sobre dades sensibles
7. **Neteja l'historial regularment** després de treballar amb dades confidencials
8. **Genera codi amb dades d'exemple** i aplica a dades reals després

**La seguretat de les dades de recerca i la privacitat dels pacients sempre ha de ser la prioritat sobre la comoditat d'utilitzar Cursor.**

---

**Recomanació:** Si treballes freqüentment amb dades de salut sensibles, considera versions empresarials de Cursor amb major privacitat o alternatives amb processament completament local.

---
