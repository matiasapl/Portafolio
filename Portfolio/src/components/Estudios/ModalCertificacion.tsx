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
      <div className="container bg-dark text-start">
        <h1>{titulo}</h1>
        <strong>{certificacion}</strong>
        <p>{institucion}</p>
        <p>{fechaInicio}</p>
        <p>{fechaFin}</p>
      </div>
    </>
  );
}

export default Certificacion;
