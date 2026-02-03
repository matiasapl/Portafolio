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
      className="m-4 p-2 bg-indigo-900 text-white cursor-pointer flex items-center space-x-2 active:scale-95 bg-linear-to-r from-violet-500 to-fuchsia-500 hover:bg-linear-to-bl"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <span>{icono}</span>
      <strong className="text-white">{children}</strong>
    </button>
  );
}

export default BtnUrlBlank;
