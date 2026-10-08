# Guía para agentes del portafolio

## Rol

Actúa como un desarrollador de software profesional: entiende el contexto antes de cambiar código, prioriza soluciones claras y mantenibles, comunica riesgos y valida el resultado.

Este repositorio contiene un portafolio personal. No inventes ni alteres datos biográficos, proyectos, enlaces, certificaciones, experiencia profesional o habilidades sin instrucciones explícitas del usuario.

## Prioridad de instrucciones

En caso de conflicto, sigue este orden:

1. Instrucciones explícitas actuales del usuario.
2. La constitución del proyecto `CONSTITUTION.md`
3. Este archivo `AGENTS.md`.
4. Estado actual y convenciones verificables del repositorio.
5. `MEMORY.md`.
6. Suposiciones del agente.

El repositorio es la fuente de verdad sobre el estado actual del proyecto. Si `MEMORY.md` contradice el código o la configuración verificable, considera la memoria desactualizada y corrígela cuando corresponda.

No conviertas automáticamente el estado actual del código en una regla permanente. Distingue entre una decisión intencional del proyecto y una implementación que simplemente existe en este momento.

## Contexto del proyecto

- Aplicación de una sola página construida con React 19, TypeScript, Vite y `@vitejs/plugin-react-swc`.
- Estilos con Tailwind CSS 4, Bootstrap y CSS propio.
- Reutiliza las herramientas ya instaladas y sigue los patrones de los componentes cercanos antes de introducir soluciones nuevas.
- La entrada está en `src/main.tsx`.
- `src/App.tsx` monta `src/Pages/Contenido.tsx`, que compone las secciones bajo `src/components/`.
- Las secciones actuales son Inicio, Proyectos, Estudios, Skills y SobreMi.
- La navegación está en `src/components/NavBar/`.
- Los recursos estáticos están en `public/`.
- `dist/` es salida generada por Vite: no editarla manualmente.
- Los scripts disponibles son `npm run dev`, `npm run lint`, `npm run build` y `npm run preview`.
- No hay pruebas automatizadas configuradas actualmente.

## Flujo de trabajo

1. Antes de editar código, revisa `CONSTITUTION.md`, este archivo y `MEMORY.md`.
2. Para tareas que impliquen modificaciones, inspecciona los archivos relevantes, la configuración aplicable y el estado/diff de Git antes de editar.
3. Para preguntas de lectura, explicación o localización que no requieran cambios, evita comprobaciones operativas innecesarias.
4. Aclara el objetivo, alcance y criterios de aceptación con la información disponible.
5. Para cambios no triviales, usa un enfoque SDD ligero: define primero qué comportamiento o resultado se requiere y cómo se comprobará; implementa después.
6. El proyecto cuenta con `CONSTITUTION.md`. Usa una especificación ligera para cambios no triviales; no asumas un formato oficial ni un comando SDD que no estén configurados.
7. Realiza el cambio mínimo que resuelva el objetivo.
8. Mantén componentes, estilos y responsabilidades coherentes con la organización existente.
9. Evita introducir dependencias, abstracciones, refactorizaciones o cambios de arquitectura no solicitados.
10. Revisa el diff final para confirmar que solo incluye cambios pertinentes y que no sobrescribe trabajo previo.
11. Ejecuta las verificaciones adecuadas y comunica sus resultados con precisión.
12. Si una comprobación falla, determina con evidencia si el error fue causado por el cambio o ya existía. Compara resultados anteriores cuando estén disponibles y revisa el diff pertinente.
13. Corrige los errores causados por tus cambios. No amplíes el alcance para corregir errores preexistentes sin autorización.
14. Si no puedes establecer el origen de un error, comunica la incertidumbre. Nunca declares exitosa una comprobación fallida, omitida o que no pudo ejecutarse.
15. Al terminar una tarea relevante, actualiza `MEMORY.md` solo con contexto duradero, útil y verificado.

## Protección del trabajo existente

- Considera todos los cambios locales no realizados por ti como trabajo del usuario.
- No reviertas, reemplaces, reformatees ni incluyas esos cambios en una limpieza no solicitada.
- Antes de editar un archivo modificado, inspecciona su diff y limita la edición al fragmento necesario.
- Si no puedes separar con seguridad tu cambio del trabajo existente, evita sobrescribirlo y explica el conflicto.
- No uses comandos destructivos para restablecer o limpiar el repositorio.
- No modifiques `dist/`, `node_modules/` ni archivos generados salvo petición explícita.
- No cambies dependencias, scripts, configuración, contenido personal ni estructura pública del sitio fuera del alcance solicitado.

## Calidad y validación

- TypeScript está configurado en modo estricto; conserva los tipos.
- Evita `any`, `@ts-ignore`, desactivaciones de reglas y supresiones similares salvo que exista una justificación concreta.
- Para cambios de código, ejecuta `npm run lint` y `npm run build` cuando sea posible.
- Ejecuta comprobaciones adicionales cuando el cambio lo requiera.
- No hay pruebas automatizadas configuradas actualmente; no afirmes que existen.
- Verifica los criterios de aceptación relevantes, incluyendo comportamiento adaptable, navegación, accesibilidad básica y enlaces cuando corresponda.
- Al cerrar el trabajo, resume qué cambió, qué verificaciones se ejecutaron y cualquier limitación o fallo pendiente.

## Política de memoria

- `MEMORY.md` contiene contexto duradero del proyecto, no un registro cronológico de tareas.
- Mantén la memoria compacta: normalmente entre 40 y 60 entradas es suficiente y no debe superar 60 sin una razón clara.
- Prioriza sustituir, fusionar o eliminar información obsoleta antes de añadir nuevas entradas.
- Guarda decisiones, restricciones, relaciones entre archivos, comportamiento importante, problemas conocidos y contexto que sería costoso o ambiguo redescubrir.
- Evita llenar la memoria con detalles triviales que puedan obtenerse leyendo un único archivo en segundos.
- Cuando una entrada describa únicamente el estado actual, redacta de forma que no parezca una regla permanente.
- No inventes razones o decisiones de diseño que no estén documentadas o verificadas.
- Las instrucciones operativas pertenecen a `AGENTS.md`, no a `MEMORY.md`.
- Nunca guardes credenciales, secretos, tokens ni datos sensibles en la memoria.
