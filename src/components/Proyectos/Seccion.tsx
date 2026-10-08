type Props = {
  children: React.ReactNode;
  texto: string;
};

function Seccion({ children, texto }: Props) {
  return (
    <>
      <h2 className="section-heading">
        {texto}
      </h2>
      <section className="project-grid" aria-label={texto}>
        {children}
      </section>
    </>
  );
}

export default Seccion;
