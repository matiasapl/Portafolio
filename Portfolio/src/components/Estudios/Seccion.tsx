type Props = {
  children: React.ReactNode;
  texto: string;
};

function Seccion({ children, texto }: Props) {
  return (
    <>
      <h2 className="text-white text-4xl font-bold text-start mb-6 scroll-mt-16 my-16 p-2">
        {texto}
      </h2>
      <section
        id="estudios"
        className="text-white font-bold p-8 border-white box-border border-2 w-fit"
      >
        {children}
      </section>
    </>
  );
}

export default Seccion;
