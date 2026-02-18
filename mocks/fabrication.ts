import type { SubPageResponse, FabricationPageACF } from "@/lib/wp-fetch";

export const fabricationMock: SubPageResponse<FabricationPageACF> = {
  id: 0,
  slug: "fabrication",
  title: { rendered: "Fabrication" },
  acf: {
    fabricationsection_fr: {
      fabrication1: {
        title: "La fabrication de nos panneaux mBio7",
        description:
          "Basé sur une technique maitrisée depuis plus de 30 ans pour produire des palettes en bois moulés, réaliser des panneaux d'habitation à la forme de nos panneau mBio7 a demandé plus de trois années de recherche et de développement, pour arriver enfin à produire un panneau de construction aux caractéristiques étonnantes et ambitieuses.",
        specials: {
          point1: "Procédé industriel éprouvé et fiabilisé",
          point2: "Plus de 10 ans de recherche et d'innovation",
          point3: "Caractéristiques techniques inédites",
        },
      },
      fabrication2: {
        title: "L'origine de la matière",
        description:
          "A l'origine il y a la matière, du bois moulé, constitué à plus de 90 % de bois issu du recyclage. C'est un produit naturel et biosourcé. Le bois moulé est ensuite séché et mélangé à de la résine thermodurcissable sans formaldéhyde.",
        specials: {
          point1: "Utilisation de bois recyclé (95 %)",
          point2: "Matériau naturel et biosourcé",
          point3: "Durabilité et respect de l'environnement",
        },
      },
      fabrication3: {
        title: "La mise en forme et la cuisson",
        description:
          "Le tout est placé dans une presse équipé d'un moule mBio7, Une force de plus de 900 tonnes est appliquée sur la matière, 170° de cuisson durant plusieurs minutes va solidifier par thermo-durcissement le matériau composite, Et notre panneau mBio7 ressort automatiquement, prêt à être utilisé après refroidissement.",
        specials: {
          point1: "Pression de plus de 900 tonnes",
          point2: "Thermo-durcissement à 170°C",
          point3: "Panneaux prêts à l'usage immédiatement",
        },
      },
    },
    fabricationsection_en: {
      fabrication1: {
        title: "An innovative manufacturing process",
        description:
          "Based on a technique mastered for over 30 years to produce molded wood pallets, creating housing panels in the shape of our mBio7 panels required more than three years of research and development, ultimately leading to the production of a construction panel with astonishing and ambitious characteristics.",
        specials: {
          point1: "Proven and reliable industrial process",
          point2: "Over 10 years of research and innovation",
          point3: "Unprecedented technical characteristics",
        },
      },
      fabrication2: {
        title: "The origin of the material",
        description:
          "At the origin, there is the material, molded wood, made of more than 90% recycled wood. It is a natural and bio-sourced product, The molded wood is then dried and mixed with thermosetting resin without formaldehyde.",
        specials: {
          point1: "Use of recycled wood (95%)",
          point2: "Natural and bio-sourced material",
          point3: "Durability and respect for the environment",
        },
      },
      fabrication3: {
        title: "Shaping and Solidifying",
        description:
          "The whole is placed in a press equipped with a mBio7 mold, A force of more than 900 tons is applied to the material, 170° cooking for several minutes will solidify the composite material through thermosetting, And our mBio7 panel automatically comes out, ready to be used after cooling.",
        specials: {
          point1: "Pressure of more than 900 tons",
          point2: "Thermosetting at 170°C",
          point3: "Panels ready for use immediately",
        },
      },
    },
  },
};
