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
            <div className="font-bold px-8 border-fuchsia-500 box-border border-2 text-transparent bg-clip-text bg-linear-to-t from-violet-500 to-fuchsia-500">
              <strong className="py-5 my-4 blocktext-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500 solid">
                Hola soy Matias, Desarrollador Web Full Stack.
                <br />
                <br />
                Soy tecnico informatico en Embalajes Troya Spa. eh desarrollado
                2 proyectos de software, me dedico principalmente a lo
                relacionado con software y el apartado tecnico, mi objetivo es
                crear una empresa si nesesitas una web escribeme quiza podamos
                llegar a un acuerdo beneficioso para ambas partes.
              </strong>
              <br />
              <br />
              <span className="py-5 my-4 blocktext-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500 solid">
                Tienes una propuesta para mi? Enviame un WhatsApp (no me llames)
                si estoy trabajando y no espero tu llamada y ademas no te tengo
                entre mis contactos probablemente no te contestare si me envias
                un mensaje coordinamos.
                <br />
                <br />
                Buscas un Freelancer? Espero tu mensaje, Feliz de hacer
                negocios.
                <br />
                <br />
                Mis Objetivos de 2026?: Realizar 5 proyectos para clientes de
                forma independiente, crear una empresa.
                <br />
              </span>
              <br />
              <span className="py-5 my-4 blocktext-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500 solid">
                WhatsApp: +569 83894202
              </span>
              <br />
              <span className="py-5 my-4 blocktext-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500 solid">
                Email: polhweinmatias@gmail.com
              </span>
            </div>
          }
        </Seccion>
      </div>
    </>
  );
}

export default Index;
