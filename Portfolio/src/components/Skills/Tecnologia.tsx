import type { ReactNode } from "react";

type Props = {
  foto: ReactNode;
  texto: string;
};

function Tecnologia({ foto, texto }: Props) {
  return (
    <>
      <article className="text-indigo-600 border-yellow-400 box-border text-center border-2 p-2 mb-4 w-24 flex flex-col items-center justify-center">
        <strong>{foto}</strong>
        <h1 className="block text-xs font-light mt-1 text-indigo-600">
          {texto}
        </h1>
      </article>
    </>
  );
}

export default Tecnologia;
