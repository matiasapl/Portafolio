type Props = {
  children: React.ReactNode;
  texto: string;
};

function Seccion({ children, texto }: Props) {
  return (
    <>
      <h3 className="skill-group-title">
        {texto}
      </h3>
      <section className="skill-group">
        <div className="technology-list">{children}</div>
      </section>
    </>
  );
}

export default Seccion;
