import cocoBlackAerial from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/black/coco-beaded-hoodie-black-aerial.png";
import cocoBlackBack from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/black/coco-beaded-hoodie-black-back.png";
import cocoBlackSide from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/black/coco-beaded-hoodie-black-side.png";
import cocoBlackProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/black/coco-beaded-hoodie-black-product.png";
import cocoBlackDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/black/coco-beaded-hoodie-black-detail.png";

import cocoPinkAerial from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/pink/coco-beaded-hoodie-pink-aerial.png";
import cocoPinkBack from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/pink/coco-beaded-hoodie-pink-back.png";
import cocoPinkSide from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/pink/coco-beaded-hoodie-pink-side.png";
import cocoPinkProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/pink/coco-beaded-hoodie-pink-product.png";
import cocoPinkDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/pink/coco-beaded-hoodie-pink-detail.png";

import cocoRedAerial from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/red/coco-beaded-hoodie-red-aerial.png";
import cocoRedBack from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/red/coco-beaded-hoodie-red-back.png";
import cocoRedSide from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/red/coco-beaded-hoodie-red-side.png";
import cocoRedProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/red/coco-beaded-hoodie-red-product.png";
import cocoRedDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/red/coco-beaded-hoodie-red-detail.png";
import cocoProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/coco-beaded-hoodie/coco-beaded-hoodie-product-card-1.png";



export const cocoJeweledDogHoodie = {
  id: "coco-jeweled-dog-hoodie",
  name: "COCO Jeweled Dog Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$64.99",

  image: cocoProductCard,
  recommendationImage: cocoBlackProduct,

  description:
    "A glamorous jeweled dog hoodie featuring beaded rhinestone COCO appliqués, cozy construction, and a polished statement look for fashionable pups.",

  variants: [
    {
      id: "black",
      name: "Black",
      swatch: "#111111",
      thumbnail: cocoBlackProduct,
      gallery: [
        cocoBlackBack,
        cocoBlackSide,
        cocoBlackAerial,
        cocoBlackProduct,
        cocoBlackDetail,
      ],
    },
    {
      id: "pink",
      name: "Pink",
      swatch: "#f4a6c5",
      thumbnail: cocoPinkProduct,
      gallery: [
        cocoPinkBack,
        cocoPinkSide,
        cocoPinkAerial,
        cocoPinkProduct,
        cocoPinkDetail,
      ],
    },
    {
      id: "red",
      name: "Red",
      swatch: "#d62828",
      thumbnail: cocoRedProduct,
      gallery: [
        cocoRedBack,
        cocoRedSide,
        cocoRedAerial,
        cocoRedProduct,
        cocoRedDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  details: {
    overview:
      "Give your pup a little extra sparkle with the COCO Jeweled Dog Hoodie, a cozy statement piece designed for fashionable pups who love a touch of luxury. The back features the word COCO embellished with colorful beaded luxury rhinestone appliqués for a jewelry-inspired finish that catches the light beautifully. Each appliqué measures approximately 4.5 × 5 cm, adding plenty of sparkle while giving the hoodie its distinctive high-fashion look. A cozy hood, short sleeves, ribbed cuffs, and ribbed hem complete the polished design while allowing comfortable movement.",

    features: [
      "Beaded luxury rhinestone COCO appliqués",
      "Each appliqué measures approximately 4.5 × 5 cm",
      "Colorful rhinestone and beaded embellishments",
      "Cozy hooded construction",
      "Short sleeves with ribbed cuffs",
      "Ribbed bottom hem for a polished finish",
      "Comfortable design for natural movement",
      "Available in Black, Pink, and Red",
      "Ideal for holidays, photos, special occasions, outings, and everyday glam",
    ],

    specifications: [
      "Product Type: Dog Hoodie",
      "Style: Jeweled / Luxury-Inspired Pet Fashion",
      "Graphic: COCO Beaded Rhinestone Appliqués",
      "Appliqué Size: Approximately 4.5 × 5 cm",
      "Sleeve Style: Short Sleeves",
      "Cuff Style: Ribbed",
      "Hem Style: Ribbed",
      "Available Colors: Black, Pink, and Red",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Category: Pet Clothing",
      "Subcategory: Hoodies",
      "Suitable For: Everyday Wear, Holidays, Photoshoots, Outings, and Special Occasions",
    ],
  },

  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};