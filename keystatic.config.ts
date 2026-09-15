import { config, singleton, fields } from "@keystatic/core";

const storage =
  process.env.NODE_ENV === "development"
    ? ({ kind: "local" } as const)
    : ({ kind: "cloud" } as const);

const sectionSchema = {
  title: fields.text({ label: "Título" }),
  order: fields.number({ label: "Orden", defaultValue: 1 }),
  visible: fields.checkbox({ label: "Visible", defaultValue: true }),
  products: fields.array(
    fields.object({
      name: fields.text({ label: "Nombre" }),
      category: fields.text({ label: "Categoría" }),
      badge: fields.text({ label: "Badge (opcional)" }),
      price: fields.text({ label: "Precio (opcional)" }),
      imageUrl: fields.image({
        label: "Imagen del producto",
        directory: "public",
        publicPath: "/",
      }),
    }),
    { label: "Productos", itemLabel: (p) => p.fields.name.value },
  ),
};

export default config({
  ui: { brand: { name: "Los Siete Chukis" } },
  storage,
  cloud: { project: "siete-chukis-team/siete-chukis" },
  singletons: {
    site: singleton({
      label: "Ajustes del sitio",
      path: "src/content/site/",
      format: "yaml",
      schema: {
        hero: fields.object(
          {
            logoImage: fields.image({
              label: "Logo",
              directory: "public",
              publicPath: "/",
            }),
            brandName: fields.text({
              label: "Nombre del local",
              defaultValue: "Los Siete Chukis",
            }),
            brandSubtitle: fields.text({
              label: "Subtítulo",
              defaultValue: "Heladería Artesanal",
            }),
            tagline: fields.text({
              label: "Frase principal",
              defaultValue: "¡Dulzura y Sabor!",
            }),
            scrollHint: fields.text({
              label: "Texto indicador",
              defaultValue: "Descubrí nuestros sabores",
            }),
          },
          { label: "Pantalla principal" },
        ),
        shipping: fields.object(
          {
            title: fields.text({
              label: "Título",
              defaultValue: "Envíos",
            }),
            subtitle: fields.text({
              label: "Subtítulo",
              defaultValue: "Llevamos tu helado",
            }),
            rows: fields.array(
              fields.object({
                label: fields.text({ label: "Opción de envío" }),
                price: fields.text({ label: "Precio" }),
              }),
              {
                label: "Opciones de envío",
                itemLabel: (p) =>
                  `${p.fields.label.value} - ${p.fields.price.value}`,
              },
            ),
            note: fields.text({
              label: "Nota al pie",
              defaultValue: "* Consultá zonas de cobertura por WhatsApp",
            }),
          },
          { label: "Envíos" },
        ),
        location: fields.object(
          {
            address: fields.text({
              label: "Dirección",
              defaultValue: "Primero de Mayo 798",
            }),
            city: fields.text({
              label: "Ciudad",
              defaultValue: "Loma Hermosa",
            }),
            hours: fields.array(
              fields.object({
                day: fields.text({ label: "Día" }),
                value: fields.text({ label: "Horario" }),
              }),
              {
                label: "Horarios",
                itemLabel: (p) =>
                  `${p.fields.day.value}: ${p.fields.value.value}`,
              },
            ),
            title: fields.text({
              label: "Título sección",
              defaultValue: "Encontranos",
            }),
            subtitle: fields.text({
              label: "Subtítulo",
              defaultValue: "Dónde estamos",
            }),
            shippingLabel: fields.text({
              label: "Texto zona de envío",
              defaultValue: "Zona de envío:",
            }),
            shippingZone: fields.text({
              label: "Zona de envío",
              defaultValue: "Loma Hermosa y alrededores",
            }),
            mapsButton: fields.text({
              label: "Texto del botón",
              defaultValue: "Cómo llegar",
            }),
            mapsUrl: fields.text({
              label: "Link de Google Maps",
              defaultValue:
                "https://maps.google.com/?q=Primero+de+Mayo+798+Loma+Hermosa",
            }),
          },
          { label: "Ubicación" },
        ),
        cta: fields.object(
          {
            title: fields.text({
              label: "Título",
              defaultValue: "¿Te antojaste?",
            }),
            subtitle: fields.text({
              label: "Subtítulo",
              defaultValue:
                "Hacé tu pedido por WhatsApp o seguinos en Instagram para ver nuestros sabores del día.",
            }),
            whatsappButton: fields.text({
              label: "Texto botón WhatsApp",
              defaultValue: "Pedir por WhatsApp",
            }),
            instagramButton: fields.text({
              label: "Texto botón Instagram",
              defaultValue: "Seguinos en Instagram",
            }),
            phones: fields.array(fields.text({ label: "Teléfono" }), {
              label: "Teléfonos WhatsApp",
            }),
            instagram: fields.text({
              label: "Link de Instagram",
              defaultValue: "https://www.instagram.com/los_sietechukis/",
            }),
          },
          { label: "Botones de contacto" },
        ),
        products: fields.object(
          {
            fallbackImage: fields.image({
              label: "Imagen por defecto",
              directory: "public",
              publicPath: "/",
            }),
          },
          { label: "Productos" },
        ),
        seo: fields.object(
          {
            metaTitle: fields.text({
              label: "Título (SEO)",
              defaultValue: "Los Siete Chukis — Heladería de Terror",
            }),
            metaDescription: fields.text({
              label: "Descripción (SEO)",
              defaultValue: "Heladería artesanal con temática de terror.",
            }),
          },
          { label: "Buscadores (SEO)" },
        ),
      },
    }),
    helados: singleton({
      label: "Helados",
      path: "src/content/sections/helados/",
      format: "yaml",
      schema: sectionSchema,
    }),
    milkshakes: singleton({
      label: "Milkshakes",
      path: "src/content/sections/milkshakes/",
      format: "yaml",
      schema: sectionSchema,
    }),
    tortas: singleton({
      label: "Tortas",
      path: "src/content/sections/tortas/",
      format: "yaml",
      schema: sectionSchema,
    }),
    otros: singleton({
      label: "Otros",
      path: "src/content/sections/otros/",
      format: "yaml",
      schema: sectionSchema,
    }),
    pricing: singleton({
      label: "Precios",
      path: "src/content/pricing/",
      format: "yaml",
      schema: {
        title: fields.text({
          label: "Título sección",
          defaultValue: "Precios",
        }),
        panels: fields.array(
          fields.object({
            title: fields.text({ label: "Título del panel" }),
            highlighted: fields.checkbox({
              label: "Resaltado",
              defaultValue: false,
            }),
            sections: fields.array(
              fields.object({
                label: fields.text({ label: "Subcategoría" }),
                spaced: fields.checkbox({
                  label: "Separador visual",
                  defaultValue: false,
                }),
                items: fields.array(
                  fields.object({
                    name: fields.text({ label: "Nombre" }),
                    price: fields.text({ label: "Precio ($)" }),
                  }),
                  {
                    label: "Productos",
                    itemLabel: (p) =>
                      `${p.fields.name.value} - $${p.fields.price.value}`,
                  },
                ),
              }),
              {
                label: "Subcategorías",
                itemLabel: (p) => p.fields.label.value,
              },
            ),
          }),
          { label: "Paneles", itemLabel: (p) => p.fields.title.value },
        ),
      },
    }),
  },
});
