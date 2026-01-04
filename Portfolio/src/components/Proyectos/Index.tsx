import Proyecto from "./ModalProyecto";
import Seccion from "./Seccion";
type Props = {
  id: string;
};

function Index({ id }: Props) {
  return (
    <>
      <div className="container-fluid bg-secondary px-0 py-4 section" id={id}>
        <Seccion texto="Mis Proyectos">
          <Proyecto
            titulo="Portfolio (Esta Web)"
            descripcion={
              <>
                este portfolio fue creado para mostrar mis habilidades y
                proyectos.
                <br />
                hecho con [React, TypeScript, TailWind, vite]
              </>
            }
            VideoText="Video"
            WebText="Web"
            RepositorioText="GitHub"
            VideoLink=""
            WebLink=""
            RepositorioLink="https://github.com/matiasapl/Portafolio"
          />

          <Proyecto
            titulo="Web App Gestion de Inventarios (Terminado)"
            descripcion={
              <>
                con este proyecto aprendi html css y js, hay un video sobre la
                demo, fue la inspiracion para mi proyecto personal actual.
                <br />
                FRONT: [HTML, CSS, Bootstrap, JS]
                <br />
                BACK: [PHP, PHPMAILER, COMPOSER]
                <br />
                BBDD: [MYSQL SERVER]
                <br />
              </>
            }
            VideoText="Video DEMO"
            WebText="Web"
            RepositorioText="GitHub DEMO"
            VideoLink="https://www.youtube.com/watch?v=jKZoG9FT1lA&t=0s"
            WebLink=""
            RepositorioLink="https://github.com/matiasapl/INVENTARIO_DEMO_1.0_"
          />

          <Proyecto
            titulo="Dashboard Web (En Curso)"
            descripcion={
              <>
                <br />
                <br />
                <span>un Dashboard web para la empresa donde trabajo</span>
                <br />
                <span>
                  en donde trabajo se fabrican pallets y parrillas para la agro
                  industria en chile
                </span>
                <br />
                <p>
                  el area de armado tiene que cumplir con un minimo de pallets
                  armados y esto se ingresa en un excel, el Dashboard que
                  construi permite ingresar el excel y mostrar los cuantos
                  pallets hiso cada trabajador y ordenado por top filtrar por
                  nombre y rango de fechas muestra pallets: (numero), nombre y
                  foto, tambien tiene una seccion para mostrar un top de quien
                  gana mas por produccion llamada Top Bonos todo esto ingresando
                  el excel con un boton, se pretende mostrar toda esta
                  informacion en una pantalla para generar competitividad y
                  aumentar la productividad acutalizada de forma diaria, estoy
                  esperando la instruccion para su despliegue{" "}
                </p>
                <br />
                <span>
                  aplica una arquitectura cliente servidor, laravel para el api
                  + react para el front
                </span>
                <br />
                <span>
                  es un proyecto dockerizado que sera desplegado de forma local
                </span>
                <br />
                <br />
                <p>
                  El despliegue sera local pero espero las ordenes de mi jefe
                  para esto porque no un monolito? r: cuando lo empeze no usaba
                  laravel y no tenia claro donde se desplegaria el proyecto por
                  lo que pense en escalabilidad actualmente considero un error
                  el haber usado cliente servidor para este proyecto.
                  probablemente termine acoplando en una siguiente version
                </p>
              </>
            }
            VideoText="Video"
            WebText="Web"
            RepositorioText="GitHub"
            VideoLink=""
            WebLink=""
            RepositorioLink=""
          />

          <Proyecto
            titulo="Gestion de Inventarios (En Curso)"
            descripcion={
              <>
                Web APP en desarrollo puedes visitarla y probarla pero la
                <br />
                base de datos sera borrada 1 a 2 veses por semana, aunque esta
                <br />
                en web aun no esta habilitado para uso en la practica se aceptan
                <br />
                sugerencias que ayuden al desarrollo del producto
                <br />
                hecho con [React, TypeScript, TailWind, vite, Laravel, PHP]
                <br />
                Repositorio Privado
              </>
            }
            VideoText="Video"
            WebText="Web"
            RepositorioText="GitHub"
            VideoLink=""
            WebLink="https://greenyellow-mongoose-294732.hostingersite.com/"
            RepositorioLink=""
          />
        </Seccion>
      </div>
    </>
  );
}

export default Index;
