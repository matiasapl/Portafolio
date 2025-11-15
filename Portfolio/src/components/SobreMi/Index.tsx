import Seccion from "./Seccion";
import BtnUrlBlank from "./BtnUrlBlank";
import { FaWordpress } from "react-icons/fa6";
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
              <strong className="p-2 m-2 block">
                Hola soy Matias. Si enserio quieres saber revisa Mi Blog
              </strong>
              <BtnUrlBlank
                url="https://matiasapl.wordpress.com"
                icono={<FaWordpress />}
              >
                Mi Blog
              </BtnUrlBlank>
            </div>
          }
        </Seccion>
      </div>
    </>
  );
}

export default Index;
