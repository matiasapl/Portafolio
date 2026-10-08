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
    <article className="project-card">
      <div>
        <h3 className="project-title">{titulo}</h3>
        <div className="project-description">{descripcion}</div>
      </div>

      {/* Renderizado condicional: solo muestra el div si hay al menos un link */}
      {(VideoLink || WebLink || RepositorioLink) && (
        <div className="project-actions">
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
