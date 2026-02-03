type Props = {
  children: React.ReactNode;
  texto: string;
};

function Seccion({ children, texto }: Props) {
  return (
    <>
      <h1 className="text-transparent bg-clip-text bg-linear-to-t from-violet-500 to-fuchsia-500 text-4xl font-bold text-start mb-6 scroll-mt-16 my-16 p-2">
        {texto}
      </h1>
      <section
        id="estudios"
        className="text-transparent bg-clip-text bg-linear-to-t from-violet-500 to-fuchsia-500 font-bold p-8 border-white box-border border-2 w-fit"
      >
        {children}
      </section>
    </>
  );
}

export default Seccion;
