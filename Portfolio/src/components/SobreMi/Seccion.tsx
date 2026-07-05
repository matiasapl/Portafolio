type Props = {
  children: React.ReactNode;
  texto: string;
};

function Seccion({ children, texto }: Props) {
  return (
    <>
      <h1 className="text-indigo-600 text-shadow-pink-200 text-shadow-md text-6xl font-light text-center mb-6 scroll-mt-16 p-2">
        {texto}
      </h1>
      <section>
        <p className="">{children}</p>
      </section>
    </>
  );
}

export default Seccion;
