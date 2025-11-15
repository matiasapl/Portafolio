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
            ? "bg-blue-950 cursor-pointer active:scale-95 hover:bg-blue-800"
            : // Estilos cuando DESHABILITADO
              "bg-gray-500 cursor-not-allowed"
        }
      `}
    >
      {children}
    </button>
  );
}

export default BtnUrlBlank;
