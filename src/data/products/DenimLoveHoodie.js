import denimLoveGreyBack from "../../assets/Pet Product/Pet Clothing/Hoodies/denim-hoodie-love-harness-vest/Grey Hoodie/denim-love-grey-hoodie-back.png";
import denimLoveGreySide from "../../assets/Pet Product/Pet Clothing/Hoodies/denim-hoodie-love-harness-vest/Grey Hoodie/denim-love-grey-hoodie-side.png";
import denimLoveGreyFront from "../../assets/Pet Product/Pet Clothing/Hoodies/denim-hoodie-love-harness-vest/Grey Hoodie/denim-love-grey-hoodie-front.png";
import denimLoveGreyProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/denim-hoodie-love-harness-vest/Grey Hoodie/denim-love-grey-hoodie-product.png";
import denimLoveGreyDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/denim-hoodie-love-harness-vest/Grey Hoodie/denim-love-grey-hoodie-detail.png";

import denimLovePinkBack from "../../assets/Pet Product/Pet Clothing/Hoodies/denim-hoodie-love-harness-vest/Pink Hoodie/denim-love-hoodie-pink-back.png";
import denimLovePinkSide from "../../assets/Pet Product/Pet Clothing/Hoodies/denim-hoodie-love-harness-vest/Pink Hoodie/denim-love-hoodie-pink-side.png";
import denimLovePinkFront from "../../assets/Pet Product/Pet Clothing/Hoodies/denim-hoodie-love-harness-vest/Pink Hoodie/denim-love-hoodie-pink-front.png";
import denimLovePinkProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/denim-hoodie-love-harness-vest/Pink Hoodie/denim-love-hoodie-pink-product.png";
import denimLovePinkDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/denim-hoodie-love-harness-vest/Pink Hoodie/denim-love-hoodie-pink-detail.png";
import denimLoveProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/denim-hoodie-love-harness-vest/denim-hoodie-love-harness-vest-product-card-1.png";


export const denimLoveHoodie = {
  id: "denim-love-hoodie-harness",
  name: 'Denim Hoodie "Love" Harness Vest',
  category: "clothing",
  subcategory: "hoodies",
  price: "$54.99",

  image: denimLoveProductCard,
  recommendationImage: denimLoveGreyProduct,

  description:
    "A playful denim hoodie harness vest combining fashion, comfort, and everyday functionality with sparkling LOVE detailing.",

  variants: [
    {
      id: "grey",
      name: "Grey",
      swatch: "#8f9499",
      thumbnail: denimLoveGreyProduct,
      gallery: [
        denimLoveGreyBack,
        denimLoveGreySide,
        denimLoveGreyFront,
        denimLoveGreyProduct,
        denimLoveGreyDetail,
      ],
    },
    {
      id: "pink",
      name: "Pink",
      swatch: "#f3a6bd",
      thumbnail: denimLovePinkProduct,
      gallery: [
        denimLovePinkBack,
        denimLovePinkSide,
        denimLovePinkFront,
        denimLovePinkProduct,
        denimLovePinkDetail,
      ],
    },
  ],

  sizes: ["XXS", "XS", "S", "M"],

  details: {
    overview:
      'Dress your pup in a little extra love with the Denim Hoodie "Love" Harness Vest, a playful blend of fashion, comfort, and everyday functionality. Crafted from durable cotton denim and soft stretch knit fabric, this hoodie-style vest pairs classic denim with contrasting hood details for a stylish look that stands out. The back features a sparkling LOVE design with glitter and foil accents and a sweet paw-print detail, while polished stitching and metallic hardware add a refined finish.',

    features: [
      "Durable cotton denim construction",
      "Soft stretch knit fabric for added comfort",
      "LOVE graphic with glitter and foil accents",
      "Contrasting hood for a playful layered look",
      "Adjustable Velcro straps around the chest and belly",
      "Built-in D-ring for convenient leash attachment",
      "Easy on-and-off harness-style design",
      "Machine washable on gentle cycle",
      "Lay flat to dry",
      "Ideal for everyday walks, outings, photos, and special occasions",
    ],

    specifications: [
      'Product Type: Hoodie Harness Vest',
      "Material: Cotton Denim and Stretch Knit Fabric",
      "Style: Fashion Harness / Hoodie Vest",
      "Closure Type: Adjustable Velcro Straps",
      "Leash Attachment: Built-In D-Ring",
      "Available Colors: Grey and Pink",
      "Available Sizes: XXS, XS, S, and M",
      "Care: Machine Wash Gentle Cycle; Lay Flat to Dry",
      "Category: Pet Clothing",
      "Subcategory: Hoodies",
      "Larger Sizes: Available Upon Request for an Additional Cost",
    ],
  },

  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};