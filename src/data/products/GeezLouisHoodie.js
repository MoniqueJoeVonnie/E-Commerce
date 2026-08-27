import geezLouisFront from "../../assets/Pet Product/Pet Clothing/Hoodies/geez-louis-dog-hoodie/geez-louis-front.png";
import geezLouisBack from "../../assets/Pet Product/Pet Clothing/Hoodies/geez-louis-dog-hoodie/geez-louis-back.png";
import geezLouisAerial from "../../assets/Pet Product/Pet Clothing/Hoodies/geez-louis-dog-hoodie/geez-louis.aerial.png";
import geezLouisCloseup from "../../assets/Pet Product/Pet Clothing/Hoodies/geez-louis-dog-hoodie/geez-louis-closeup.png";
import geezLouisProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/geez-louis-dog-hoodie/geez-louis-product.png";
import geezLouisProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/geez-louis-dog-hoodie/geez-louis-dog-hoodie-product-card-1.png";


export const geezLouisHoodie = {
  id: "geez-louis-dog-hoodie",
  name: "Geez Louis Dog Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$64.99",

  image: geezLouisProductCard,
  recommendationImage: geezLouisProduct,

  description:
    "A bold, playful designer-inspired dog hoodie crafted from cozy ivory fleece for a luxe statement look with everyday comfort.",

  variants: [
    {
      id: "ivory",
      name: "Ivory",
      swatch: "#F4EFE4",
      thumbnail: geezLouisProduct,
      gallery: [
        geezLouisBack,
        geezLouisAerial,
        geezLouisFront,
        geezLouisProduct,
        geezLouisCloseup,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  details: {
    overview:
      "Bold, playful, and effortlessly chic, the Geez Louis Dog Hoodie brings a touch of high-fashion humor to your pup’s wardrobe. Crafted from cozy ivory fleece, this statement hoodie features a designer-inspired “GEEZ LOUIS” graphic in warm brown tones for a polished, fashion-forward finish. Comfortable enough for everyday wear while stylish enough for special outings, it is a standout addition to any fashionable pup’s wardrobe.",

    features: [
      "Soft and cozy ivory fleece construction",
      "Designer-inspired “GEEZ LOUIS” statement graphic",
      "Warm brown graphic detailing",
      "Built-in hood for a stylish layered look",
      "Easy pullover design",
      "Comfortable fit for everyday movement",
      "Ideal for cooler-weather wear",
      "Perfect for walks, outings, photoshoots, special occasions, and gifting",
    ],

    specifications: [
      "Product Type: Dog Hoodie",
      "Style: Designer-Inspired Pet Fashion",
      "Color: Ivory",
      "Graphic Color: Brown",
      "Closure Type: Pullover",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Category: Pet Clothing",
      "Subcategory: Hoodies",
      "Suitable For: Everyday Wear, Outings, Special Occasions, and Gifting",
    ],
  },

  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};