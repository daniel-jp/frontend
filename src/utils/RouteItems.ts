export const RouteItems = [
  {
    id: 1,
    name: "Accueil",
    path: "/",
  },
  {
    id: 2,
    name: "À propos",
    path: "/about",
  },
  {
    id: 3,
    name: "Trouver Produits",
    path: "/produit",
    children: [
      {
        name: "Viande & Surgelés Pur Boeuf",
        path: "viande",
      },
      {
        name: "Produits Frais",
        path: "frais",
      },
      {
        name: "Produits Gourmands Surgelés",
        path: "gourmands",
      },
    ],
  },
  {
    id: 4,
    name: "Découvrez-Nous",
    path: "/decouvre",
  },

  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];
