type Props = {
  children: string;
  GoTo: string;
};

function BtnVerCV({ children, GoTo }: Props) {
  const scrollToSection = (GoTo: string) => {
    document.getElementById(GoTo)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      type="button"
      className="m-4 p-2 bg-transparent text-white cursor-pointer border-solid border-blue-950 border-2 hover:bg-blue-950 active:scale-95"
      onClick={() => scrollToSection(GoTo)}
    >
      <strong>{children}</strong>
    </button>
  );
}
export default BtnVerCV;
