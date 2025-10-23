export default function ScrollToSection({ targetId, children }) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollY = window.scrollY + rect.top;

      // 100 — это сдвиг вниз (можешь поменять на любое число)
      window.scrollTo({
        top: scrollY - window.innerHeight / 2 - 270,
        behavior: "smooth",
      });
    }
  };

  return (
    <button onClick={handleClick} className="cursor-pointer">
      {children}
    </button>
  );
}
