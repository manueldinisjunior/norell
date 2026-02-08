import { NavLink } from "react-router-dom";
import { ButtonLink } from "./Button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Speisekarte", to: "/menu" },
  { label: "Über uns", to: "/about" },
  { label: "Kontakt", to: "/kontakt" },
  { label: "Impressum", to: "/impressum" }
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur">
      <div className="border-b border-sage-100">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs text-cocoa">
          <span>Wollenweberstraße 35, 31134 Hildesheim</span>
          <span>Geöffnet, schließt um 16:00.</span>
          <a className="font-semibold text-sage-700" href="tel:+4951212811555">
            +49 5121 2811555
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Norell’s Café" className="h-10 w-10 rounded-2xl" loading="lazy" />
          <div>
            <p className="font-serif text-lg">Norell’s Café</p>
            <p className="text-xs text-cocoa">Brunch & Kaffee</p>
          </div>
        </NavLink>
        <nav className="hidden items-center gap-2 rounded-full border border-sage-100 bg-white/70 px-3 py-2 text-sm shadow-soft md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-sage-500 text-white"
                    : "text-cocoa hover:text-sage-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href="/menu" variant="primary">
            Menü ansehen
          </ButtonLink>
          <ButtonLink href="tel:+4951212811555" variant="secondary" className="hidden md:inline-flex">
            Anrufen
          </ButtonLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
