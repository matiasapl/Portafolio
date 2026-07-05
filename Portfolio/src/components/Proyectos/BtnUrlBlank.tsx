type Props = {
  children: string;
  url: string;
};

function BtnUrlBlank({ children, url }: Props) {
  // Determina si el botón debe estar deshabilitado (si la URL está vacía)
  const isDisabled = url === "";

  return (
    <button
      type="button"
      // Aplica la propiedad 'disabled' si la URL está vacía.
      disabled={isDisabled}
      // Abre el enlace SOLO si el botón NO está deshabilitado.
      onClick={
        !isDisabled
          ? () => {
              window.open(url, "_blank");
            }
          : undefined
      }
      // Clases de Tailwind CSS
      // Se utiliza una plantilla de cadena para aplicar estilos condicionales
      className={`
        m-4 p-2 text-white flex items-center space-x-2 
        transition-all duration-150 ease-in-out
        
        // Estilos cuando HABILITADO
        ${
          !isDisabled
            ? "text-indigo-600 cursor-pointer flex items-center space-x-2 active:scale-95 outline outline-amber-200"
            : // Estilos cuando DESHABILITADO
              "bg-gray-500 cursor-not-allowed"
        }
      `}
    >
      <strong className="text-indigo-600 text-shadow-amber-200 text-shadow-2xs">
        {children}
      </strong>
    </button>
  );
}

export default BtnUrlBlank;
