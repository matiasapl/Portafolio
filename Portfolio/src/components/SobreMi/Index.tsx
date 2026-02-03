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
                Holi soy Matias Desarrollador Web Full Stack
              </strong>
              <br />
              <span className="py-5 my-4 blocktext-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500 solid">
                Contacto:
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
