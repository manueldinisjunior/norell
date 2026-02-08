import { Helmet } from "react-helmet-async";
import { ButtonLink } from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";

const Kontakt = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt | Norell’s Café</title>
        <meta
          name="description"
          content="Besuchen Sie Norell’s Café in Hildesheim. Adresse, Öffnungszeiten und Kontaktmöglichkeiten."
        />
      </Helmet>

      <Section title="Besuchen Sie uns." description="Genießen Sie handverlesenen Kaffee und hausgemachtes Gebäck in entspannter Atmosphäre.">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-sage-100 bg-white/70 shadow-soft">
            <iframe
              title="Karte Norell’s Café"
              className="h-80 w-full"
              loading="lazy"
              src="https://maps.google.com/maps?q=Wollenweberstra%C3%9Fe%2035%2C%2031134%20Hildesheim&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>
          <div className="space-y-4">
            <Card>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl">Öffnungszeiten</h3>
                <span className="rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold text-sage-700">
                  Jetzt geöffnet
                </span>
              </div>
              <p className="mt-3 text-sm text-cocoa">Montag — Sonntag</p>
              <p className="text-sm font-semibold">09:00 – 16:00</p>
              <p className="mt-2 text-xs text-cocoa">Frühstück täglich von 9:00–12:00 Uhr.</p>
            </Card>
            <Card>
              <h3 className="font-serif text-xl">Kontakt</h3>
              <div className="mt-3 space-y-2 text-sm text-cocoa">
                <p>Wollenweberstraße 35, 31134 Hildesheim</p>
                <p>+49 5121 2811555</p>
                <p>Dine-in · Takeaway (keine Lieferung)</p>
                <p>Preisrange: €10–20</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink href="tel:+4951212811555" variant="primary">
                  Anrufen
                </ButtonLink>
                <ButtonLink
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                >
                  Route planen
                </ButtonLink>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Kontakt;
