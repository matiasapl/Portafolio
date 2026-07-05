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
            <div className="font-light px-8 border-yellow-400 box-border border-2 text-indigo-600 text-shadow-pink-200">
              <strong className="py-5 my-4 solid text-indigo-600">
                ¿Buscas un Desarrollador que entienda tu negocio?
                <br />
                <br />
                Soy Matías, desarrollador Full Stack con experiencia real en
                entornos industriales. Actualmente gestiono el apartado técnico
                y de software en Embalajes Troya SpA, aportando soluciones que
                optimizan procesos.
              </strong>
              <br />
              <br />
              <span className="py-5 my-4 blocktext-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500 solid">
                Estoy disponible para nuevos proyectos independientes. Mi meta
                es clara: entregar software de calidad que genere beneficios
                mutuos. Escríbeme al WhatsApp y busquemos la mejor solución para
                tu empresa.
                <br />
                <br />
                Nota: Por favor, solo mensajes de texto o audio para coordinar
                una llamada previa.
                <br />
                <br />
              </span>
              <br />
              <span className="py-5 my-4 blocktext-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500 solid">
                WhatsApp: +569 83894202
              </span>
              <br />
              <span className="py-5 my-4 blocktext-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500 solid">
                Email: contacto@mapl.dev
              </span>
            </div>
          }
        </Seccion>
      </div>
    </>
  );
}

export default Index;
