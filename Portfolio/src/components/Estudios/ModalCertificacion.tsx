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
      <article className="font-bold px-8 border-yellow-400 box-border border-2 w-fit">
        <h1 className="text-2xl mb-6 text-indigo-600 text-shadow-pink-200 text-shadow-md">
          {titulo}
        </h1>
        <strong className="text-xl mb-6 text-indigo-600">
          {certificacion}
        </strong>
        <p className="text-xl mb-6 text-indigo-600">{institucion}</p>
        <p className="text-xl mb-6 text-indigo-600">{fechaInicio}</p>
        <p className="text-xl mb-6 text-indigo-600">{fechaFin}</p>
      </article>
    </>
  );
}

export default Certificacion;
