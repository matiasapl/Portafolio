type Props = {
  children: string;
  url: string;
};

function BtnUrlBlank({ children, url }: Props) {
  return (
    <button
      type="button"
      className="btn btn-primary mx-3 text-nowrap"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      {children}
    </button>
  );
}

export default BtnUrlBlank;
