# Cómo evitar errores de parsing en scripts PowerShell

## Problema

Error: Token inesperado al usar -replace con texto complejo.

## Causa

PowerShell falla cuando usas -replace con texto que contiene comillas o caracteres especiales.

## Solución

NO uses -replace con texto complejo. Siempre usa here-strings para construir contenido completo.

## Template correcto

$contenido = @'
Contenido completo aquí
'@
[System.IO.File]::WriteAllText($ruta, $contenido, [System.Text.Encoding]::UTF8)

## Regla de oro

Si el texto contiene comillas o es complejo:
1. Construye el contenido completo con here-strings
2. NO uses -replace con texto complejo
3. Reconstruye el archivo completo