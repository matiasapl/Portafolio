# Plan de implementación: rediseño visual del portafolio

**Spec de referencia:** `specs/redisenio-visual/spec.md`
**Objetivo:** implementar una presentación tech oscura con acentos neón, conservando íntegramente el contenido y sin añadir recursos externos ni dependencias.

## Fase 1: Inspección y preparación

- [x] Revisar el estado y el diff de Git; preservar cualquier trabajo local existente.
- [x] Inspeccionar estilos globales y componentes de navegación, Inicio, Proyectos, Estudios, Skills y Sobre mí.
- [x] Revisar los recursos gráficos del repositorio y confirmar si existen capturas de proyectos en ubicaciones adicionales.
- [x] Identificar estilos actuales redundantes o en conflicto para establecer una aplicación coherente con las herramientas instaladas, sin refactorizaciones ajenas al rediseño.

## Fase 2: Sistema visual

- [x] Definir variables/tokens visuales para colores oscuros y acentos neón, tipografía, espaciados, superficies, bordes y estados interactivos.
- [x] Comprobar que el contraste de texto y controles sea legible y que los efectos decorativos no compitan con el contenido.
- [x] Establecer estilos adaptables y estados de foco visibles.

## Fase 3: Secciones e interfaz

- [x] Rediseñar la navegación para escritorio y móvil, conservando sus destinos.
- [x] Reorganizar visualmente Inicio, manteniendo intactos sus textos, imagen y enlaces.
- [x] Rediseñar las tarjetas de Proyectos conservando descripciones y enlaces; utilizar capturas solo si ya existen en el repositorio.
- [x] Asegurar una presentación completa de proyectos aunque no haya capturas disponibles.
- [x] Aplicar el sistema visual a Estudios, Skills y Sobre mí sin modificar sus datos ni enlaces.

## Fase 4: Interacciones y accesibilidad

- [x] Añadir interacciones visuales no intrusivas; se evitó añadir animación automática por sección.
- [x] Respetar `prefers-reduced-motion`.
- [x] Revisar navegación con teclado, foco visible, legibilidad, contraste y uso en móvil.

## Fase 5: Validación y cierre

- [x] Comparar textos, datos y enlaces con el estado original para verificar que no cambiaron.
- [x] Revisar visualmente las secciones y la navegación en viewports móvil y escritorio.
- [x] Confirmar que no se agregaron dependencias ni recursos externos al sitio.
- [x] Ejecutar `npm run lint` y `npm run build`; ambos finalizaron correctamente.
- [x] Revisar el diff final y confirmar que contiene cambios pertinentes al rediseño.

## Cierre y resultados

- Estado: **completado**. La segunda iteración de identidad editorial también está registrada en `specs/redisenio-visual/task.md`.
- Brave/Playwright: viewports de 320, 390, 768 y 1440 px; sin desbordamiento horizontal, con los cinco controles de navegación visibles y los destinos comprobados.
- Accesibilidad básica: foco visible mediante teclado y respeto de `prefers-reduced-motion`.
- Recursos: retrato cargado y sin errores de consola; las tarjetas de proyectos funcionan sin capturas.
- `npm run lint`, `npm run build` y `git diff --check`: correctos según la verificación registrada en la tarea. `git diff --check` emitió advertencias de normalización CRLF, no errores.
- Los cambios locales del rediseño permanecen sin commit; este cierre actualiza solo el estado documental del plan.

## Criterio de finalización

El plan se considera completado cuando se satisfacen los criterios de aceptación y restricciones de `specs/redisenio-visual/spec.md`, la interfaz funciona de forma adaptable y accesible, y las verificaciones ejecutadas se reportan con sus resultados reales.

## Segunda iteración: identidad visual distintiva

La primera versión se ve demasiado genérica. La skill `frontend-design` está instalada en `.agents/skills/frontend-design/` y fue revisada antes de diseñar esta iteración.

### Sistema propuesto

- **Color:** grafito `#171C1A`, superficie `#222927`, tiza `#F0F0E8`, ceniza `#A6B0A8`, ámbar de señal `#FFD166` y azul técnico `#91D7E3`.
- **Tipografía:** Bahnschrift para títulos y Segoe UI para texto, ambos desde fuentes del sistema, sin descargas.
- **Principios:** alineación izquierda, reglas finas, acento ámbar reservado a énfasis funcional, sin lavados de gradiente ni elevación automática de cada bloque.

### Boceto de composición

```text
Navegación:                                  Inicio | Proyectos | Estudios | Skills | Sobre mí

INICIO
┌─────────────┐   Matias APL
│ foto retrato│   perfil y stack
│ + regla     │   biografía en párrafos de lectura
└─────────────┘

PROYECTOS
┌───────────────────────────────────┬─────────────┐
│ Plataforma de inventarios         │ demo        │
│ descripción y lista completa      │             │
└───────────────────────────────────┴─────────────┘
┌─────────────────────────┐  ┌─────────────────────────┐
│ Dashboard KPI            │  │ Formulario producción   │
└─────────────────────────┘  └─────────────────────────┘

SKILLS: grupos de tecnologías sin tarjetas individuales
SOBRE MÍ: explicación y enlace en filas con separadores
```

### Crítica y ajuste antes de implementar

La combinación de negro azulado, acento cian/violeta, cuadrícula luminosa, bordes redondeados y tarjetas clonadas ya se parece a una plantilla de producto SaaS. Se reemplaza por grafito material, ámbar asociado a señalización industrial, azul técnico secundario, jerarquía editorial asimétrica y movimiento solo cuando responde a una interacción. La información y recursos existentes permanecen intactos.
