import hairmesBowBack from "../../assets/Pet Product/Pet Clothing/Hoodies/hairmes-dog-hoodie/Hairmes with Bow/hairmes-dog-hoodie-bow-back.png";
import hairmesBowSide from "../../assets/Pet Product/Pet Clothing/Hoodies/hairmes-dog-hoodie/Hairmes with Bow/hairmes-dog-hoodie-bow-side.png";
import hairmesBowFront from "../../assets/Pet Product/Pet Clothing/Hoodies/hairmes-dog-hoodie/Hairmes with Bow/hairmes-dog-hoodie-bow-front.png";
import hairmesBowProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/hairmes-dog-hoodie/Hairmes with Bow/hairmes-dog-hoodie-bow-product.png";
import hairmesBowDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/hairmes-dog-hoodie/Hairmes with Bow/hairmes-dog-hoodie-bow-detail.png";

import hairmesNoBowBack from "../../assets/Pet Product/Pet Clothing/Hoodies/hairmes-dog-hoodie/Hairmes without Bow/hairmes-dog-hoodie-without-bow-back.png";
import hairmesNoBowSide from "../../assets/Pet Product/Pet Clothing/Hoodies/hairmes-dog-hoodie/Hairmes without Bow/hairmes-dog-hoodie-without-bow-side.png";
import hairmesNoBowFront from "../../assets/Pet Product/Pet Clothing/Hoodies/hairmes-dog-hoodie/Hairmes without Bow/hairmes-dog-hoodie-without-bow-front.png";
import hairmesNoBowProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/hairmes-dog-hoodie/Hairmes without Bow/hairmes-dog-hoodie-without-bow-product.png";
import hairmesNoBowDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/hairmes-dog-hoodie/Hairmes without Bow/hairmes-dog-hoodie-without-bow-detail.png";
import hairmesProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/hairmes-dog-hoodie/hairmes-dog-hoodie-product-card-1.png";


export const hairmesDogHoodie = {
  id: "hairmes-dog-hoodie",
  name: "My Everyday Hairmes Dog Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$54.99",

  image: hairmesProductCard,
  recommendationImage: hairmesBowProduct,

  description:
    "A designer-inspired dog hoodie combining playful high-fashion style with cozy everyday comfort and a bold HAIRMES PARIS statement graphic.",

  variants: [
    {
      id: "with-bow",
      name: "With Bow",
      swatch: "#f28c28",
      thumbnail: hairmesBowProduct,
      gallery: [
        hairmesBowBack,
        hairmesBowSide,
        hairmesBowFront,
        hairmesBowProduct,
        hairmesBowDetail,
      ],
    },
    {
      id: "without-bow",
      name: "Without Bow",
      swatch: "#e87524",
      thumbnail: hairmesNoBowProduct,
      gallery: [
        hairmesNoBowBack,
        hairmesNoBowSide,
        hairmesNoBowFront,
        hairmesNoBowProduct,
        hairmesNoBowDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL"],

  details: {
    overview:
      "Give your pup a designer-inspired look made for everyday luxury with the My Everyday Hairmes Dog Hoodie. This playful statement hoodie features a bold HAIRMES PARIS graphic across the back and is available with or without a decorative bow detail. Crafted from a comfortable poly/cotton blend, it includes a super-soft interior for warmth, reinforced double stitching in key areas for durability, and a convenient leash-access slit for use with a collar or harness worn underneath.",

    features: [
      "Designer-inspired HAIRMES PARIS graphic",
      "Available with or without a decorative bow detail",
      "Soft poly/cotton blend construction",
      "Super-soft interior for added warmth and comfort",
      "Double-stitched construction in key areas",
      "Short sleeves for a fashionable and comfortable fit",
      "Built-in leash-access slit",
      "Designed for use with a collar or harness worn underneath",
      "Ideal for fall, winter, and cool-weather outings",
      "Perfect for walks, shopping trips, holiday outings, photos, and special events",
    ],

    specifications: [
      "Product Type: Dog Hoodie",
      "Material: Poly/Cotton Blend",
      "Style: Designer-Inspired Pet Fashion",
      "Graphic: HAIRMES PARIS",
      "Style Options: With Bow and Without Bow",
      "Sleeve Style: Short Sleeves",
      "Leash Access: Built-In Slit",
      "Available Sizes: XS, S, M, L, and XL",
      "Category: Pet Clothing",
      "Subcategory: Hoodies",
      "Season: Fall, Winter, and Cool Weather",
    ],
  },

  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};