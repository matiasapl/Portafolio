type Props = {
  children: React.ReactNode;
  texto: string;
};

function Seccion({ children, texto }: Props) {
  return (
    <>
      <h2>{texto}</h2>
      <section className="bg-dark text-light px-0 py-3 m-0">
        <p>{children}</p>
      </section>
    </>
  );
}

export default Seccion;
