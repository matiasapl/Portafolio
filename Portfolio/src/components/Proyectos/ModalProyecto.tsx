import BtnUrlBlank from "./BtnUrlBlank";

type Props = {
  titulo: string;
  descripcion: React.ReactNode;
  // Añadimos '?' para que sean opcionales
  VideoLink?: string;
  WebLink?: string;
  RepositorioLink?: string;
  VideoText?: string;
  WebText?: string;
  RepositorioText?: string;
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
    <article className="flex flex-col text-white font-bold gap-4 p-4 border-yellow-400 border-2 w-[calc(50%-1rem)] min-h-[300px]">
      <div>
        <h1 className="text-indigo-600 text-shadow-amber-200 text-shadow-2xs">
          {titulo}
        </h1>
        <div className="text-indigo-600">{descripcion}</div>
      </div>

      {/* Renderizado condicional: solo muestra el div si hay al menos un link */}
      {(VideoLink || WebLink || RepositorioLink) && (
        <div className="flex justify-end gap-2 mt-auto">
          {VideoLink && (
            <BtnUrlBlank url={VideoLink}>{VideoText || "Video"}</BtnUrlBlank>
          )}
          {WebLink && (
            <BtnUrlBlank url={WebLink}>{WebText || "Web"}</BtnUrlBlank>
          )}
          {RepositorioLink && (
            <BtnUrlBlank url={RepositorioLink}>
              {RepositorioText || "GitHub"}
            </BtnUrlBlank>
          )}
        </div>
      )}
    </article>
  );
}

export default Proyecto;
