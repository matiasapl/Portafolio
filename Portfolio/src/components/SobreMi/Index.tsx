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
            <div className="font-bold px-8 border-white box-border border-2 w-fit text-transparent bg-clip-text bg-linear-to-t from-violet-500 to-fuchsia-500">
              <strong className="p-2 m-2 blocktext-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500">
                Vacio por ahora
              </strong>
            </div>
          }
        </Seccion>
      </div>
    </>
  );
}

export default Index;
