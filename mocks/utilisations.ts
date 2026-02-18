import type { SubPageResponse, UtilisationsPageACF } from "@/lib/wp-fetch";

export const utilisationsMock: SubPageResponse<UtilisationsPageACF> = {
  id: 0,
  slug: "utilisations",
  title: { rendered: "Utilisations" },
  acf: {
    utilisationhero_fr: {
      title: "Comment utiliser les panneaux mBio7 ?",
      description:
        "L'assemblage de ces panneaux, par emboîtement, vissage et remplissage avec cellulose, paille, laine, terre, béton ou tout autre matériau, permet le montage, le blocage, l'isolation et la finition des murs, cloisons, sols, bardages et toitures d'habitations, de manière simple et modulable.",
      details: {
        point1: "Construction neuve",
        point2: "Rénovation",
        point3: "Extensions",
        point4: "Cloisons intérieures",
        point5: "Toitures",
        point6: "l'isolation extérieure et intérieure de bâtiments existants",
        point7: "l'utilisation en coffrage perdu (piscines ou murs de soutènement)",
        point8: "et bien plus encore..",
      },
    },
    utilisationhero_en: {
      title: "How to use mBio7 panels?",
      description:
        "The assembly of these panels, by interlocking, screwing, and filling with cellulose, straw, wool, earth, concrete, or any other material, allows the mounting, blocking, insulation, and finishing of walls, partitions, floors, cladding, and roofs of dwellings in a simple and modular way.",
      details: {
        point1: "New construction",
        point2: "Renovation",
        point3: "Extensions",
        point4: "Interior partitions",
        point5: "Roofs",
        point6: "Exterior and interior insulation of existing buildings",
        point7: "Use as permanent formwork (swimming pools or retaining walls)",
        point8: "and much more..",
      },
    },
    utilisationmain_fr: {
      title: "Première Maison écologique en panneaux de bois moulé en France",
      description:
        "En 2017 une première maison test est réalisée à Sospel avec l'aide de Jérémy, jeune ingénieur en stage de l'Institut de Technologie ESTIA. Il s'agit bien sûr d'un bâtiment de petite taille en raison du nombre limité de prototypes, mais mBio7 permet toute taille de construction. Cette structure est parfaitement intacte à ce jour, malgré les années et les conditions rudes de la montagne, isolation parfaite et pas une seule fissure malgré l'absence de fondations.",
      dimensions: {
        point1: "Longueur : 3.82 m",
        point2: "Largeur : 2.90 m",
        point3: "Superficie : 10 m²",
        point4: "Hauteur : 2.31 m",
        point5: "Toit en mBio7: 60 panneaux",
        point6: "Nombre de panneaux: 160",
        point7: "Poids approximatif:  1 450 kg",
        point8: "Sol en OSB sur chevrons",
        point9: "Fenêtres PVC",
        point10: "Enduit rustique sur treillis agrafé",
      },
    },
    utilisationmain_en: {
      title: "First ecological house in molded wood panels in France",
      description:
        "In 2017, a first test house was built in Sospel with the help of Jérémy, a young intern engineer from the ESTIA Institute of Technology. It's a small building due to the limited number of prototypes, but mBio7 can be used for any size of construction. This structure is perfectly intact to this day, despite the years and harsh mountain conditions, with perfect insulation and not a single crack despite the absence of foundations.",
      dimensions: {
        point1: "Length: 3.82 m",
        point2: "Width: 2.90 m",
        point3: "Area: 10 m²",
        point4: "Height: 2.31 m",
        point5: "mBio7 roof: 60 panels",
        point6: "Number of panels: 160",
        point7: "Approximate weight: 1,450 kg",
        point8: "OSB floor on rafters",
        point9: "PVC windows",
        point10: "Rustic coating on stapled trellis",
      },
    },
  },
};
