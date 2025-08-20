type Props = {
  children: React.ReactNode;
  texto: string;
};

function Seccion({ children, texto }: Props) {
  return (
    <>
      <h2>{texto}</h2>
      <section id="proyectos">{children}</section>
    </>
  );
}

export default Seccion;
