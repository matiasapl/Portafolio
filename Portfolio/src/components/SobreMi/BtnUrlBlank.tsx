import type { ReactNode } from "react";

type Props = {
  children: string;
  url: string;
  icono: ReactNode;
};

function BtnUrlBlank({ children, url, icono }: Props) {
  return (
    <button
      type="button"
      className="m-4 p-2 bg-blue-950 text-white cursor-pointer flex items-center space-x-2 active:scale-95"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <span>{icono}</span>
      <strong>{children}</strong>
    </button>
  );
}

export default BtnUrlBlank;