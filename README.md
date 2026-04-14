# 💦 Splash Norge – Shopify Vannpistol-butikk

Et komplett Shopify 2.0-tema designet for å selge vannpistoler og vannleker, med **17. mai-kampanje** og **sommerkampanje** innebygd.

## 🎨 Funksjoner

- **🇳🇴 17. mai-modus** – Rød, hvit og blå fargeskjema med norsk tema
- **☀️ Sommermodus** – Frisk vann-blå sommertemning
- **📱 Responsivt design** – Ser bra ut på alle enheter
- **🛒 Full handlekurvopplevelse** – Med fraktprogresjon og mengde-velger
- **⭐ Kundevurderinger** – Sosial bevis for konvertering
- **📧 Nyhetsbrev** – Bygg e-postlisten din
- **🚀 Optimalisert** – Rask lasting og SEO-vennlig

## 📁 Filstruktur

```
splash-store/
├── config/
│   ├── settings_schema.json    # Teminnstillinger (farger, fonter, kampanje)
│   └── settings_data.json      # Standardverdier
├── layout/
│   └── theme.liquid             # Hovedlayout
├── templates/
│   ├── index.json               # Forsiden
│   ├── product.json             # Produktside
│   ├── collection.json          # Kolleksjonsside
│   └── cart.json                # Handlekurvside
├── sections/
│   ├── header.liquid            # Header med kunngjøringsbanner
│   ├── footer.liquid            # Footer med sosiale medier
│   ├── hero-banner.liquid       # Hero-seksjon
│   ├── featured-collection.liquid  # Produktutstilling
│   ├── usp-banner.liquid        # Leverandørfordeler
│   ├── category-grid.liquid     # Kategorinavigasjon
│   ├── testimonials.liquid      # Kundevurderinger
│   ├── newsletter.liquid        # E-postregistrering
│   ├── product-main.liquid      # Produktsideinnhold
│   ├── collection-main.liquid   # Kolleksjoninnhold
│   └── cart-main.liquid         # Handlekurvinnhold
├── snippets/
│   └── product-card.liquid      # Gjenbrukbart produktkort
├── assets/
│   ├── splash-theme.css         # All styling
│   └── splash-theme.js          # Interaktivitet
└── locales/
    └── nb.default.json          # Norsk bokmål oversettelser
```

## 🚀 Slik bruker du temaet

### Steg 1: Opprett Shopify-butikk
1. Gå til [shopify.com](https://www.shopify.com) og opprett en konto
2. Velg en gratis prøveperiode (3 dager gratis, deretter fra 29 kr/mnd)

### Steg 2: Installer Shopify CLI
```bash
npm install -g @shopify/cli @shopify/theme
```

### Steg 3: Koble til butikken
```bash
cd splash-store
shopify theme dev --store din-butikk.myshopify.com
```

### Steg 4: Last opp temaet
```bash
shopify theme push --store din-butikk.myshopify.com
```

### Steg 5: Legg til produkter
I Shopify Admin (admin.shopify.com):
1. Gå til **Produkter** → **Legg til produkt**
2. Opprett produkter med bilder og priser
3. Opprett kolleksjoner: `Vannpistoler`, `Vannballonger`, `Mega Blastere`, `Tilbehør`

### Steg 6: Sett opp meny
1. Gå til **Nettbutikk** → **Navigering**
2. Rediger **Hovedmeny** og legg til lenker til kolleksjonene

## 🎯 Kampanjemodus

Du kan enkelt bytte mellom kampanja i **Teminnstillinger**:

| Modus | Bruksområde | Fargetema |
|-------|-------------|-----------|
| 🇳🇴 17. mai | Nasjondagen, mai | Rød, hvit, blå (norsk flagg) |
| ☀️ Sommer | Juni-august | Turkis, havblå |
| Standard | Resten av året | Nøytralt |

**Slik bytter du:** Nettbutikk → Tilpass → Teminnstillinger → Kampanje → Velg modus

## 💡 Anbefalte produktkategorier

1. **Vannpistoler** – Små, mellomstore og store
2. **Vannballonger** – Pakker med 100-1000 stk
3. **Mega Blastere** – Premium vannkanoner
4. **Tilbehør** – Ryggsekkstanker, reservedeler, mål

## 📱 Anbefalte apper for Shopify

- **Vipps** – Norsk betalingsløsning
- **Klarna** – Delbetaling
- **Bring** – Norsk frakt
- **Judge.me** – Kundevurderinger
- **Klaviyo** – E-postmarkedsføring

## 🖼️ Bildeanbefalinger

- **Hero-bilde:** 1920x1080px, ungdommer med vannpistoler, 17. mai-stemning
- **Produktbilder:** 1000x1000px, hvit bakgrunn, minst 3 bilder per produkt
- **Kategoriiblder:** 600x800px, livsstilsbilder

---

Lykke til med butikken! 💦🇳🇴
