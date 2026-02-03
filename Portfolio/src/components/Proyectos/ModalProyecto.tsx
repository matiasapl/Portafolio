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
      <article className="flex flex-col text-white font-bold gap-4 p-4 border-fuchsia-500 box-border border-2 w-[calc(50%-1rem)] min-h-[300px]">
        {/* 1. Añadimos flex-col y una altura mínima (min-h) */}

        <div>
          <h1 className="text-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500 flex text-2xl">
            {titulo}
          </h1>
          <div className="text-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500 font-normal">
            {descripcion}
          </div>
        </div>

        {/* 2. Usamos mt-auto para empujar hacia abajo y justify-end para la derecha */}
        <div className="flex justify-end gap-2 mt-auto">
          <BtnUrlBlank url={VideoLink}>{VideoText}</BtnUrlBlank>
          <BtnUrlBlank url={WebLink}>{WebText}</BtnUrlBlank>
          <BtnUrlBlank url={RepositorioLink}>{RepositorioText}</BtnUrlBlank>
        </div>
      </article>
    </>
  );
}

export default Proyecto;
