import type { ReactNode } from "react";

type Props = {
  foto: ReactNode;
  texto: string;
};

function Tecnologia({ foto, texto }: Props) {
  return (
    <>
      <article className="text-indigo-600 box-border text-center p-4 m-4 mb-4 w-24 flex flex-col items-center justify-center">
        <strong>{foto}</strong>
        <h1 className="block text-lg font-light mt-1 text-Gray-800">
          {texto}
        </h1>
      </article>
    </>
  );
}

export default Tecnologia;
