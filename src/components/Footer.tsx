import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-sage-100 bg-charcoal text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Norell’s Café</p>
          <p className="mt-3 text-sm text-cream/80">
            Ihr Wohnzimmer in Hildesheim. Frisch, hausgemacht und immer mit einem Lächeln serviert.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/60">
            Öffnungszeiten
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>Mo – So: 09:00 – 16:00</li>
            <li>Frühstück bis 12:00 Uhr</li>
            <li>Geöffnet, schließt um 16:00</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/60">Kontakt</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>Wollenweberstraße 35, 31134 Hildesheim</li>
            <li>
              <a className="hover:text-cream" href="tel:+4951212811555">
                +49 5121 2811555
              </a>
            </li>
            <li>Social: Instagram · Facebook</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-xs text-cream/60">
          <span>© 2024 Norell’s Café. Alle Rechte vorbehalten.</span>
          <div className="flex gap-4">
            <NavLink className="hover:text-cream" to="/impressum">
              Impressum
            </NavLink>
            <NavLink className="hover:text-cream" to="/datenschutz">
              Datenschutz
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
