# Especificación: rediseño visual del portafolio

**Estado:** aprobada para planificación de implementación
**Tipo:** cambio visual, sin modificación de contenido

## Objetivo

Modernizar integralmente la presentación del portafolio con una identidad tech oscura y acentos neón. Mejorar jerarquía, legibilidad y coherencia entre secciones, manteniendo intacta la información personal y profesional existente.

## Dirección visual aprobada

La primera iteración se percibió demasiado genérica. La revisión con la skill `frontend-design` establece una identidad editorial inspirada en documentación de ingeniería y procesos industriales, conservando el tema oscuro/neón.

- Paleta: grafito `#171C1A`, superficie `#222927`, tiza `#F0F0E8`, gris ceniza `#A6B0A8`, ámbar de señal `#FFD166` y azul técnico `#91D7E3`.
- Tipografía: Bahnschrift para títulos y Segoe UI para lectura, con fuentes locales de respaldo; no descargar fuentes.
- Composición: Inicio asimétrico; primer proyecto destacado y siguientes con jerarquía editorial; Skills como índice de herramientas sin mosaico de tarjetas; Sobre mí como filas de contacto separadas por reglas.
- Tratamiento: alineación principalmente izquierda, divisores y acentos funcionales; evitar las cajas repetidas, brillos y gradientes ubicuos, cuadrícula decorativa global y animaciones automáticas por sección.

## Alcance

- Definir y aplicar un sistema visual compartido: paleta oscura con acentos neón, tipografía, escala de espaciado, superficies, bordes y estados interactivos.
- Rediseñar la navegación y las secciones Inicio, Proyectos, Estudios, Skills y Sobre mí.
- Reorganizar visualmente el contenido cuando ayude a su lectura, sin cambiar, eliminar ni añadir información.
- Adaptar la presentación a escritorio y móvil.
- Añadir movimiento e interacciones visuales perceptibles pero no intrusivas.
- Revisar primero los recursos gráficos existentes. Actualmente se encontraron `public/icon.jpg`, `public/mi-foto.png` y `src/assets/react.svg`; no se encontraron capturas de proyectos. Si no existen capturas adicionales disponibles en el repositorio, las tarjetas de proyectos deben funcionar sin imágenes.

## Restricciones

- No alterar datos biográficos, experiencia, estudios, habilidades, descripciones de proyectos ni enlaces.
- No incorporar imágenes, fuentes, iconos ni otros recursos externos nuevos. Se pueden reutilizar recursos existentes.
- No añadir dependencias ni cambiar la arquitectura de la aplicación para resolver el rediseño.
- Conservar la navegación y destinos existentes, salvo ajustes visuales o técnicos necesarios para el comportamiento adaptable y accesible.
- Respetar `prefers-reduced-motion`; la interfaz debe seguir siendo comprensible sin animaciones.
- No editar `dist/` ni otros archivos generados.

## Criterios de aceptación

1. Las cinco secciones y la navegación comparten una identidad visual coherente, oscura y de estilo tech con acentos neón.
2. La composición se distingue de una plantilla SaaS repetitiva mediante jerarquía y estructuras adecuadas al contenido industrial y técnico.
3. El contenido textual y profesional existente se conserva íntegramente; solo se permite reorganizar su presentación visual.
4. Los proyectos se presentan de forma consistente y legible, tanto si hay capturas existentes como si no las hay.
5. La navegación, las tarjetas, los enlaces y cualquier interacción relevante se pueden usar en pantallas pequeñas y grandes.
6. Texto, controles y estados interactivos conservan contraste y legibilidad adecuados; el foco de teclado es visible.
7. Las animaciones no bloquean el uso ni ocultan información, y se reducen o desactivan cuando el sistema solicita movimiento reducido.
8. El cambio no incorpora dependencias ni recursos externos nuevos.

## Plan de implementación

1. Inspeccionar el estado/diff de Git, estilos y componentes de las cinco secciones, navegación y recursos gráficos; confirmar si hay capturas de proyectos en otras ubicaciones del repositorio.
2. Definir tokens y reglas visuales compartidas, y establecer cómo conviven o se reemplazan los estilos actuales de Tailwind, Bootstrap y CSS propio sin introducir dependencias.
3. Implementar el rediseño de navegación y de Inicio.
4. Implementar tarjetas de Proyectos y el tratamiento visual de Estudios, Skills y Sobre mí.
5. Incorporar interacciones y animaciones, incluyendo soporte para movimiento reducido.
6. Revisar y ajustar los diseños en anchos de escritorio y móvil, navegación por teclado, contraste, legibilidad y destinos de navegación.
7. Revisar el diff para confirmar que solo se modificó la presentación y ejecutar `npm run lint` y `npm run build`.

## Verificación

- Comparar antes y después el contenido textual y los enlaces para comprobar que no se alteraron.
- Probar visualmente las secciones y navegación en viewport móvil y de escritorio.
- Probar navegación con teclado y visibilidad del foco; revisar contraste y movimiento reducido.
- Confirmar que las tarjetas se renderizan correctamente sin capturas de proyectos.
- Ejecutar `npm run lint` y `npm run build`; informar cualquier fallo sin atribuirlo al cambio si no hay evidencia.

## Fuera de alcance

- Reescritura, corrección o traducción del contenido.
- Incorporación de nuevos proyectos, datos personales, enlaces o certificaciones.
- Creación o adquisición de capturas, ilustraciones, fotografías o recursos de marca.
- Cambios funcionales ajenos a la presentación visual.
