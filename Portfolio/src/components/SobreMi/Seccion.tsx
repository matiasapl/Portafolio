type Props = {
  children: React.ReactNode;
  texto: string;
};

function Seccion({ children, texto }: Props) {
  return (
    <>
      <h1 className="text-white text-4xl font-bold text-start mb-6 scroll-mt-16 p-2">
        {texto}
      </h1>
      <section>
        <p>{children}</p>
      </section>
    </>
  );
}

export default Seccion;
