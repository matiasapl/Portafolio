import type { ReactNode } from "react";

type Props = {
  foto: ReactNode;
  texto: string;
};

function Tecnologia({ foto, texto }: Props) {
  return (
    <article className="technology-item">
      <span className="technology-icon" aria-hidden="true">
        {foto}
      </span>
      <span className="technology-name">{texto}</span>
    </article>
  );
}

export default Tecnologia;
