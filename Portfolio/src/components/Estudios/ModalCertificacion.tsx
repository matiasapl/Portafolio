type Props = {
  titulo: string;
  certificacion: string;
  fechaInicio: string;
  fechaFin: string;
  institucion: string;
};

function Certificacion({
  titulo,
  certificacion,
  fechaInicio,
  fechaFin,
  institucion,
}: Props) {
  return (
    <>
      <article className="container-fluid bg-dark text-white text-start m0">
        <h1>{titulo}</h1>
        <strong>{certificacion}</strong>
        <p>{institucion}</p>
        <p>{fechaInicio}</p>
        <p>{fechaFin}</p>
      </article>
    </>
  );
}

export default Certificacion;
