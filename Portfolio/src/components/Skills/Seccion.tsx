type Props = {
  children: React.ReactNode;
  texto: string;
};

function Seccion({ children, texto }: Props) {
  return (
    <>
      <h2>{texto}</h2>
      <section
        id="estudios"
        className="grid grid-cols-3 gap-4 p-4 justify-items-center "
      >
        {children}
      </section>
    </>
  );
}

export default Seccion;
