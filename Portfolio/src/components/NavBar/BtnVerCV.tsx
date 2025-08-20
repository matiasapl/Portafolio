type Props = {
  children: string;
  verCV: string;
};

function BtnVerCV({ children, verCV }: Props) {
  return (
    <button
      type="button"
      className="btn btn-primary mx-3 text-nowrap"
      onClick={() => {
        window.open(verCV, "_blank");
      }}
    >
      {children}
    </button>
  );
}

export default BtnVerCV;
