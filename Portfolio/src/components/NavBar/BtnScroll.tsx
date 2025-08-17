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
      className="btn btn-primary mx-3 text-nowrap"
      onClick={() => scrollToSection(GoTo)}
    >
      {children}
    </button>
  );
}
export default BtnVerCV;
