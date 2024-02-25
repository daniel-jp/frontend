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
        name: "Viandes bovines",
        path: "bovines",
      },
      {
        name: "Viandes de volailles",
        path: "volailles",
      },
      {
        name: "Gamme gourmande",
        path: "gourmands",
      },
      ,
      {
        name: "Toppings de volailles",
        path: "toppings",
      },
      ,
      {
        name: "Charcuterie",
        path: "charcuteries",
      },
      {
        name: "Saucisse Goût",
        path: "saucisses",
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
