import { Helmet } from "react-helmet-async";
import Accordion from "../components/Accordion";
import Card from "../components/Card";
import Section from "../components/Section";
import Tabs from "../components/Tabs";
import { menuTabs } from "../data/menu";

const Menu = () => {
  const items = menuTabs.map((section) => ({
    label: section.title === "Brotstücke" ? "Brotstücke" : section.title,
    content: (
      <div>
        {section.subtitle && (
          <p className="text-sm italic text-cocoa">{section.subtitle}</p>
        )}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <Card key={item.name} className="relative">
              {item.highlight && (
                <span className="absolute right-6 top-6 rounded-full bg-sage-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sage-700">
                  {item.highlight}
                </span>
              )}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl">{item.name}</h3>
                  {item.description && (
                    <p className="mt-2 text-sm text-cocoa">{item.description}</p>
                  )}
                </div>
                <span className="text-sm font-semibold text-sage-700">{item.price}</span>
              </div>
              {item.details && item.details.length > 0 && (
                <Accordion title="Details">
                  <ul className="list-disc space-y-1 pl-5">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </Accordion>
              )}
            </Card>
          ))}
        </div>
      </div>
    )
  }));

  return (
    <>
      <Helmet>
        <title>Speisekarte | Norell’s Café</title>
        <meta
          name="description"
          content="Die Speisekarte von Norell’s Café: Frühstück, Brotstücke, Extras, Kaffee, Tee und Kaltgetränke."
        />
      </Helmet>

      <Section
        eyebrow="Speisekarte"
        title="Handverlesene Köstlichkeiten"
        description="Vegetarisch, frisch und mit viel Liebe zubereitet."
      >
        <Tabs items={items} />
      </Section>
    </>
  );
};

export default Menu;
