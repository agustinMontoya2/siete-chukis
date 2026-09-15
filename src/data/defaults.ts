export const SITE_DEFAULTS = {
  hero: {
    logoImage: "/logo.jpg",
    brandName: "Los Siete Chukis",
    brandSubtitle: "Heladería Artesanal",
    tagline: "¡Dulzura y Sabor!",
    scrollHint: "Descubrí nuestros sabores",
  },
  shipping: {
    title: "Envíos",
    subtitle: "Llevamos tu helado",
    rows: [
      { label: "Envío estándar", price: "$1.000" },
      { label: "Envío día de lluvia", price: "$1.100" },
    ],
    note: "* Consultá zonas de cobertura por WhatsApp",
  },
  location: {
    address: "Primero de Mayo 798",
    city: "Loma Hermosa",
    hours: [
      { day: "Mar a Dom", value: "17:00 - 23:00" },
      { day: "Lunes", value: "cerrado" },
    ],
    title: "Encontranos",
    subtitle: "Dónde estamos",
    shippingLabel: "Zona de envío:",
    shippingZone: "Loma Hermosa y alrededores",
    mapsButton: "Cómo llegar",
    mapsUrl: "https://maps.google.com/?q=Primero+de+Mayo+798+Loma+Hermosa",
  },
  cta: {
    title: "¿Te antojaste?",
    subtitle:
      "Hacé tu pedido por WhatsApp o seguinos en Instagram para ver nuestros sabores del día.",
    whatsappButton: "Pedir por WhatsApp",
    instagramButton: "Seguinos en Instagram",
    phones: ["5491161367871", "5491127304412"],
    instagram: "https://www.instagram.com/los_sietechukis/",
  },
  seo: {
    metaTitle: "Los Siete Chukis — Heladería de Terror",
    metaDescription:
      "Heladería artesanal con temática de terror. Helados artesanales, milkshakes, tortas, toppings y bebidas. Precios por cantidad y envíos a domicilio.",
  },
  products: {
    fallbackImage: "/products/default.webp",
  },
};

export const PRECIOS_DEFAULTS = {
  title: "Precios",
  panels: [
    {
      title: "Helados",
      sections: [
        {
          label: "Por Bocha",
          spaced: false,
          items: [
            { name: "1 bocha", price: "2500" },
            { name: "2 bochas", price: "3000" },
            { name: "3 bochas", price: "3500" },
          ],
        },
        {
          label: "Por Cantidad",
          spaced: true,
          items: [
            { name: "1 kg", price: "13000" },
            { name: "1/2 kg", price: "7000" },
            { name: "1/4 kg", price: "4300" },
          ],
        },
      ],
    },
    {
      title: "Agregados",
      sections: [
        {
          label: "Salsas para helado",
          spaced: false,
          items: [
            { name: "Salsa Chocolate", price: "500" },
            { name: "Salsa Frutilla", price: "500" },
          ],
        },
        {
          label: "Toppings para milkshake",
          spaced: true,
          items: [
            { name: "Sprinkles", price: "1000" },
            { name: "Chantilly", price: "1000" },
            { name: "Granola", price: "1000" },
            { name: "Chips Chocolate", price: "1000" },
            { name: "Cereza", price: "1000" },
            { name: "Banana", price: "1000" },
          ],
        },
      ],
    },
    {
      title: "Milkshakes",
      sections: [
        {
          label: "",
          spaced: false,
          items: [
            { name: "Milkshake base", price: "3800" },
            { name: "Con crema", price: "4500" },
          ],
        },
      ],
    },
    {
      title: "Tortas",
      sections: [
        {
          label: "",
          spaced: false,
          items: [{ name: "Torta cualquier sabor", price: "26000" }],
        },
      ],
    },
    {
      title: "Promos",
      highlighted: true,
      sections: [
        {
          label: "",
          spaced: false,
          items: [
            { name: "2 kg", price: "25500" },
            { name: "1 kg + 1/2 kg", price: "19600" },
            { name: "1 kg + 1/4 kg", price: "17000" },
            { name: "1/2 kg + 1/2 kg", price: "13600" },
            { name: "1/2 kg + 1/4 kg", price: "11000" },
            { name: "1/4 kg + 1/4 kg", price: "8600" },
          ],
        },
      ],
    },
  ],
};
