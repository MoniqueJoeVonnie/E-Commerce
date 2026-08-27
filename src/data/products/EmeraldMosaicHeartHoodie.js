import emeraldBack from "../../assets/Pet Product/Pet Clothing/Hoodies/emerald-mosaic-heart-hoodie/emerald-mosaic-heart-back.png";
import emeraldSide from "../../assets/Pet Product/Pet Clothing/Hoodies/emerald-mosaic-heart-hoodie/emerald-mosaic-heart-side.png";
import emeraldFront1 from "../../assets/Pet Product/Pet Clothing/Hoodies/emerald-mosaic-heart-hoodie/emerald-mosaic-heart-front1.png";
import emeraldFront2 from "../../assets/Pet Product/Pet Clothing/Hoodies/emerald-mosaic-heart-hoodie/emerald-mosaic-heart-front2.png";
import emeraldProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/emerald-mosaic-heart-hoodie/emerald-mosaic-heart-hoodie.png";
import emeraldProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/emerald-mosaic-heart-hoodie/emerald-mosaic-heart-hoodie-product-card-1.png";
import emeraldDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/emerald-mosaic-heart-hoodie/emerald-mosaic-heart-detail.png";

export const emeraldMosaicHeartHoodie = {
  id: "emerald-mosaic-heart-hoodie",
  name: "Emerald Mosaic Heart Dog Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$49.99",

  image: emeraldProductCard,
  recommendationImage: emeraldProduct,

  description:
    "A rich emerald green dog hoodie featuring an artistic mosaic heart design in layered jewel-toned hues for a polished, fashion-forward statement look.",

  variants: [
    {
      id: "emerald-green",
      name: "Emerald Green",
      swatch: "#0f6b4f",
      thumbnail: emeraldProduct,
      gallery: [
        emeraldBack,
        emeraldSide,
        emeraldFront1,
        emeraldFront2,
        emeraldProduct,
        emeraldDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  details: {
    overview:
      "Bold elegance meets cozy comfort in the Emerald Mosaic Heart Dog Hoodie. Crafted in a rich emerald green, this stylish sleeved hoodie features an artistic mosaic heart composed of layered emerald, sage, mint, olive, and shimmering gold tones. The painterly heart motif creates a modern, elevated look while the cozy hood, short sleeves, ribbed cuffs, and ribbed hem give the garment a polished silhouette made for everyday wear and special outings alike.",

    features: [
      "Rich emerald green color",
      "Artistic mosaic heart graphic",
      "Layered emerald, sage, mint, olive, and gold tones",
      "Cozy hooded design",
      "Short sleeves with ribbed cuffs",
      "Ribbed bottom hem for a polished finish",
      "Structured silhouette with carefully placed seams",
      "Fashion-forward boutique-inspired styling",
      "Ideal for everyday wear, photos, special occasions, and seasonal gifting",
    ],

    specifications: [
      "Product Type: Dog Hoodie",
      "Color: Emerald Green",
      "Style: Artistic / Boutique Pet Fashion",
      "Graphic: Mosaic Heart",
      "Sleeve Style: Short Sleeves",
      "Cuff Style: Ribbed",
      "Hem Style: Ribbed",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Category: Pet Clothing",
      "Subcategory: Hoodies",
      "Suitable For: Everyday Wear, Cool Weather, Photos, Special Occasions, and Holiday Outings",
    ],
  },

  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};