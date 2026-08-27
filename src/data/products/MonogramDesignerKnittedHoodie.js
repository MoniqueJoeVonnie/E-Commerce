import monogramApricotBack from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/apricot/monogram-designer-knitted-hoodie-apricot-back.png";
import monogramApricotDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/apricot/monogram-designer-knitted-hoodie-apricot-detail.png";
import monogramApricotFront from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/apricot/monogram-designer-knitted-hoodie-apricot-front.png";
import monogramApricotProductBack from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/apricot/monogram-designer-knitted-hoodie-apricot-product-back.png";
import monogramApricotProductFront from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/apricot/monogram-designer-knitted-hoodie-apricot-product-front.png";
import monogramApricotSide from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/apricot/monogram-designer-knitted-hoodie-apricot-side.png";

import monogramBlackBack from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/black/monogram-designer-knitted-hoodie-black-back.png";
import monogramBlackDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/black/monogram-designer-knitted-hoodie-black-detail.png";
import monogramBlackFront from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/black/monogram-designer-knitted-hoodie-black-front.png";
import monogramBlackProductBack from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/black/monogram-designer-knitted-hoodie-black-product-back.png";
import monogramBlackProductFront from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/black/monogram-designer-knitted-hoodie-black-product-front.png";
import monogramBlackSide from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/black/monogram-designer-knitted-hoodie-black-side.png";

import monogramDesignerProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/monogram-designer-knitted-hoodie/monogram-designer-knitted-hoodie-product-card-1.png";


export const monogramDesignerKnittedHoodie = {
  id: "monogram-designer-knitted-hoodie",
  name: "Monogram Designer Knitted Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$39.99",

  image: monogramDesignerProductCard,
  recommendationImage: monogramDesignerProductCard,

  description:
    "A luxury-inspired knitted dog hoodie featuring an all-over monogram pattern, signature red and green striped accents, and soft, cozy construction for elevated cold-weather style.",

  variants: [
    {
      id: "apricot",
      name: "Apricot",
      swatch: "#d6ad7c",
      thumbnail: monogramApricotProductBack,
      gallery: [
        monogramApricotBack,
        monogramApricotSide,
        monogramApricotFront,
        monogramApricotProductBack,
        monogramApricotProductFront,
        monogramApricotDetail,
      ],
    },
    {
      id: "black",
      name: "Black",
      swatch: "#111111",
      thumbnail: monogramBlackProductBack,
      gallery: [
        monogramBlackBack,
        monogramBlackSide,
        monogramBlackFront,
        monogramBlackProductBack,
        monogramBlackProductFront,
        monogramBlackDetail,
      ],
    },
  ],

  sizes: ["S", "M", "L", "XL", "2XL"],

  details: {
    overview:
      "Give your pup a touch of luxury with the Monogram Designer Knitted Hoodie. Designed for fashion-forward pups who love to stand out, this cozy knit combines a distinctive all-over monogram pattern with signature red and green striped accents for an elevated, luxury-inspired look. Crafted from soft, premium knitted material, this hoodie provides warmth and comfortable insulation, making it an ideal wardrobe piece for autumn and winter. The hooded design, short sleeves, and ribbed detailing create a snug yet comfortable fit that allows your pup to move freely during walks, outings, and everyday adventures.",

    features: [
      "Luxury-inspired all-over monogram design",
      "Signature red and green stripe detailing",
      "Soft, premium knitted material",
      "Warm and cozy construction for cooler weather",
      "Stylish hooded design",
      "Short sleeves for comfortable movement",
      "Ribbed cuffs and hem for added structure",
      "Reinforced knit construction for regular wear",
      "Available in Apricot and Black",
      "Designed for small dogs",
      "Ideal for autumn and winter",
      "Perfect for walks, outings, photoshoots, holidays, and special occasions",
    ],

    specifications: [
      "Product Type: Knitted Dog Hoodie",
      "Material: Soft knitted fabric",
      "Colors: Apricot and Black",
      "Sizes: S, M, L, XL, 2XL",
      "Sleeve Style: Short sleeve",
      "Design: All-over monogram pattern",
      "Accent: Red and green striped detailing",
      "Trim: Ribbed cuffs and hem",
      "Season: Autumn and winter",
      "Fit: Small dogs",
    ],

    styleTip:
      "Pair this statement knit with your pup's favorite collar, sneakers, or polished accessories for an elevated head-to-paw designer-inspired look.",

    fitNote:
      "Please check the size chart and measure your pup before ordering. Pet clothing sizing can vary, so choosing based on your pup's measurements rather than their usual size will provide the best fit.",
  },
};