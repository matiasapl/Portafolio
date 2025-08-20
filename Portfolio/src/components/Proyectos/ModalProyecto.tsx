import BtnUrlBlank from "./BtnUrlBlank";
type Props = {
  titulo: string;
  descripcion: React.ReactNode;
  VideoLink: string;
  WebLink: string;
  RepositorioLink: string;
  VideoText: string;
  WebText: string;
  RepositorioText: string;
};

function Proyecto({
  titulo,
  descripcion,
  VideoLink,
  WebLink,
  RepositorioLink,
  VideoText,
  WebText,
  RepositorioText,
}: Props) {
  return (
    <>
      <article className="container-fluid bg-dark text-white text-start mb-3 py-4">
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
        <BtnUrlBlank url={VideoLink}>{VideoText}</BtnUrlBlank>
        <BtnUrlBlank url={WebLink}>{WebText}</BtnUrlBlank>
        <BtnUrlBlank url={RepositorioLink}>{RepositorioText}</BtnUrlBlank>
      </article>
    </>
  );
}

export default Proyecto;
