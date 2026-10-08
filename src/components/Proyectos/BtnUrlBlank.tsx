type Props = {
  children: string;
  url: string;
};

function BtnUrlBlank({ children, url }: Props) {
  // Determina si el botón debe estar deshabilitado (si la URL está vacía)
  const isDisabled = url === "";

  if (isDisabled) {
    return (
      <button className="action-link" type="button" disabled>
        <strong>{children}</strong>
      </button>
    );
  }

  return (
    <a className="action-link" href={url} target="_blank" rel="noreferrer">
      <strong>{children}</strong>
    </a>
  );
}

export default BtnUrlBlank;
