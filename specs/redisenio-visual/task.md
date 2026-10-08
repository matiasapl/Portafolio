# Tareas: rediseño visual del portafolio

**Especificación:** [`spec.md`](./spec.md)
**Plan:** [`plan.md`](./plan.md)
**Estado:** completado

## 1. Inspección y preparación

- [x] Revisar el estado y el diff de Git antes de modificar código.
- [x] Inspeccionar estilos globales y componentes de navegación, Inicio, Proyectos, Estudios, Skills y Sobre mí.
- [x] Buscar capturas de proyectos en el repositorio y registrar cuáles existen; no incorporar recursos externos.
- [x] Identificar los estilos actuales de Tailwind, Bootstrap y CSS propio que deban coordinarse para el rediseño.

## 2. Sistema visual

- [x] Definir paleta oscura con acentos neón y comprobar su legibilidad.
- [x] Definir jerarquía tipográfica, espaciados, anchos de contenido y ritmo entre secciones.
- [x] Unificar superficies, bordes, sombras y estados interactivos.
- [x] Definir estilos adaptables y foco de teclado claramente visible.

## 3. Navegación e Inicio

- [x] Rediseñar la navegación para escritorio y móvil.
- [x] Mantener los destinos actuales y verificar que el desplazamiento llega a cada sección.
- [x] Reorganizar visualmente Inicio para mejorar jerarquía y lectura.
- [x] Conservar intactos los textos, datos, imagen y enlaces de Inicio.

## 4. Proyectos y secciones restantes

- [x] Rediseñar las tarjetas de Proyectos con una jerarquía visual consistente.
- [x] Conservar descripciones y enlaces actuales de cada proyecto.
- [x] Usar capturas únicamente si ya existen; asegurar una presentación adecuada sin imágenes.
- [x] Aplicar el sistema visual a Estudios sin cambiar sus datos.
- [x] Aplicar el sistema visual a Skills sin cambiar ni añadir habilidades.
- [x] Aplicar el sistema visual a Sobre mí sin modificar sus datos ni enlaces.

## 5. Interacciones y accesibilidad

- [x] Añadir animaciones e interacciones dinámicas, pero no intrusivas.
- [x] Respetar `prefers-reduced-motion` y conservar la comprensión del sitio sin animaciones.
- [x] Definir navegación por teclado, foco visible y estados interactivos.
- [x] Revisar contraste y legibilidad de textos y controles en estilos.

## 6. Validación

- [x] Revisar visualmente la presentación en tamaños de escritorio y móvil en navegador.
- [x] Comparar textos, datos y enlaces con el estado original para confirmar que no fueron alterados.
- [x] Confirmar que no se añadieron dependencias ni recursos externos.
- [x] Confirmar por implementación que las tarjetas de proyectos funcionan sin capturas.
- [x] Ejecutar `npm run lint` y registrar el resultado.
- [x] Ejecutar `npm run build` y registrar el resultado.
- [x] Revisar el diff final y confirmar que solo contiene cambios pertinentes al rediseño.

## Criterio de finalización

Completar las tareas aplicables y verificar todos los criterios de aceptación de [`spec.md`](./spec.md). Comunicar las comprobaciones ejecutadas y cualquier fallo o limitación pendiente.

## Resultados de verificación

- `npm run lint`: correcto.
- `npm run build`: correcto.
- `git diff --check`: correcto; Git solo advirtió sobre normalización CRLF en los archivos TypeScript/CSS modificados.
- Revisión visual con Brave y Playwright MCP en viewports de 320, 390, 768 y 1440 px; no se detectó desbordamiento horizontal y los controles de navegación quedaron visibles.
- Probados los cinco destinos de navegación, foco de teclado visible y `prefers-reduced-motion`; la foto cargó correctamente y la consola no registró errores.

## Iteración de identidad distintiva

- [x] Instalar y cargar la skill oficial `frontend-design` para OpenCode.
- [x] Definir una dirección industrial/editorial y criticarla frente a patrones visuales genéricos.
- [x] Aplicar la paleta grafito/ámbar/azul técnico y retirar la cuadrícula, gradientes y brillos repetidos.
- [x] Diferenciar la jerarquía de Inicio, Proyectos, Skills y Sobre mí sin alterar contenido.
- [x] Revisar con Brave en escritorio y móvil; ajustar lo observado.
- [x] Repetir la comparación de contenido, `npm run lint`, `npm run build` y revisión de diff.

### Resultados de la segunda iteración

- Brave en 320, 390, 768 y 1440 px: no se detectó desbordamiento horizontal y los cinco controles de navegación permanecen visibles.
- Probados los cinco destinos de navegación y el foco visible con `Tab`; la preferencia `prefers-reduced-motion` se respeta.
- El retrato carga y la consola del navegador no registra errores.
- `npm run lint`, `npm run build` y `git diff --check`: correctos.
