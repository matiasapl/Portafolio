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
      <section className="section-panel">
        {children}
      </section>
    </>
  );
}

export default Seccion;
