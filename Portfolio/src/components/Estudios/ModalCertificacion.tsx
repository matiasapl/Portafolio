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
      <article className="text-white font-bold px-8 border-white box-border border-2 w-fit">
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
