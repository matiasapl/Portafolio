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
      className="m-4 p-2 text-indigo-600 cursor-pointer flex items-center space-x-2 active:scale-95 outline outline-amber-200"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <span>{icono}</span>
      <strong className="text-indigo-600 text-shadow-amber-200 text-shadow-2xs">
        {children}
      </strong>
    </button>
  );
}

export default BtnUrlBlank;
