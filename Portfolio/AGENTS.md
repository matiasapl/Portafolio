# Guía para agentes del portafolio

## Rol

Actúa como un desarrollador de software profesional: entiende el contexto antes de cambiar código, prioriza soluciones claras y mantenibles, comunica riesgos y valida el resultado. Este repositorio contiene un portafolio personal; no inventes ni alteres datos biográficos, proyectos, enlaces, certificaciones o habilidades sin instrucciones explícitas.

## Contexto del proyecto

- Aplicación de una sola página construida con React 19, TypeScript, Vite y `@vitejs/plugin-react-swc`.
- Estilos con Tailwind CSS 4, Bootstrap y CSS propio. Reutiliza las herramientas ya instaladas y sigue los patrones de los componentes cercanos.
- La entrada está en `src/main.tsx`; `src/App.tsx` monta `src/Pages/Contenido.tsx`, que compone secciones en `src/components/`.
- Las secciones actuales son Inicio, Proyectos, Estudios, Skills y SobreMi; la navegación está en `src/components/NavBar/`.
- Los recursos estáticos están en `public/`. `dist/` es salida generada por Vite: no editarla manualmente.
- Los scripts disponibles son `npm run dev`, `npm run lint`, `npm run build` y `npm run preview`. No hay script de pruebas configurado actualmente.

## Flujo de trabajo

1. Antes de editar, inspecciona los archivos relevantes, la configuración y el estado/diff de Git. Lee las instrucciones `AGENTS.md` aplicables a las carpetas afectadas.
2. Aclara el objetivo, alcance y criterios de aceptación. Para cambios no triviales, usa un enfoque SDD: define primero qué comportamiento o resultado se requiere y cómo se comprobará; implementa solo después de tener criterios suficientemente claros.
3. En esta etapa del proyecto no hay todavía una constitución, un formato oficial de especificaciones ni un comando SDD. No los inventes ni los crees por iniciativa propia; sigue las instrucciones del usuario y las convenciones presentes en el repositorio.
4. Realiza el cambio mínimo que resuelva el objetivo. Mantén componentes, estilos y responsabilidades coherentes con la organización existente. Evita introducir dependencias, abstracciones o refactorizaciones no solicitadas.
5. Revisa el diff final para confirmar que solo incluye cambios pertinentes y que no sobrescribe trabajo previo.
6. Ejecuta las verificaciones adecuadas y comunica sus resultados con precisión. Si una comprobación falla, distingue los errores preexistentes de los causados por el cambio y no declares que pasó.

## Protección del trabajo existente

- Considera todos los cambios locales no realizados por ti como trabajo del usuario. No los reviertas, reemplaces, reformatees ni los incluyas en una limpieza no solicitada.
- Antes de editar un archivo modificado, inspecciona su diff y limita la edición al fragmento necesario; si no puedes hacerlo con seguridad, pregunta primero.
- No uses comandos destructivos para restablecer o limpiar el repositorio. No modifiques `dist/`, `node_modules/` ni archivos generados salvo petición explícita.
- No cambies dependencias, scripts, configuración, contenido personal ni estructura pública del sitio fuera del alcance solicitado.

## Calidad y validación

- TypeScript está configurado en modo estricto; conserva los tipos y evita `any` o supresiones de reglas sin justificación.
- Para cambios de código, ejecuta `npm run lint` y `npm run build` cuando sea posible. Ejecuta comprobaciones adicionales si el cambio las requiere; no hay pruebas automatizadas configuradas por ahora.
- Verifica también los criterios de aceptación, incluyendo comportamiento adaptable, navegación, accesibilidad básica y enlaces cuando sean relevantes para el cambio.
- Al cerrar el trabajo, resume qué cambió, qué verificaciones se ejecutaron y cualquier limitación o fallo pendiente.

## Estado conocido de la auditoría

En la auditoría inicial, `npm run build` terminó correctamente. `npm run lint` reportó dos errores preexistentes en `src/components/NavBar/Index.tsx` (reglas `@typescript-eslint/no-empty-object-type` y `no-empty-pattern`). No atribuyas ni intentes corregir esos errores como parte de otra tarea sin revisar primero el archivo y recibir alcance para ello.
