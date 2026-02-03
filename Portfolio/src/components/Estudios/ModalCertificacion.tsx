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
      <article className="font-bold px-8 border-fuchsia-500 box-border border-2 w-fit">
        <h1 className="text-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500">
          {titulo}
        </h1>
        <strong className="text-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500">
          {certificacion}
        </strong>
        <p className="text-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500">
          {institucion}
        </p>
        <p className="text-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500">
          {fechaInicio}
        </p>
        <p className="text-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500">
          {fechaFin}
        </p>
      </article>
    </>
  );
}

export default Certificacion;
