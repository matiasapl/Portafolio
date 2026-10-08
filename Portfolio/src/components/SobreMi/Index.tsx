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
      <div className="page-section" id={id}>
        <Seccion texto={"Sobre Mi"}>
          <div className="contact-list section-panel">
            <div className="contact-row">
              <strong className="contact-copy">
                Echale un vistazo a mi GitHub para ver mis proyectos y contribuciones.
              </strong>
              <BtnUrlBlank
                url="https://github.com/matiasapl"
                icono={<FaGithub />}
              >
                GitHub
              </BtnUrlBlank>
            </div>
            <div className="contact-row">
              <strong className="contact-copy">
                Echale un vizta a mi LinkedIn para ver mi experiencia laboral y conectar conmigo.
              </strong>
              <BtnUrlBlank
                url="https://www.linkedin.com/in/matias-alexander-polhwein-lara-23465026b"
                icono={<FaLinkedin />}
              >
                LinkedIn
              </BtnUrlBlank>
            </div>
            <div className="contact-row">
              <strong className="contact-copy">
                Si quieres contactarme directamente, puedes enviarme un mensaje por WhatsApp.
              </strong>
              <BtnUrlBlank
                url="https://wa.link/035zpa"
                icono={<FaWhatsapp />}
              >
                Contactame por WhatsApp
              </BtnUrlBlank>
            </div>
            <div className="contact-row">
              <strong className="contact-copy">
                Si quieres algo más formal, puedes descargar mi Curriculum Vitae en PDF.
              </strong>
              <BtnUrlBlank
                url="https://drive.google.com/file/d/1P6Xe_ouyqpwOsuIQm5NJM1HKJPFFiL_Y/view?usp=sharing"
                icono={<MdOutlineContactPage />}
              >
                Curriculum Vitae
              </BtnUrlBlank>
            </div>
          </div>
        </Seccion>
      </div>
    </>
  );
}

export default Index;
