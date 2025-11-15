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
      <article className="text-white font-bold p-2 m-2 border-white box-border border-2 w-fit">
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
        <div className="flex gap-2 mt-4">
          <BtnUrlBlank url={VideoLink}>{VideoText}</BtnUrlBlank>
          <BtnUrlBlank url={WebLink}>{WebText}</BtnUrlBlank>
          <BtnUrlBlank url={RepositorioLink}>{RepositorioText}</BtnUrlBlank>
        </div>
      </article>
    </>
  );
}

export default Proyecto;
