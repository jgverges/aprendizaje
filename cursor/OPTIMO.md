# Configuración Máxima Calidad Cursor

## Modelo
Claude Sonnet 4

## Configuración
- Agent Model: Claude Sonnet 4
- Auto-context: OFF
- Inline Diff: ON
- Edit Limit: 100-200 líneas

## Estrategia
- ∞ Ask: 80% (planificar, aprender)
- Ctrl+K: 15% (cambios pequeños)
- ∞ Agent: 5% (solo complejo/múltiples archivos)

## Con 20€/mes
- Fast requests: ~500/mes
- Slow requests: ~250/mes
- Líneas edición: ~20,000/mes


# Costo de Preguntas en Modo Chat (∞ Ask) - Cursor

| Modelo | Costo por Pregunta | Relativo | Notas |
|--------|-------------------|----------|-------|
| **Claude Haiku** | 1 request | Más barato | Modelo económico |
| **Claude Sonnet 3.5** | 1 request | Barato | Balance calidad/precio |
| **Claude Sonnet 4** | 1 request | Barato | Alta calidad |
| **GPT-4o** | 1 request | Barato | Alternativa rápida |
| **Claude Opus 4** | 5 requests | 5x más caro | Máxima calidad, más costoso |
| **Auto** | Variable (1-5) | Variable | Selecciona modelo automáticamente |

## Notas Importantes

- **1 request** = 1 pregunta en modo chat normal
- **Opus 4** es 5 veces más caro que Sonnet/GPT
- **Auto** puede elegir cualquier modelo, costo variable según selección
- Todos los modelos consumen del mismo límite de **Fast requests** (~500/mes en plan Pro)
