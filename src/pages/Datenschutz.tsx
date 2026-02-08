import { Helmet } from "react-helmet-async";
import Section from "../components/Section";

const Datenschutz = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutz | Norell’s Café</title>
        <meta name="description" content="Datenschutzerklärung von Norell’s Café." />
      </Helmet>

      <Section title="Datenschutz" description="Datenschutzerklärung (Platzhalter).">
        <div className="space-y-6 text-sm text-cocoa">
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie über
            die Art, den Umfang und Zweck der Verarbeitung personenbezogener Daten auf dieser Website.
          </p>
          <p>
            Personenbezogene Daten werden nur im technisch notwendigen Umfang erhoben. Eine Weitergabe an Dritte
            erfolgt nicht ohne Ihre ausdrückliche Zustimmung.
          </p>
          <p>
            Bitte wenden Sie sich bei Fragen zum Datenschutz an uns: hallo@norells-cafe.de.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Datenschutz;
