type Props = {
  children: string;
  texto: string;
};

function Seccion({ children, texto }: Props) {
  return (
    <>
      <h2>{children}</h2>
      <p>{texto}</p>
    </>
  );
}

export default Seccion;
