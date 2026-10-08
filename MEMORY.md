# Memoria del proyecto

## Arquitectura

01. El repositorio contiene el portafolio personal de Matías Alexander Polhwein Lara.
02. La interfaz y el contenido principal del sitio están en español.
03. `index.html` configura el idioma del documento como `es`.
04. El título configurado actualmente en HTML es `MatiasAPL Portafolio`.
05. La aplicación es una SPA montada en el elemento DOM `#root`.
06. La entrada cliente es `src/main.tsx`.
07. `src/main.tsx` renderiza `<App />` dentro de `StrictMode`.
08. `src/App.tsx` importa `App.css` y renderiza `src/Pages/Contenido.tsx`.
09. `src/Pages/Contenido.tsx` actúa como compositor de las secciones principales.
10. Los componentes de contenido están organizados por sección bajo `src/components/`.
11. La navegación está implementada bajo `src/components/NavBar/`.
12. Los recursos estáticos del sitio se encuentran en `public/`.

## Navegación y UI

13. Las secciones principales actuales son Inicio, Proyectos, Estudios, Skills y SobreMi.
14. El orden de montaje actual es Inicio, Proyectos, Estudios, Skills y SobreMi.
15. Los IDs usados actualmente para navegación incluyen `Inicio`, `Proyectos`, `Estudios`, `Habilidades` y `Sobre_MI`.
16. `NavBar/Index.tsx` define los botones de desplazamiento a las secciones.
17. `NavBar/BtnScroll.tsx` localiza el destino con `document.getElementById`.
18. El desplazamiento de navegación usa `requestAnimationFrame`.
19. La duración configurada actualmente para el desplazamiento es de 600 ms.
20. El desplazamiento aplica actualmente un offset vertical de 80 px.
21. Si cambia la estructura o altura de la navegación fija, conviene revisar si ese offset sigue siendo adecuado.
22. `NavBar/BtnVerCV.tsx` abre la URL del CV en una pestaña nueva.
23. La imagen de perfil está referenciada actualmente como `/mi-foto.png`.
24. La imagen de perfil incluye texto alternativo descriptivo.
25. `SobreMi/Index.tsx` ofrece enlaces a GitHub, LinkedIn, WhatsApp y al CV.
26. Los botones de enlaces externos se implementan mediante componentes `BtnUrlBlank` por sección.

## Contenido profesional y proyectos

27. `Inicio/Index.tsx` presenta el nombre, perfil profesional y biografía.
28. La biografía actual describe experiencia en aplicaciones internas para procesos industriales.
29. El perfil actual menciona Laravel, React, PHP, MySQL, Docker, Tailwind CSS, Git y GitHub.
30. `Proyectos/Index.tsx` define actualmente tres tarjetas de proyectos; este número describe el estado actual y no una restricción permanente.
31. El primer proyecto mostrado es una plataforma personal de gestión de inventarios.
32. La plataforma de inventarios menciona Laravel, React, MySQL y Docker.
33. La tarjeta de inventarios incluye un enlace a una demo web.
34. El segundo proyecto mostrado es un dashboard de KPI de Embalajes Troya.
35. El dashboard describe métricas de producción y filtros de información.
36. El tercer proyecto mostrado es un formulario móvil para registrar producción de armado.
37. El formulario móvil menciona React Native, Expo y Microsoft Active Directory.
38. `Proyectos/ModalProyecto.tsx` recibe la descripción como `ReactNode`.
39. Los enlaces de video, web y repositorio de un proyecto son opcionales.
40. `Estudios/Index.tsx` presenta actualmente una certificación académica.
41. Los datos de estudios incluyen título, institución y fechas de inicio y fin.

## Skills, estilos y stack

42. `Skills/Index.tsx` organiza tecnologías por categorías.
43. Las categorías actuales incluyen Front End, Back End, Herramientas, Sistemas Operativos, Modelado y Control de Versiones.
44. Front End muestra actualmente HTML, CSS, JavaScript, React, Tailwind, Bootstrap y Vite.
45. Back End muestra actualmente PHP, Composer, MySQL y Laravel.
46. Los iconos de tecnología se renderizan mediante `react-icons`.
47. `src/index.css` importa Tailwind CSS y define estilos base globales.
48. El fondo global combina una cuadrícula de gradientes con un brillo radial que sigue el mouse.
49. `Contenido.tsx` actualiza las variables CSS `--mouse-x` y `--mouse-y` ante el movimiento del mouse.
50. La pila verificada actualmente es React 19, TypeScript 5.8, Vite 7 y Tailwind CSS 4.

## Decisiones y restricciones duraderas

51. El contenido biográfico, profesional, académico y los enlaces personales no deben alterarse ni inventarse sin una instrucción explícita del usuario.
52. El repositorio y su configuración actual son la fuente de verdad si esta memoria queda desactualizada.
53. Una observación del estado actual no debe interpretarse automáticamente como una decisión permanente del proyecto.
54. `dist/` es salida generada por Vite y no debe editarse manualmente.
55. El proyecto usa TypeScript en modo estricto; los cambios deben conservar tipos seguros.
56. Los cambios deben reutilizar primero las herramientas, dependencias y patrones ya presentes antes de introducir alternativas nuevas.
57. Actualmente no hay pruebas automatizadas configuradas.
58. Las validaciones principales disponibles son `npm run lint` y `npm run build`.
59. Las instrucciones operativas para agentes pertenecen a `AGENTS.md`; `opencode.json` configura actualmente Playwright MCP para Brave visible y aislado, y `.agents/skills/frontend-design/` contiene la skill de diseño frontend del proyecto.
60. Esta memoria debe mantenerse compacta y actualizarse sustituyendo información obsoleta en vez de crecer indefinidamente.
