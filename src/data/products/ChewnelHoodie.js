import chewnelBlack from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Black Hoodie/chewnel-black.png";
import chewnelBlackBack from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Black Hoodie/chewnel-black-back.png";
import chewnelBlackSide from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Black Hoodie/chewnel-black-side.png";
import chewnelBlackFront from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Black Hoodie/chewnel-black-front.png";
import chewnelBlackDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Black Hoodie/chewnel-black-detail.png";

import chewnelPink from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Pink Hoodie/chewnel-pink.png";
import chewnelPinkBack from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Pink Hoodie/chewnel-pink-back.png";
import chewnelPinkSide from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Pink Hoodie/chewnel-pink-side.png";
import chewnelPinkFront from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Pink Hoodie/chewnel-pink-front.png";
import chewnelPinkDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Pink Hoodie/chewnel-pink-detail.png";

import chewnelRed from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Red Hoodie/chewnel-red.png";
import chewnelRedBack from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Red Hoodie/chewnel-red-back.png";
import chewnelRedSide from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Red Hoodie/chewnel-red-side.png";
import chewnelRedFront from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Red Hoodie/chewnel-red-front.png";
import chewnelRedDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/Red Hoodie/chewnel-red-detail.png";

import chewnelWhite from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/White Hoodie/chewnel-white.png";
import chewnelWhiteBack from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/White Hoodie/chewnel-white-back.png";
import chewnelWhiteSide from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/White Hoodie/chewnel-white-side.png";
import chewnelWhiteFront from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/White Hoodie/chewnel-white-front.png";
import chewnelWhiteDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/White Hoodie/chewnel-white-detail.png";
import chewnelProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/chewnel-hoodie/chewnel-product-card-1.png";


export const chewnelHoodie = {
  id: "chewnel-hoodie",
  name: "Chewnel Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$64.99",

 image: chewnelProductCard,
  recommendationImage: chewnelBlack,

  description:
  "A fashion-forward designer-inspired hoodie made with a soft poly/cotton blend for warmth, comfort, and everyday statement style.",

  variants: [
    {
      id: "black",
      name: "Black",
      swatch: "#111111",
      thumbnail: chewnelBlack,
      gallery: [
        chewnelBlackBack,
        chewnelBlackSide,
        chewnelBlackFront,
        chewnelBlack,
        chewnelBlackDetail,
      ],
    },
    {
      id: "pink",
      name: "Pink",
      swatch: "#f4a6c5",
      thumbnail: chewnelPink,
      gallery: [
        chewnelPinkBack,
        chewnelPinkSide,
        chewnelPinkFront,
        chewnelPink,
        chewnelPinkDetail,
      ],
    },
    {
      id: "red",
      name: "Red",
      swatch: "#d62828",
      thumbnail: chewnelRed,
      gallery: [
        chewnelRedBack,
        chewnelRedSide,
        chewnelRedFront,
        chewnelRed,
        chewnelRedDetail,
      ],
    },
    {
      id: "white",
      name: "White",
      swatch: "#f5f3eb",
      thumbnail: chewnelWhite,
      gallery: [
        chewnelWhiteBack,
        chewnelWhiteSide,
        chewnelWhiteFront,
        chewnelWhite,
        chewnelWhiteDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  details: {
  overview:
    "Give your pup a polished designer-inspired look with the Chewnel Hoodie. Made from a soft poly/cotton blend, this cozy hoodie is designed for cooler days while keeping your pet comfortable indoors or out. Reinforced double stitching helps improve durability, while the plush interior adds extra softness. A convenient leash-access opening allows a leash to connect to a collar or harness worn underneath.",


    features: [
      "Designer-inspired statement graphic",
      "Soft poly/cotton blend construction",
      "Warm and comfortable for cooler-weather wear",
      "Super-soft interior for added comfort",
      "Double-stitched construction for improved durability",
      "Built-in hood for a stylish layered look",
      "Leash-access slit for use with a collar or harness underneath",
      "Easy pullover design",
      "Available in four fashionable colors",
      "Ideal for walks, outings, photoshoots, and everyday wear",
    ],

    specifications: [
      "Product Type: Dog Hoodie",
      "Material: Poly/Cotton Blend",
      "Style: Designer-Inspired Pet Streetwear",
      "Closure Type: Pullover",
      "Construction: Double-Stitched",
      "Leash Access: Built-In Opening",
      "Available Colors: Black, Pink, Red, and White",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Category: Pet Clothing",
      "Subcategory: Hoodies",
      "Suitable For: Small, Medium, and Large Dogs",
    ],
  },

  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};