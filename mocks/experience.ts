import type { SubPageResponse, ExperiencePageACF } from "@/lib/wp-fetch";

export const experienceMock: SubPageResponse<ExperiencePageACF> = {
  id: 0,
  slug: "expérience",
  title: { rendered: "Expérience" },
  acf: {
    experiencehero_fr: {
      title: "Un petit chez soi vaut mieux qu'un grand chez les autres",
      description:
        "Un chez soi, tout simplement, grand ou petit, mais qui protège votre famille et vous permets de faire des économies tout en respectant la nature. mBio7 permet tout cela et bien plus encore",
    },
    experiencehero_en: {
      title: "A little home of your own is better than a big one at someone else's",
      description:
        "A home of your own, simply, big or small, but one that protects your family and allows you to save money while respecting nature. mBio7 allows all this and much more",
    },
    experiencesection_fr: {
      experience1: {
        title: "SANITAIRE",
        description:
          "De par sa conception c'est un produit sain, non absorbant donc sans humidité et sans possibilité d'intégration de moisissures. Associé à des matériaux sains, votre construction gardera, avec le temps, sa douceur de vivre.",
        specials: {
          point1: "Produit sain et non absorbant",
          point2: "Résistant à l'humidité",
          point3: "Prévention des moisissures",
        },
      },
      experience2: {
        title: "SECURITE STRUCTURELLE",
        description:
          "Contrairement aux constructions traditionnelles en briques, le bois moulé étant un produit non sécable (qui ne ce fissure pas), votre mur en mBio7 ne peut se fissurer et grâce à sa technique d'assemblage, apporte la souplesse nécessaire pour supporter les mouvements de terrain. Un assemblage de panneaux mBio7 dans les règles de l'art facilite la réalisation d'habitations antisismiques.",
        specials: {
          point1: "Produit non sécable (ne se fissure pas)",
          point2: "Souplesse pour supporter les mouvements de terrain",
          point3: "Facilite la réalisation d'habitations antisismiques",
        },
      },
      experience3: {
        title: "SECURITE INCENDIE",
        description:
          "Associé à des matériaux classe M1, l'absence d'air à l'intérieure des panneaux mBio7 en fait un produit excessivement difficile à bruler et impossible à s'auto consumer.",
        specials: {
          point1: "Absence d'air à l'intérieur des panneaux",
          point2: "Difficulté à brûler",
          point3: "Impossible à s'auto-consumer",
        },
        cta: "https://www.youtube.com/watch?v=xmI_naeRfdw",
      },
      experience4: {
        title: "ISOLATION THERMIQUE",
        description:
          "Grâce à sa structure alvéolaire, le panneau mBio7 offre une isolation thermique exceptionnelle. Il contribue à maintenir une température intérieure confortable, réduisant ainsi les besoins en chauffage et en climatisation.",
        specials: {
          point1: "Structure alvéolaire pour une isolation optimale",
          point2: "Maintien d'une température intérieure confortable",
          point3: "Réduction des besoins en chauffage et climatisation",
        },
      },
    },
    experiencesection_en: {
      experience1: {
        title: "HEALTHY",
        description:
          "Due to its design, it's a healthy, non-absorbent product, meaning it's free of moisture and the possibility of mold growth. When combined with other healthy materials, your construction will maintain its pleasant living environment over time.",
        specials: {
          point1: "Healthy and non-absorbent product",
          point2: "Resistant to moisture",
          point3: "Prevents mold",
        },
      },
      experience2: {
        title: "STRUCTURAL SECURITY",
        description:
          "Unlike traditional brick constructions, molded wood is an indivisible product (it doesn't crack). An mBio7 wall can't crack and, thanks to its assembly technique, provides the necessary flexibility to withstand ground movements. Assembling mBio7 panels correctly makes it easy to build earthquake-resistant homes.",
        specials: {
          point1: "Indivisible product (doesn't crack)",
          point2: "Flexibility to withstand ground movements",
          point3: "Facilitates the construction of earthquake-resistant homes",
        },
      },
      experience3: {
        title: "FIRE SAFETY",
        description:
          "When combined with M1 class materials, the absence of air inside the mBio7 panels makes it an extremely difficult product to burn and impossible to self-ignite.",
        specials: {
          point1: "Absence of air inside the panels",
          point2: "Difficult to burn",
          point3: "Impossible to self-ignite",
        },
        cta: "https://www.youtube.com/watch?v=xmI_naeRfdw",
      },
      experience4: {
        title: "THERMAL INSULATION",
        description:
          "Thanks to its alveolar structure, the mBio7 panel offers exceptional thermal insulation. It helps maintain a comfortable indoor temperature, reducing the need for heating and air conditioning.",
        specials: {
          point1: "Alveolar structure for optimal insulation",
          point2: "Maintains a comfortable indoor temperature",
          point3: "Reduces the need for heating and air conditioning",
        },
      },
    },
  },
};
