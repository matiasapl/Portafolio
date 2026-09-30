import BtnUrlBlank from "./BtnUrlBlank";
import Seccion from "./Seccion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <>
      <div className="p-1 scroll-mt-16 my-10" id={id}>
        <Seccion texto={"Sobre Mi"}>
          {
            <div className="font-light px-8 text-indigo-600 text-shadow-pink-200">
            <br/> <strong className="text-lg">Echale un vistazo a mi GitHub para ver mis proyectos y contribuciones. </strong>
            <BtnUrlBlank
              url="https://github.com/matiasapl"
              icono={<FaGithub />}
            >
              GitHub
            </BtnUrlBlank>
            
            <strong className="text-lg">Echale un vizta a mi LinkedIn para ver mi experiencia laboral y conectar conmigo.</strong>
            <BtnUrlBlank
              url="https://www.linkedin.com/in/matias-alexander-polhwein-lara-23465026b"
              icono={<FaLinkedin />}
            >
              LinkedIn
            </BtnUrlBlank>

           <strong className="text-lg">Si quieres contactarme directamente, puedes enviarme un mensaje por WhatsApp.</strong>
            <BtnUrlBlank
              url="https://wa.link/035zpa"
              icono={<FaWhatsapp />}
            >
              Contactame por WhatsApp
            </BtnUrlBlank>

           <strong className="text-lg">Si quieres algo más formal, puedes descargar mi Curriculum Vitae en PDF.</strong>
            <BtnUrlBlank
              url="https://drive.google.com/file/d/1P6Xe_ouyqpwOsuIQm5NJM1HKJPFFiL_Y/view?usp=sharing"
              icono={<MdOutlineContactPage />}
            >
              Curriculum Vitae
            </BtnUrlBlank>
          </div>
          }
        </Seccion>
      </div>
    </>
  );
}

export default Index;
