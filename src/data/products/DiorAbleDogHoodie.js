import diorBlackAerial from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/black/dior-able-hoodie-black-aerial.png";
import diorBlackBack from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/black/dior-able-hoodie-black-back.png";
import diorBlackFront from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/black/dior-able-hoodie-pink-black-front.png";
import diorBlackProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/black/dior-able-hoodie-black-product.png";
import diorBlackDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/black/dior-able-hoodie-black-detail.png";

import diorPinkAerial from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/pink/dior-able-hoodie-pink-aerial.png";
import diorPinkBack from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/pink/dior-able-hoodie-pink-back.png";
import diorPinkFront from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/pink/dior-able-hoodie-pink-front.png";
import diorPinkProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/pink/dior-able-hoodie-pink-product.png";
import diorPinkDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/pink/dior-able-hoodie-pink-detail.png";

import diorRedAerial from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/red/dior-able-hoodie-red-aerial.png";
import diorRedBack from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/red/dior-able-hoodie-red-back.png";
import diorRedFront from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/red/dior-able-hoodie-red-front.png";
import diorRedProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/red/dior-able-hoodie-red-product.png";
import diorRedDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/red/dior-able-hoodie-red-detail.png";

import diorWhiteAerial from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/white/dior-able-hoodie-white-aerial.png";
import diorWhiteBack from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/white/dior-able-hoodie-white-back.png";
import diorWhiteFront from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/white/dior-able-hoodie-white-front.png";
import diorWhiteProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/white/dior-able-hoodie-white-product.png";
import diorWhiteDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/white/dior-able-hoodie-white-detail.png";
import diorProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/dior-able-hoodie/dior-able-hoodie-product-card-1.png";



export const diorAbleDogHoodie = {
  id: "dior-able-dog-hoodie",
  name: "DIOR-able Dog Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$59.99",

  image: diorProductCard,
  recommendationImage: diorBlackProduct,

  description:
    "A playful designer-inspired dog hoodie featuring an “I’m So Diorable” statement graphic, cozy hood, short sleeves, and a polished boutique-inspired look.",

  variants: [
    {
      id: "black",
      name: "Black",
      swatch: "#111111",
      thumbnail: diorBlackProduct,
      gallery: [
        diorBlackBack,
        diorBlackAerial,
        diorBlackFront,
        diorBlackProduct,
        diorBlackDetail,
      ],
    },
    {
      id: "pink",
      name: "Pink",
      swatch: "#f4a6c5",
      thumbnail: diorPinkProduct,
      gallery: [
        diorPinkBack,
        diorPinkAerial,
        diorPinkFront,
        diorPinkProduct,
        diorPinkDetail,
      ],
    },
    {
      id: "red",
      name: "Red",
      swatch: "#d62828",
      thumbnail: diorRedProduct,
      gallery: [
        diorRedBack,
        diorRedAerial,
        diorRedFront,
        diorRedProduct,
        diorRedDetail,
      ],
    },
    {
      id: "white",
      name: "White",
      swatch: "#f5f3eb",
      thumbnail: diorWhiteProduct,
      gallery: [
        diorWhiteBack,
        diorWhiteAerial,
        diorWhiteFront,
        diorWhiteProduct,
        diorWhiteDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  details: {
    overview:
      "Give your pup a little runway-ready attitude with the DIOR-able Dog Hoodie, a playful designer-inspired statement piece made for fashionable pups who love to stand out. Featuring the fun “I’m So Diorable” graphic across the back, this hoodie combines high-fashion inspiration with an adorable everyday look. A cozy hood, short sleeves, ribbed cuffs, and a finished ribbed hem create the classic hoodie silhouette while allowing comfortable movement.",

    features: [
      "Designer-inspired “I’m So Diorable” statement graphic",
      "Available in Black, Pink, Red, and White",
      "Cozy hooded design",
      "Comfortable short sleeves",
      "Ribbed sleeve cuffs",
      "Ribbed bottom hem",
      "Boutique-inspired fashion aesthetic",
      "Ideal for everyday outings, photos, special occasions, and gifting",
    ],

    specifications: [
      "Product Type: Dog Hoodie",
      "Style: Designer-Inspired Pet Fashion",
      "Graphic: I’m So Diorable",
      "Sleeve Style: Short Sleeves",
      "Cuff Style: Ribbed",
      "Hem Style: Ribbed",
      "Available Colors: Black, Pink, Red, and White",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Category: Pet Clothing",
      "Subcategory: Hoodies",
      "Suitable For: Everyday Wear, Photos, Outings, Special Occasions, and Cool Weather",
    ],
  },

  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};