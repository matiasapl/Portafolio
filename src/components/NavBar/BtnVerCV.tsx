type Props = {
  children: string;
  verCV: string;
};

function BtnVerCV({ children, verCV }: Props) {
  return (
    <button
      type="button"
      className="m-4 p-2 bg-transparent text-white cursor-pointer border-solid border-blue-950 border-2 hover:bg-blue-950 active:scale-95"
      onClick={() => {
        window.open(verCV, "_blank");
      }}
    >
      <strong>{children}</strong>
    </button>
  );
}

export default BtnVerCV;
