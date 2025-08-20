type Props = {
  calidad: string;
  tecnologia: string;
};

function Tecnologia({ tecnologia, calidad }: Props) {
  return (
    <>
      <article className="container-fluid bg-dark text-white text-start m0">
        <h1>{tecnologia}</h1>
        <p>{calidad}</p>
      </article>
    </>
  );
}

export default Tecnologia;
