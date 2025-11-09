import Seccion from "./Seccion";
type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <>
      <div className="p-1 scroll-mt-16 my-10" id={id}>
        <Seccion texto={"Sobre Mi"}>
          {
            <div className="text-white font-bold px-8 border-white box-border border-2 w-fit">
              <strong>
                Desarrollador Full Stack | Soluciones Web a Medida
              </strong>
              <br />
              <br />
              <span>
                Soy desarrollador Full Stack especializado en transformar ideas
                en plataformas web funcionales y profesionales.
              </span>
              <br />
              <br />
              <ul>
                Mi Propuesta de Valor:
                <li>
                  • Pila Confiable: Implementación robusta en LAMP (PHP/MySQL)
                  para garantizar un backend estable y seguro.
                </li>
                <li>
                  • Experiencia React: Diseño de interfaces de usuario (UI)
                  dinámicas y optimizadas con React, enfocadas en la usabilidad
                  y el rendimiento.
                </li>
                <li>
                  • Enfoque en UX: Domino las técnicas para manejar datos
                  complejos, asegurando que su plataforma se sienta rápida y
                  profesional para el usuario final.
                </li>
              </ul>
              <br />
              <span>
                El resultado: Plataformas web completas, optimizadas y listas
                para impulsar su negocio.
              </span>
            </div>
          }
        </Seccion>
      </div>
    </>
  );
}

export default Index;
