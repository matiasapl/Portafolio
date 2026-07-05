type Props = {
  children: string;
  GoTo: string;
};

function BtnVerCV({ children, GoTo }: Props) {
  const scrollToSection = () => {
    const target = document.getElementById(GoTo);
    if (!target) return;

    // 1. Definimos el margen superior que queremos dejar (ej: 80px para scroll-mt-20)
    const offset = 80;

    // 2. Calculamos la posición final restando el offset
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 600;
    let startTimestamp: number | null = null;

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = ease(elapsed, startPosition, distance, duration);

      window.scrollTo(0, progress);

      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <button
      type="button"
      className="m-4 p-2 text-indigo-600 cursor-pointer flex items-center space-x-2 active:scale-95 outline outline-amber-200 text-shadow-amber-200 text-shadow-2xs"
      onClick={scrollToSection}
    >
      <strong>{children}</strong>
    </button>
  );
}
export default BtnVerCV;
