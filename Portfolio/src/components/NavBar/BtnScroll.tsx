type Props = {
  children: string;
  GoTo: string;
};

function BtnVerCV({ children, GoTo }: Props) {
  const scrollToSection = () => {
    const target = document.getElementById(GoTo);
    if (!target) return;
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  };

  return (
    <button
      type="button"
      className="nav-link"
      onClick={scrollToSection}
    >
      <strong>{children}</strong>
    </button>
  );
}
export default BtnVerCV;
