import { Helmet } from "react-helmet-async";
import Section from "../components/Section";

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum | Norell’s Café</title>
        <meta name="description" content="Impressum von Norell’s Café in Hildesheim." />
      </Helmet>

      <Section title="Impressum" description="Angaben gemäß § 5 TMG.">
        <div className="space-y-6 text-sm text-cocoa">
          <div>
            <p className="font-semibold text-charcoal">Norell’s Café</p>
            <p>Wollenweberstraße 35</p>
            <p>31134 Hildesheim</p>
          </div>
          <div>
            <p>Telefon: +49 5121 2811555</p>
            <p>E-Mail: hallo@norells-cafe.de</p>
          </div>
          <div>
            <p className="font-semibold text-charcoal">Vertreten durch</p>
            <p>Inhaber:in Norell’s Café</p>
          </div>
          <div>
            <p className="font-semibold text-charcoal">Haftungshinweis</p>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Impressum;
