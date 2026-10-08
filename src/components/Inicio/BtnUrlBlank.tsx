import type { ReactNode } from "react";

type Props = {
  children: string;
  url: string;
  icono: ReactNode;
};

function BtnUrlBlank({ children, url, icono }: Props) {
  return (
    <a className="contact-link" href={url} target="_blank" rel="noreferrer">
      <span aria-hidden="true">{icono}</span>
      <strong>
        {children}
      </strong>
    </a>
  );
}

export default BtnUrlBlank;
