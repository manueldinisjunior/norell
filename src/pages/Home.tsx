import { Helmet } from "react-helmet-async";
import { ButtonLink } from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";

const highlights = [
  "Vegetarische Optionen",
  "Frisch zubereitet",
  "Hausgemachte Kuchen",
  "Hunde- & familienfreundlich",
  "€10–20"
];

const testimonials = [
  {
    quote: "Perfekter Start in den Tag – liebevoll angerichtet und unglaublich frisch.",
    name: "Sophie M."
  },
  {
    quote: "Der Kaffee ist hervorragend und die Atmosphäre so angenehm ruhig.",
    name: "Thomas W."
  },
  {
    quote: "Die Auswahl ist kreativ, trotzdem fühlt es sich herrlich unkompliziert an.",
    name: "Julia S."
  }
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Norell’s Café | Brunch in Hildesheim</title>
        <meta
          name="description"
          content="Brunch, Kaffee und hausgemachte Kuchen in Hildesheim. Vegetarisch, frisch und mit Liebe gemacht."
        />
      </Helmet>

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-500">
            Norell’s Café
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Brunch in Hildesheim – frisch, vegetarisch, mit Liebe gemacht.
          </h1>
          <p className="text-lg text-cocoa">
            Frühstück, Suppen, Kuchen, Kaffee in gemütlicher Atmosphäre.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/menu" variant="primary">
              Menü ansehen
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
        </div>
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-3xl border border-sage-100 bg-white/70 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
              alt="Gemütlicher Cafébereich"
              className="h-64 w-full object-cover"
              loading="lazy"
            />
            <div className="p-4 text-sm text-cocoa">Gemütliche Plätze für lange Frühstücke.</div>
          </div>
          <Card className="bg-sage-50/80">
            <p className="text-sm text-cocoa">"Der perfekte Ort für einen entspannten Vormittag mit der ganzen Familie."</p>
          </Card>
        </div>
      </section>

      <Section title="Highlights" description="Unsere Lieblingsgründe für Ihren Besuch.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item} className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center">
                ✶
              </span>
              <p className="font-medium">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Zeit für Frühstück" description="Frühstück täglich von 9:00–12:00 Uhr.">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card className="bg-sage-50/80">
            <p className="text-sm text-cocoa">Für Gruppen ab 6 Personen bitte kurz anrufen, damit wir alles perfekt vorbereiten können.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href="tel:+4951212811555" variant="primary">
                Jetzt anrufen
              </ButtonLink>
              <ButtonLink href="/kontakt" variant="secondary">
                Kontakt
              </ButtonLink>
            </div>
          </Card>
          <div className="overflow-hidden rounded-3xl border border-sage-100 bg-white/70 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80"
              alt="Frühstückstisch mit Kaffee und Croissant"
              className="h-56 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <Section title="Was unsere Gäste sagen" description="Auszüge aus den neuesten Bewertungen.">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="bg-white">
              <p className="text-sm text-cocoa">“{item.quote}”</p>
              <p className="mt-4 text-xs font-semibold text-sage-700">— {item.name}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Besuchen Sie uns" description="Wir freuen uns auf Ihren Besuch im Herzen von Hildesheim.">
        <Card className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-medium">Wollenweberstraße 35, 31134 Hildesheim</p>
            <p className="text-sm text-cocoa">Geöffnet, schließt um 16:00.</p>
          </div>
          <ButtonLink href="/kontakt" variant="primary">
            Kontakt
          </ButtonLink>
        </Card>
      </Section>
    </>
  );
};

export default Home;
