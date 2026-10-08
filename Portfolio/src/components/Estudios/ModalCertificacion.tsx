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
    <article className="study-card">
      <h3 className="study-title">{titulo}</h3>
      <strong className="study-detail">{certificacion}</strong>
      <p className="study-detail">{institucion}</p>
      <p className="study-detail">{fechaInicio}</p>
      <p className="study-detail">{fechaFin}</p>
    </article>
  );
}

export default Certificacion;
