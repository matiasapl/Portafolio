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
      <article className="text-white font-bold gap-4 p-4 border-fuchsia-500 box-border border-2 w-[calc(50%-1rem)]">
        <h1 className="text-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500">
          {titulo}
        </h1>
        <p className="text-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500">
          {descripcion}
        </p>
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
