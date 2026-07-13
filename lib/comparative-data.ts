/**
 * Local fallback content for the homepage Comparative Study section.
 *
 * Transcribed from the 2026 comparison documents in `public/comparatif/`
 * (comparatif-mbio7-2026-fr.html / comparatif-mbio7-2026-en.html).
 *
 * This mirrors the shape WordPress returns for `comparativesection_{fr,en}`,
 * so it can stand in verbatim when the CMS is unreachable or not yet populated.
 * Keep in sync if the source documents are regenerated.
 *
 * Money values are literal strings, not numbers: the two languages format
 * differently (FR "4 715,40 €" with a narrow no-break space, EN "€ 4,715.40")
 * and must be rendered exactly as the document presents them.
 */

export type DocLang = "fr" | "en";

export interface ComparativeStat {
  value: string;
  label: string;
}

export interface ComparativeRow {
  criterion: string;
  mbio7: string;
  traditional: string;
  observation: string;
}

export interface ComparativeCost {
  product: string;
  detail: string;
  basis: string;
  unit_price: string;
  qty: string;
  total: string;
}

export interface ComparativeTableHeaders {
  criterion: string;
  mbio7: string;
  traditional: string;
  observations: string;
}

export interface ComparativeCostHeaders {
  product: string;
  detail: string;
  basis: string;
  unit_price: string;
  qty: string;
  total: string;
}

/** Flattened shape consumed by the component (repeaters already Object.values()'d). */
export interface ComparativeDoc {
  title: string;
  intro: string;
  conditions: string;
  stats: ComparativeStat[];
  table_headers: ComparativeTableHeaders;
  criteria: ComparativeRow[];
  cost_headers: ComparativeCostHeaders;
  mbio7_label: string;
  mbio7_costs: ComparativeCost[];
  mbio7_total: string;
  traditional_label: string;
  traditional_costs: ComparativeCost[];
  traditional_total: string;
  savings_label: string;
  savings_value: string;
  savings_percent: string;
  pdf: string;
  htmlDoc: string;
}

export const COMPARATIVE_PDF: Record<DocLang, string> = {
  fr: "/comparatif/comparatif-mbio7-2026-fr.pdf",
  en: "/comparatif/comparatif-mbio7-2026-en.pdf",
};

export const COMPARATIVE_HTML: Record<DocLang, string> = {
  fr: "/comparatif/comparatif-mbio7-2026-fr.html",
  en: "/comparatif/comparatif-mbio7-2026-en.html",
};

export const COMPARATIVE_FALLBACK: Record<DocLang, ComparativeDoc> = {
  fr: {
    title: "Étude Comparative",
    intro: "mBio7 vs Maçonnerie Traditionnelle",
    conditions:
      "Murs extérieurs d'un bâtiment de 7 m × 8 m (56 m² au sol) — même coefficient d'isolation thermique : R = 3,61 m².K/W pour les deux solutions.",
    stats: [
      { value: "4 715,40 €", label: "Coût total mBio7 TTC" },
      { value: "22 843,00 €", label: "Coût total Maçonnerie Traditionnelle TTC" },
      { value: "− 18 127,60 €", label: "Économie réalisée (−79 %)" },
    ],
    table_headers: {
      criterion: "Critère",
      mbio7: "mBio7",
      traditional: "Maçonnerie Traditionnelle",
      observations: "Observations",
    },
    criteria: [
      {
        criterion: "Matériaux (hors dalle)",
        mbio7: "216 panneaux mBio7 + visserie + PSE + enduit → 4 palettes",
        traditional:
          "720 parpaings + 40 sacs ciment + sable 1,5 T + isolation ext. → 15 palettes + livraisons",
        observation: "Livraison simple et économique avec mBio7 — voir détail page 4",
      },
      {
        criterion: "Poids total des murs",
        mbio7: "1 950 kg",
        traditional: "19 000 kg",
        observation: "mBio7 est 10× plus léger — transport réduit, CO₂ optimisé",
      },
      {
        criterion: "Main-d'œuvre qualifiée",
        mbio7: "NON requise — Perso + 1 assistant — 3 jours",
        traditional: "OUI obligatoire — Maçon + ouvrier — 12 jours",
        observation:
          "Autoconstruction aisée. Rectitude garantie par l'assemblage. Utilisable immédiatement, sans séchage.",
      },
      {
        criterion: "Type d'isolation",
        mbio7: "Remplissage intégré PSE 100 % recyclé",
        traditional: "ITE obligatoire PSE 120 + enduit",
        observation:
          "Pas d'ITE avec mBio7 (RT 2012) — économie importante et gain de surface",
      },
      {
        criterion: "Fondations nécessaires",
        mbio7: "NON requises",
        traditional: "OUI, armées et conséquentes",
        observation: "Le poids réduit permet de se passer de fondations armées",
      },
      {
        criterion: "Délai d'assemblage",
        mbio7: "3 jours",
        traditional: "15 jours",
        observation: "5× plus rapide. Sans contrainte gel/pluie après montage",
      },
      {
        criterion: "Prix murs (MO incluse)",
        mbio7: "4 715,40 €",
        traditional: "22 843 €",
        observation: "Économie de 18 128 € — mBio7 est presque 5× moins cher",
      },
      {
        criterion: "Superficie habitable",
        mbio7: "53,62 m²",
        traditional: "51,30 m²",
        observation: "Gain de +4,5 % grâce à l'épaisseur réduite des murs",
      },
      {
        criterion: "Résistance sismique",
        mbio7: "Non sécable · Non fissurable",
        traditional: "Sécable · Fissuration possible",
        observation: "Argument déterminant en zones sismiques ou instables",
      },
      {
        criterion: "Écologie",
        mbio7: "90 % recyclé",
        traditional: "0 % recyclé",
        observation: "Bilan carbone optimal — transport réduit (4 palettes vs 15)",
      },
      {
        criterion: "Déconstruction",
        mbio7: "Démontable · Réutilisable · Transportable",
        traditional: "Démolition coûteuse · Gravats encombrants",
        observation: "Zéro gravats — réutilisable dans une autre construction",
      },
    ],
    cost_headers: {
      product: "Produit",
      detail: "Détail",
      basis: "Base",
      unit_price: "P.U. TTC",
      qty: "Qté",
      total: "Coût TTC",
    },
    mbio7_label: "TOTAL mBio7 TTC",
    mbio7_costs: [
      {
        product: "Panneaux mBio7 90 % recyclé",
        detail: "3 panneaux / m²",
        basis: "72 m²",
        unit_price: "15,00 €",
        qty: "216",
        total: "3 240,00 €",
      },
      {
        product: "Visserie (boîte 1 000)",
        detail: "14 vis / panneau",
        basis: "3 024 vis",
        unit_price: "12,00 €",
        qty: "4",
        total: "48,00 €",
      },
      {
        product: "Billes polystyrène 100 % recyclé",
        detail: "400 litres",
        basis: "364 litres",
        unit_price: "39,90 €",
        qty: "1",
        total: "39,90 €",
      },
      {
        product: "Enduit extérieur 25 kg",
        detail: "1 sac / 1 m²",
        basis: "72 m²",
        unit_price: "10,00 €",
        qty: "72",
        total: "720,00 €",
      },
      {
        product: "Plaque intérieure plâtre BA13",
        detail: "2,50 m × 1,20 m",
        basis: "72 m²",
        unit_price: "2,70 €",
        qty: "25",
        total: "67,50 €",
      },
      {
        product: "Main-d'œuvre : prépa sol + montage",
        detail: "Perso + un assistant",
        basis: "Coût / jour",
        unit_price: "200,00 €",
        qty: "3j",
        total: "600,00 €",
      },
    ],
    mbio7_total: "4 715,40 €",
    traditional_label: "TOTAL MAÇONNERIE TRADITIONNELLE TTC",
    traditional_costs: [
      {
        product: "Aglos 20/20/50",
        detail: "10 / m²",
        basis: "72 m² de mur",
        unit_price: "1,20 €",
        qty: "720",
        total: "864,00 €",
      },
      {
        product: "Ciment 25 kg",
        detail: "40 sacs",
        basis: "72 m² de mur",
        unit_price: "6,10 €",
        qty: "40",
        total: "244,00 €",
      },
      {
        product: "Sable",
        detail: "La tonne livrée",
        basis: "72 m² de mur",
        unit_price: "45,00 €",
        qty: "1,5T",
        total: "67,50 €",
      },
      {
        product: "Plaque intérieure plâtre BA13",
        detail: "2,50 m × 1,20 m",
        basis: "72 m²",
        unit_price: "2,70 €",
        qty: "25",
        total: "67,50 €",
      },
      {
        product: "Isolation par l'extérieur + pose",
        detail: "Polystyrène 120 + enduit",
        basis: "72 m² de mur",
        unit_price: "200,00 €",
        qty: "72",
        total: "14 400,00 €",
      },
      {
        product: "Main-d'œuvre terrassement + préparation + construction",
        detail: "Un maçon + ouvrier",
        basis: "Coût / jour",
        unit_price: "600,00 €",
        qty: "12 j.",
        total: "7 200,00 €",
      },
    ],
    traditional_total: "22 843,00 €",
    savings_label: "Économie réalisée avec mBio7",
    savings_value: "− 18 127,60 €",
    savings_percent: "soit −79 % du coût total — mBio7 presque 5× moins cher",
    pdf: COMPARATIVE_PDF.fr,
    htmlDoc: COMPARATIVE_HTML.fr,
  },

  en: {
    title: "Comparative Study",
    intro: "mBio7 vs Traditional Masonry",
    conditions:
      "Exterior walls of a 7 m × 8 m building (56 m² floor area) — same thermal resistance for both solutions: R = 3.61 m².K/W.",
    stats: [
      { value: "€ 4,715.40", label: "Total mBio7 cost (incl. VAT)" },
      { value: "€ 22,843.00", label: "Total Traditional Masonry cost (incl. VAT)" },
      { value: "− € 18,127.60", label: "Savings achieved (−79%)" },
    ],
    table_headers: {
      criterion: "Criterion",
      mbio7: "mBio7",
      traditional: "Traditional Masonry",
      observations: "Comments",
    },
    criteria: [
      {
        criterion: "Materials (excl. slab)",
        mbio7: "216 mBio7 panels + screws + EPS + render → 4 pallets only",
        traditional:
          "720 blocks + 40 bags cement + 1.5 T sand + ext. insulation → 15 pallets + deliveries",
        observation: "Simple, cost-effective delivery with mBio7 — see full breakdown p. 4",
      },
      {
        criterion: "Total wall weight",
        mbio7: "1,950 kg",
        traditional: "19,000 kg",
        observation: "mBio7 is 10× lighter — reduced transport, lower CO² footprint",
      },
      {
        criterion: "Skilled labour",
        mbio7: "NOT required — Self + 1 helper — 3 days",
        traditional: "YES mandatory — Mason + worker — 12 days",
        observation:
          "Self-build friendly. Straightness guaranteed by panel system. Ready to use immediately — no curing.",
      },
      {
        criterion: "Insulation type",
        mbio7: "Integrated fill 100% recycled EPS",
        traditional: "External insulation required EPS 120 + render",
        observation:
          "No external thermal envelope with mBio7 — major cost saving and floor area gain",
      },
      {
        criterion: "Foundations",
        mbio7: "NOT required",
        traditional: "YES, reinforced",
        observation: "Reduced weight allows lightweight or no foundations at all",
      },
      {
        criterion: "Assembly time",
        mbio7: "3 days",
        traditional: "15 days",
        observation: "5× faster. No weather constraints during or after assembly",
      },
      {
        criterion: "Wall cost (labour incl.)",
        mbio7: "€ 4,715.40",
        traditional: "€ 22,843",
        observation: "Savings of € 18,128 — mBio7 is nearly 5× cheaper",
      },
      {
        criterion: "Habitable area",
        mbio7: "53.62 m²",
        traditional: "51.30 m²",
        observation: "Gain of +4.5% thanks to thinner walls",
      },
      {
        criterion: "Seismic resistance",
        mbio7: "Crack-proof · Split-proof",
        traditional: "Can split · Cracking possible",
        observation: "Key argument in seismic zones or on unstable ground",
      },
      {
        criterion: "Ecology",
        mbio7: "90% recycled",
        traditional: "0% recycled",
        observation: "Optimal carbon footprint — pallets cut from 15 to 4",
      },
      {
        criterion: "Deconstruction",
        mbio7: "Dismantlable · Reusable · Movable",
        traditional: "Costly demolition · Heavy rubble",
        observation: "Zero rubble — panels reusable in another build",
      },
    ],
    cost_headers: {
      product: "Product",
      detail: "Detail",
      basis: "Basis",
      unit_price: "Price",
      qty: "Qty",
      total: "Cost",
    },
    mbio7_label: "TOTAL mBio7 (incl. VAT)",
    mbio7_costs: [
      {
        product: "mBio7 panels (90% recycled)",
        detail: "3 panels / m²",
        basis: "72 m²",
        unit_price: "€ 15.00",
        qty: "216",
        total: "€ 3,240.00",
      },
      {
        product: "Screws (box of 1,000)",
        detail: "14 screws / panel",
        basis: "3,024 screws",
        unit_price: "€ 12.00",
        qty: "4",
        total: "€ 48.00",
      },
      {
        product: "Recycled EPS beads (100% recycled)",
        detail: "400 litres",
        basis: "364 litres",
        unit_price: "€ 39.90",
        qty: "1",
        total: "€ 39.90",
      },
      {
        product: "Exterior render 25 kg",
        detail: "1 bag / m²",
        basis: "72 m²",
        unit_price: "€ 10.00",
        qty: "72",
        total: "€ 720.00",
      },
      {
        product: "Interior plasterboard BA13",
        detail: "2.50 m × 1.20 m",
        basis: "72 m²",
        unit_price: "€ 2.70",
        qty: "25",
        total: "€ 67.50",
      },
      {
        product: "Labour: ground prep + assembly",
        detail: "Self + 1 helper",
        basis: "Cost / day",
        unit_price: "€ 200.00",
        qty: "3d",
        total: "€ 600.00",
      },
    ],
    mbio7_total: "€ 4,715.40",
    traditional_label: "TOTAL TRADITIONAL MASONRY (incl. VAT)",
    traditional_costs: [
      {
        product: "Concrete blocks 20/20/50",
        detail: "10 / m²",
        basis: "72 m² wall",
        unit_price: "€ 1.20",
        qty: "720",
        total: "€ 864.00",
      },
      {
        product: "Cement 25 kg",
        detail: "40 bags",
        basis: "72 m² wall",
        unit_price: "€ 6.10",
        qty: "40",
        total: "€ 244.00",
      },
      {
        product: "Sand",
        detail: "Per tonne delivered",
        basis: "72 m² wall",
        unit_price: "€ 45.00",
        qty: "1.5T",
        total: "€ 67.50",
      },
      {
        product: "Interior plasterboard BA13",
        detail: "2.50 m × 1.20 m",
        basis: "72 m²",
        unit_price: "€ 2.70",
        qty: "25",
        total: "€ 67.50",
      },
      {
        product: "External insulation + installation",
        detail: "EPS 120 + render",
        basis: "72 m² wall",
        unit_price: "€ 200.00",
        qty: "72",
        total: "€ 14,400.00",
      },
      {
        product: "Labour: groundwork + prep + construction",
        detail: "Mason + worker",
        basis: "Cost / day",
        unit_price: "€ 600.00",
        qty: "12d",
        total: "€ 7,200.00",
      },
    ],
    traditional_total: "€ 22,843.00",
    savings_label: "Savings achieved with mBio7",
    savings_value: "− € 18,127.60",
    savings_percent: "i.e. −79% of total cost — mBio7 nearly 5× cheaper",
    pdf: COMPARATIVE_PDF.en,
    htmlDoc: COMPARATIVE_HTML.en,
  },
};
