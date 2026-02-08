export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  details?: string[];
  highlight?: string;
};

export type MenuSection = {
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menuTabs: MenuSection[] = [
  {
    title: "Frühstück & Brunch",
    subtitle: "Frühstück 9:00–12:00 Uhr",
    items: [
      {
        name: "Käsevielfalt",
        price: "14,00 €",
        description: "Auswahl feiner Käsesorten, dazu 2 Brötchen, Obst & Salatbouquet.",
        details: [
          "Gouda (2 Scheiben)",
          "Emmentaler (2 Stück)",
          "Brie",
          "Camembert",
          "Tomate-Mozzarella",
          "hausgemachte Marmelade",
          "hausgemachter Tomatensalat",
          "Butter"
        ]
      },
      {
        name: "Fleischliebhaber",
        price: "13,00 €",
        description: "Wurstspezialitäten + Gewürzgurken, dazu 2 Brötchen, Obst & Salatbouquet.",
        details: [
          "Salami",
          "Serrano-Schinken",
          "Mortadella",
          "Putenbrust",
          "Fleischsalat",
          "hausgemachter Tomatensalat",
          "Butter"
        ]
      },
      {
        name: "Vegetarischer Genuss",
        price: "13,00 €",
        description: "leichtes vegetarisches Frühstück, dazu 2 Brötchen, Obst & Salatbouquet.",
        details: [
          "gefüllte Avocado mit Frischkäse",
          "Tomate-Mozzarella",
          "Pistazienpesto",
          "Antipasti",
          "gekochtes Ei (halbiert)",
          "hausgemachter Tomatensalat",
          "Butter"
        ]
      },
      {
        name: "Süße Versuchung",
        price: "11,00 €",
        description: "süßes Frühstück mit belgischer Waffel + Croissant, Obst der Saison.",
        details: ["Schokoladenaufstrich", "Honig", "hausgemachte Marmelade", "Butter"]
      },
      {
        name: "Frühstück für Zwei",
        price: "24,00 €",
        description: "zum Teilen, Käse + Wurst + süß, dazu 4 Brötchen, Obst & Salatbouquet.",
        details: [
          "Gouda (2 Scheiben)",
          "Emmentaler (2 Stück)",
          "Camembert",
          "Salami (2 Scheiben)",
          "Mortadella (2 Scheiben)",
          "Fleischsalat",
          "Tomate-Mozzarella",
          "Honig",
          "Butter"
        ],
        highlight: "Empfehlung"
      }
    ]
  },
  {
    title: "Brotstücke",
    subtitle: "Brotstücke der besonderen Art",
    items: [
      {
        name: "Avocado-Ei Brotstück",
        price: "12,00 €",
        description: "Avocado/Guacamole + 2 pochierte Eier; Obst & Salatbouquet."
      },
      {
        name: "Veganes Brotstück",
        price: "12,00 €",
        description:
          "veganer Aufstrich, Rucola, Avocado, hausgemachter Tomatensalat, Kichererbsen, Walnüsse; Obst & Salatbouquet."
      },
      {
        name: "Mozzarella-Brotstück",
        price: "12,00 €",
        description:
          "Pesto, Rucola, hausgemachter Tomatensalat, Mozzarella, Balsamicocreme, Lauchzwiebeln, Walnüsse; Obst & Salatbouquet."
      },
      {
        name: "Feiner Frühstücksmix",
        price: "14,00 €",
        description: "Mix aus Käse/Wurst/süß; dazu 2 Brötchen, Obst & Salatbouquet.",
        details: [
          "Gouda",
          "Brie",
          "Salami",
          "Mortadella",
          "Schokoladenaufstrich",
          "hausgemachte Marmelade",
          "hausgemachter Tomatensalat",
          "Butter"
        ]
      }
    ]
  },
  {
    title: "Extras",
    items: [
      { name: "Gekochtes Ei", price: "1,50 €" },
      { name: "Rührei (3 Eier, mit Schnittlauch)", price: "5,00 €" },
      { name: "Spiegelei", price: "2,00 €" },
      { name: "Extra Brötchen", price: "1,00 €" },
      { name: "Croissant", price: "2,00 €" },
      { name: "Butter", price: "0,50 €" },
      { name: "Hausgemachte Marmelade", price: "1,50 €" },
      { name: "Honig", price: "1,50 €" }
    ]
  },
  {
    title: "Kaffee & Tee",
    items: [
      { name: "Café Crema", price: "3,00 €" },
      { name: "Filterkaffee klein", price: "3,00 €" },
      { name: "Filterkaffee groß", price: "4,00 €" },
      { name: "Milchkaffee", price: "4,50 €" },
      { name: "Cappuccino", price: "3,50 €" },
      { name: "Latte Macchiato", price: "4,50 €" },
      { name: "Doppelter Espresso", price: "4,00 €" },
      { name: "Doppelter Espresso Macchiato", price: "4,50 €" },
      { name: "Kakao", price: "4,00 €" },
      { name: "Kanne frischer Ingwertee", price: "5,00 €" },
      { name: "Kanne frischer Minztee", price: "5,00 €" },
      { name: "Verschiedene Teesorten/Teebeutel", price: "3,50 €" },
      { name: "Mandelmilch", price: "0,50 €" },
      { name: "Hafermilch", price: "0,50 €" },
      {
        name: "Sirup (Vanille/Karamell/Pralinenuss/Haselnuss)",
        price: "1,00 €"
      }
    ]
  },
  {
    title: "Kaltgetränke & Alkohol",
    items: [
      { name: "Mineralwasser klein 0,25l", price: "3,00 €" },
      { name: "Mineralwasser groß 0,75l", price: "6,50 €" },
      { name: "Stilles Wasser klein 0,25l", price: "3,00 €" },
      { name: "Stilles Wasser groß 0,75l", price: "6,50 €" },
      { name: "Coca Cola | Coca Cola Zero | Sprite | Fanta 0,2l", price: "3,00 €" },
      { name: "Orangensaft Granini 0,2l", price: "3,50 €" },
      { name: "Apfelsaft Granini 0,2l", price: "3,50 €" },
      { name: "Rhabarberschorle 0,25l", price: "3,50 €" },
      { name: "Johannisbeerschorle 0,25l", price: "3,50 €" },
      { name: "Apfelschorle 0,25l", price: "3,50 €" },
      { name: "Sekt 0,2l Fl.", price: "6,50 €" },
      { name: "Prosecco 0,2l Fl.", price: "6,50 €" },
      { name: "Alkoholfreies Bier 0,33l Fl.", price: "3,50 €" },
      { name: "Pils 0,33l Fl.", price: "3,50 €" },
      { name: "Hefeweizen alkoholfrei 0,33l Fl.", price: "3,50 €" },
      { name: "Hefeweizen 0,33l Fl.", price: "3,50 €" }
    ]
  }
];
