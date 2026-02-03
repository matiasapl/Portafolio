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
      className="m-4 p-2 bg-transparent text-white cursor-pointer border-solid border-indigo-900 border-2 hover:bg-indigo-900 active:scale-95"
      onClick={() => scrollToSection(GoTo)}
    >
      <strong>{children}</strong>
    </button>
  );
}
export default BtnVerCV;
