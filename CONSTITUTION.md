# Constitución del proyecto — Portafolio de Matías Polhwein

Versión: 1.0.0  
Fecha: 2026-10-07

## 1. Propósito y alcance

Este proyecto presenta la identidad profesional, experiencia, proyectos, estudios y habilidades de Matías Alexander Polhwein Lara. Toda evolución debe favorecer una presentación fiel, clara, accesible y mantenible.

Esta constitución establece principios duraderos para personas y agentes que trabajen en el repositorio. `AGENTS.md` define el procedimiento operativo y `MEMORY.md` conserva contexto verificado. Las especificaciones de cada tarea concretan el resultado esperado.

La constitución se deriva de los dos archivos proporcionados; no representa una auditoría del código actual del repositorio.

## 2. Autoridad y fuentes de verdad

Para decisiones e instrucciones del proyecto, el orden es:

1. Instrucciones explícitas actuales del propietario.
2. `CONSTITUTION.md`.
3. `AGENTS.md`.
4. Convenciones y decisiones verificables del repositorio.
5. `MEMORY.md`.
6. Suposiciones del agente.

Este orden rige las normas del proyecto. Para determinar hechos técnicos actuales, el código y la configuración verificables prevalecen sobre descripciones documentales desactualizadas. Una implementación existente no constituye por sí sola una decisión permanente.

Si hay un conflicto que no puede resolverse con las instrucciones y la evidencia disponibles, debe exponerse antes de realizar el cambio afectado. Las excepciones expresamente autorizadas para una tarea no modifican automáticamente esta constitución.

## 3. Principios fundamentales

### I. Veracidad del contenido profesional

- No inventar ni modificar datos biográficos, experiencia, proyectos, certificaciones, habilidades o enlaces personales sin instrucciones explícitas del propietario.
- No exagerar capacidades ni presentar proyectos o funcionalidades como terminados sin evidencia.
- Mantener el español como idioma principal. Una traducción o cambio de idioma requiere una solicitud que lo incluya.

### II. Simplicidad y alcance controlado

- Implementar el cambio mínimo suficiente para satisfacer el objetivo y sus criterios de aceptación.
- Reutilizar primero las herramientas, dependencias y patrones presentes.
- No introducir dependencias, abstracciones, refactorizaciones o cambios de arquitectura ajenos al alcance autorizado.
- Justificar las decisiones nuevas por una necesidad concreta; no por preferencias del agente ni por posibles necesidades futuras.

### III. Protección del trabajo existente

- Tratar los cambios locales ajenos como trabajo del propietario y preservarlos.
- Inspeccionar el estado y el diff de Git antes de modificar código; si un archivo ya está modificado, revisar su diff antes de editarlo.
- No sobrescribir, revertir ni reformatear trabajo ajeno como parte de una limpieza no solicitada.
- No ejecutar comandos destructivos de limpieza o restablecimiento. Si no puede aislarse una modificación de forma segura, explicar el conflicto.
- No editar manualmente `dist/`, `node_modules/` ni otros archivos generados salvo petición explícita.

### IV. Mantenibilidad y seguridad de tipos

- Mantener responsabilidades claras entre componentes, composición de páginas, navegación y estilos.
- Conservar el modo estricto de TypeScript y los contratos de los componentes.
- Evitar `any`, `@ts-ignore` y supresiones de reglas; una excepción debe tener una justificación concreta y limitarse al caso necesario.
- Seguir las convenciones verificables cercanas sin convertir detalles accidentales del código en obligaciones permanentes.

### V. Experiencia de usuario y accesibilidad

- Los cambios visuales o de interacción deben funcionar en las dimensiones de pantalla relevantes para la tarea.
- Mantener navegación comprensible, destinos correctos y contenido legible.
- Comprobar accesibilidad básica cuando corresponda: semántica adecuada, uso con teclado, foco visible, etiquetas o texto alternativo y contraste legible.
- Revisar los enlaces afectados y el comportamiento de la navegación fija cuando cambien secciones, destinos o dimensiones.
- No fijar en esta constitución cantidades de tarjetas, IDs, offsets, animaciones o versiones de dependencias: son detalles de implementación sujetos a evolución.

### VI. Verificación honesta y responsabilidad sobre errores

- Para cambios de código, ejecutar `npm run lint` y `npm run build` cuando sea posible, junto con las comprobaciones específicas del comportamiento afectado.
- Una compilación o un lint exitosos no demuestran por sí solos que la interfaz cumple los criterios de aceptación.
- Si una comprobación falla, determinar con evidencia si el error es preexistente o fue introducido por la modificación. Comparar resultados anteriores cuando estén disponibles y revisar el diff pertinente.
- Corregir los errores causados por los propios cambios. No ampliar el alcance para corregir errores preexistentes sin autorización.
- Si el origen no puede establecerse, comunicar la incertidumbre. Nunca declarar exitosa una comprobación fallida, omitida o que no pudo ejecutarse.
- No afirmar que existen pruebas automatizadas sin comprobar su configuración. Su incorporación debe responder a una necesidad y alcance concretos.

### VII. Privacidad y contexto confiable

- No incluir credenciales, secretos ni tokens en código público, documentación o memoria.
- Mantener `MEMORY.md` compacto, útil y verificado; sustituir o eliminar información obsoleta antes de añadir nuevas entradas.
- Registrar decisiones, restricciones y relaciones que sea costoso o ambiguo redescubrir. No inventar sus motivos.
- Diferenciar observaciones del estado actual de decisiones duraderas. Los procedimientos del agente pertenecen a `AGENTS.md`.

## 4. Especificación y flujo de entrega

Para cambios no triviales, aplicar una especificación ligera antes de implementar. No se requiere instalar una herramienta SDD ni disponer de un comando especial.

La especificación debe contener lo necesario para resolver la tarea:

- **Objetivo:** problema o comportamiento que se quiere resolver.
- **Alcance:** componentes o comportamientos afectados y límites del cambio.
- **Criterios de aceptación:** resultados observables que permiten considerar la tarea cumplida.
- **Verificación:** comprobaciones que demostrarán esos resultados.

Puede redactarse en la conversación o en un archivo si la complejidad justifica conservarla. Los ajustes pequeños no requieren una especificación separada. Las consultas de lectura o explicación no requieren comprobaciones operativas sin relación con la pregunta.

Antes de entregar una modificación:

1. Confirmar que el resultado responde al objetivo y respeta estos principios.
2. Revisar el diff final y preservar los cambios previos del propietario.
3. Ejecutar las verificaciones pertinentes y evaluar sus resultados.
4. Actualizar la memoria si hay contexto nuevo duradero, útil y verificado.
5. Informar qué cambió, qué se comprobó y qué limitaciones o fallos siguen pendientes.

## 5. Contexto técnico de referencia

Los archivos de origen describen una SPA con React 19, TypeScript, Vite y `@vitejs/plugin-react-swc`, con Tailwind CSS 4, Bootstrap y CSS propio.

Describen una entrada en `src/main.tsx`, composición mediante `src/App.tsx` y `src/Pages/Contenido.tsx`, componentes bajo `src/components/` y recursos estáticos en `public/`. Las secciones actuales son Inicio, Proyectos, Estudios, Skills y SobreMi.

Este contexto orienta la inspección inicial; no congela la arquitectura, las versiones o las secciones. Antes de cambiar código, verificarlo contra el repositorio. Según los archivos de origen, actualmente no hay pruebas automatizadas configuradas.

## 6. Gobierno y mantenimiento

- El propietario decide los cambios de propósito, principios y excepciones.
- Los agentes no pueden eliminar o debilitar un principio para facilitar una implementación sin una instrucción explícita.
- Una enmienda debe indicar qué regla cambia, por qué y qué documentos necesitan alinearse.
- Actualizar versión y fecha cuando cambie esta constitución. Usar versión mayor para cambios incompatibles de principios, menor para adiciones y parche para aclaraciones sin alterar obligaciones.
- Mantener las instrucciones operativas en `AGENTS.md` y el contexto en `MEMORY.md`; evitar duplicaciones que puedan divergir.

## 7. Integración con los archivos existentes
Si se actualiza `MEMORY.md`, registrar únicamente la existencia y función de la constitución como decisión duradera, sin copiar su contenido.
