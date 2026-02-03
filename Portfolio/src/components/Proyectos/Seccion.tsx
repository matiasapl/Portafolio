type Props = {
  children: React.ReactNode;
  texto: string;
};

function Seccion({ children, texto }: Props) {
  return (
    <>
      <h1 className="text-transparent bg-clip-text bg-linear-to-t from-violet-500 to-fuchsia-500 text-4xl font-bold text-center mb-6 scroll-mt-16 p-2">
        {texto}
      </h1>
      <section
        id="proyectos"
        className="text-transparent bg-clip-text bg-linear-to-t from-violet-500 to-fuchsia-500 font-bold flex flex-row flex-wrap justify-center gap-4 px-8 border-2"
      >
        {children}
      </section>
    </>
  );
}

export default Seccion;
