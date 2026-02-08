import { Helmet } from "react-helmet-async";
import { ButtonLink } from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";

const values = [
  {
    title: "Qualität & Frische",
    description: "Wir arbeiten mit regionalen Lieferanten und backen täglich frisch."
  },
  {
    title: "Gemütlichkeit",
    description: "Unser Café ist ein ruhiger Rückzugsort für lange Gespräche und Genuss."
  },
  {
    title: "Inklusivität",
    description: "Alle sind willkommen – Familien, Hunde und alle, die gutes Essen lieben."
  }
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>Über uns | Norell’s Café</title>
        <meta
          name="description"
          content="Unsere Geschichte: wie Norell’s Café in Hildesheim zu einem Ort für Brunch, Kaffee und Herzlichkeit wurde."
        />
      </Helmet>

      <section className="overflow-hidden rounded-3xl border border-sage-100 bg-white/70 shadow-soft">
        <img
          src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=1200&q=80"
          alt="Innenraum des Cafés"
          className="h-64 w-full object-cover"
          loading="lazy"
        />
        <div className="px-6 py-8 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-200">Unsere Geschichte</p>
          <h1 className="mt-3 font-serif text-4xl text-charcoal">Unsere Geschichte</h1>
          <p className="mt-4 max-w-2xl text-sm text-cocoa">
            Norell’s Café entstand aus der Idee, einen warmen Treffpunkt für Hildesheim zu schaffen.
            Wir lieben ehrliches Essen, besondere Kaffee-Momente und das Gefühl, einfach anzukommen.
          </p>
        </div>
      </section>

      <Section title="Wofür wir stehen" description="Unsere Werte sind die Basis für jedes Frühstück." >
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title}>
              <h3 className="font-serif text-xl">{value.title}</h3>
              <p className="mt-2 text-sm text-cocoa">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sage-500">Kontakt</p>
            <h2 className="mt-2 font-serif text-2xl">Lernen Sie uns persönlich kennen.</h2>
          </div>
          <ButtonLink href="/kontakt" variant="primary">
            Kontakt
          </ButtonLink>
        </Card>
      </Section>
    </>
  );
};

export default About;
