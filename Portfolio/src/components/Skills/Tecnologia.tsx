import type { ReactNode } from "react";

type Props = {
  foto: ReactNode;
  texto: string;
};

function Tecnologia({ foto, texto }: Props) {
  return (
    <>
      <article className=" text-white border-violet-500  box-border text-center border-2 p-2 mb-4 w-24 flex flex-col items-center justify-center">
        <strong>{foto}</strong>
        <h1 className="block text-xs font-bold mt-1 text-transparent bg-clip-text bg-linear-to-t from-cyan-500 to-blue-500">
          {texto}
        </h1>
      </article>
    </>
  );
}

export default Tecnologia;
