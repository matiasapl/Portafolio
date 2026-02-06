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
                Trabajar conmigo es ameno, me involucro mas que la mayoria, me
                gusta estar por encima de la media, no espero el esfuerzo que yo
                doy de nadie, estare para ti cuando me nesesites, eso es lo
                bueno de trabajar conmigo, lo malo es que no soy uno mas, no
                puedo hacer solo lo que me corresponde, estoy al 100% o no
                estoy, no solo hago mi trabajo, no estoy a medias: estoy o no
                estoy.
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
                <br />
                Busco Trabajo? No activamente pero podemos hablarlo y ver que
                sale si te interesa mi perfil.
                <br />
                <br />
                Buscas un Freelancer? Serias mi primer cliente y solo en
                aplicaciones web pero estoy habieto a oportunidades.
                <br />
                <br />
                Cual es mi trabajo soñado?: Dame la oportunidad de trabajar con
                otros desarrolladores en proyectos con impacto real y
                probablemente lo tomare, quiero tener impacto y cambiar el mundo.
                <br />
              </span>
              <br />
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
