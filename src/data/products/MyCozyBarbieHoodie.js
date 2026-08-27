import barbieBlackBack from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Black/my-cozy-barbie-dog-hoodie-black-back.png";
import barbieBlackSide from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Black/my-cozy-barbie-dog-hoodie-black-side.png";
import barbieBlackFront from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Black/my-cozy-barbie-dog-hoodie-black-front.png";
import barbieBlackProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Black/my-cozy-barbie-dog-hoodie-black-product.png";
import barbieBlackDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Black/my-cozy-barbie-dog-hoodie-black-detail.png";

import barbieCreamBack from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Cream/my-cozy-barbie-dog-hoodie-cream-back.png";
import barbieCreamSide from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Cream/my-cozy-barbie-dog-hoodie-cream-side.png";
import barbieCreamFront from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Cream/my-cozy-barbie-dog-hoodie-cream-front.png";
import barbieCreamProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Cream/my-cozy-barbie-dog-hoodie-cream-product.png";
import barbieCreamDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Cream/my-cozy-barbie-dog-hoodie-cream-detail.png";

import barbieHotPinkBack from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Hot Pink/my-cozy-barbie-dog-hoodie-hot-pink-back.png";
import barbieHotPinkSide from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Hot Pink/my-cozy-barbie-dog-hoodie-hot-pink-side.png";
import barbieHotPinkFront from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Hot Pink/my-cozy-barbie-dog-hoodie-hot-pink-front.png";
import barbieHotPinkProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Hot Pink/my-cozy-barbie-dog-hoodie-hot-pink-product.png";
import barbieHotPinkDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Hot Pink/my-cozy-barbie-dog-hoodie-hot-pink-detail.png";

import barbieLightPinkBack from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Light Pink/my-cozy-barbie-dog-hoodie-light-pink-back.png";
import barbieLightPinkSide from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Light Pink/my-cozy-barbie-dog-hoodie-light-pink-side.png";
import barbieLightPinkFront from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Light Pink/my-cozy-barbie-dog-hoodie-light-pink-front.png";
import barbieLightPinkProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Light Pink/my-cozy-barbie-dog-hoodie-light-pink-product.png";
import barbieLightPinkDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/Light Pink/my-cozy-barbie-dog-hoodie-light-pink-detail.png";
import barbieProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/my-cozy-barbie-dog-hoodie/my-cozy-barbie-dog-hoodie-product-card-1.png";



export const myCozyBarbieHoodie = {
  id: "my-cozy-barbie-dog-hoodie",
  name: "My Cozy Barbie Dog Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$59.99",

  image: barbieProductCard,
  recommendationImage: barbieHotPinkProduct,

  description:
    "A glamorous Barbie-inspired dog hoodie made from a soft poly/cotton blend with cozy comfort, embroidered script detailing, and everyday functionality.",

  variants: [
    {
      id: "black",
      name: "Black",
      swatch: "#111111",
      thumbnail: barbieBlackProduct,
      gallery: [
        barbieBlackBack,
        barbieBlackSide,
        barbieBlackFront,
        barbieBlackProduct,
        barbieBlackDetail,
      ],
    },
    {
      id: "cream",
      name: "Cream",
      swatch: "#f2eadb",
      thumbnail: barbieCreamProduct,
      gallery: [
        barbieCreamBack,
        barbieCreamSide,
        barbieCreamFront,
        barbieCreamProduct,
        barbieCreamDetail,
      ],
    },
    {
      id: "hot-pink",
      name: "Hot Pink",
      swatch: "#ff4fa3",
      thumbnail: barbieHotPinkProduct,
      gallery: [
        barbieHotPinkBack,
        barbieHotPinkSide,
        barbieHotPinkFront,
        barbieHotPinkProduct,
        barbieHotPinkDetail,
      ],
    },
    {
      id: "light-pink",
      name: "Light Pink",
      swatch: "#f6b5cf",
      thumbnail: barbieLightPinkProduct,
      gallery: [
        barbieLightPinkBack,
        barbieLightPinkSide,
        barbieLightPinkFront,
        barbieLightPinkProduct,
        barbieLightPinkDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  details: {
    overview:
      "Pretty in pink—or chic in cream or black—your pup can channel iconic Barbie style in the My Cozy Barbie Dog Hoodie. Inspired by the fabulous world of Barbie, this statement hoodie blends playful fashion with cozy comfort. Crafted from a soft poly/cotton blend, it features the signature Barbie script embroidered across the back, a super-soft interior for added warmth, reinforced double stitching in key areas, and a convenient leash-access slit for use with a collar or harness worn underneath.",

    features: [
      "Soft poly/cotton blend construction",
      "Super-soft interior for extra comfort",
      "Sleeved hoodie design",
      "Signature Barbie script embroidered across the back",
      "Reinforced double stitching in key areas",
      "Built-in leash-access slit",
      "Comfortable for cool-weather wear",
      "Available in multiple fashionable colors",
      "Ideal for walks, photoshoots, special events, and cozy days at home",
    ],

    specifications: [
      "Product Type: Dog Hoodie",
      "Material: Poly/Cotton Blend",
      "Style: Fashion Pet Hoodie",
      "Closure Type: Pullover",
      "Logo Detail: Embroidered Barbie Script",
      "Leash Access: Built-In Slit",
      "Available Colors: Black, Cream, Hot Pink, and Light Pink",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Category: Pet Clothing",
      "Subcategory: Hoodies",
      "Suitable For: Everyday Wear, Cool Weather, Photoshoots, and Special Occasions",
    ],
  },

  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};