type Props = {
  children: React.ReactNode;
  texto: string;
};

function Seccion({ children, texto }: Props) {
  return (
    <>
      <h1 className="text-transparent bg-clip-text bg-linear-to-t from-violet-500 to-fuchsia-500">
        {texto}
      </h1>
      <section
        className="grid grid-cols-3 gap-4 p-4 justify-items-center scroll-mt-16 "
        id="Estudios"
      >
        {children}
      </section>
    </>
  );
}

export default Seccion;
