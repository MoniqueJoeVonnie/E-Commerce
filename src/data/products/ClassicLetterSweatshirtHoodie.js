import classicBlackBack from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/black/classic-letter-sweatshirt-hoodie-black-back.png";
import classicBlackDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/black/classic-letter-sweatshirt-hoodie-black-detail.png.jpg";
import classicBlackFront from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/black/classic-letter-sweatshirt-hoodie-black-front.png";
import classicBlackProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/black/classic-letter-sweatshirt-hoodie-black-product.png";
import classicBlackSide from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/black/classic-letter-sweatshirt-hoodie-black-side.png";

import classicRedBack from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/red/classic-letter-sweatshirt-hoodie-red-back.png";
import classicRedDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/red/classic-letter-sweatshirt-hoodie-red-detail.png";
import classicRedFront from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/red/classic-letter-sweatshirt-hoodie-red-front.png";
import classicRedProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/red/classic-letter-sweatshirt-hoodie-red-product.png";
import classicRedSide from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/red/classic-letter-sweatshirt-hoodie-red-side.png";

import classicWhiteBack from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/white/classic-letter-sweatshirt-hoodie-white-back.png";
import classicWhiteDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/white/classic-letter-sweatshirt-hoodie-white-detail.png";
import classicWhiteFront from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/white/classic-letter-sweatshirt-hoodie-white-front.png";
import classicWhiteProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/white/classic-letter-sweatshirt-hoodie-white-product.png";
import classicWhiteSide from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/white/classic-letter-sweatshirt-hoodie-white-side.png";

import classicLetterProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/classic-letter-sweatshirt-hoodie/classic-letter-sweatshirt-hoodie-product-card-1.png";


export const classicLetterSweatshirtHoodie = {
  id: "classic-letter-sweatshirt-hoodie",
  name: "Classic Letter Sweatshirt Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$34.99",

  image: classicLetterProductCard,
  recommendationImage: classicLetterProductCard,

  description:
    "A designer-inspired 100% cotton pet hoodie featuring a bold all-over letter and geometric pattern with a soft, lightweight construction for comfortable everyday style.",

  variants: [
    {
      id: "black",
      name: "Black",
      swatch: "#111111",
      thumbnail: classicBlackProduct,
      gallery: [
        classicBlackBack,
        classicBlackSide,
        classicBlackFront,
        classicBlackProduct,
        classicBlackDetail,
      ],
    },
    {
      id: "red",
      name: "Red",
      swatch: "#c62828",
      thumbnail: classicRedProduct,
      gallery: [
        classicRedBack,
        classicRedSide,
        classicRedFront,
        classicRedProduct,
        classicRedDetail,
      ],
    },
    {
      id: "white",
      name: "White",
      swatch: "#ffffff",
      thumbnail: classicWhiteProduct,
      gallery: [
        classicWhiteBack,
        classicWhiteSide,
        classicWhiteFront,
        classicWhiteProduct,
        classicWhiteDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L"],

  details: {
    overview:
      "Give your pup a designer-inspired look with the Classic Letter Sweatshirt Hoodie. Featuring a bold all-over letter and geometric pattern, this stylish hoodie combines an elevated streetwear aesthetic with everyday comfort. Crafted from 100% cotton, the hoodie has a soft, lightweight feel designed to keep your pet comfortable without restricting movement. The hooded silhouette, short sleeves, finished hems, and detailed stitching give it the look of a miniature designer sweatshirt while providing an extra layer for cooler days.",

    features: [
      "Designer-inspired letter and geometric pattern",
      "Soft 100% cotton construction",
      "Classic hooded sweatshirt silhouette",
      "Short sleeves for comfortable movement",
      "Lightweight and comfortable feel",
      "Finished seams, hems, and detailed stitching",
      "Suitable for spring, fall, and winter",
      "Available in Black, Red, and White",
      "Unisex design",
      "Ideal for walks, outings, photos, holidays, and special occasions",
    ],

    specifications: [
      "Product Type: Hooded Pet Sweatshirt",
      "Material: 100% Cotton",
      "Style: Classic / Designer-Inspired",
      "Pattern: Letter & Geometric Print",
      "Colors: Black, Red, and White",
      "Sizes: XS, S, M, and L",
      "Fit: Small to Medium Dogs",
      "Season: Spring, Fall, and Winter",
      "Gender: Unisex",
    ],
  },
};