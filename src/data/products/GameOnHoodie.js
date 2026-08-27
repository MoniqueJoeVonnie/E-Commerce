import gameOnProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/game-on-athletic-dog-hoodie/game-on-hoodie-product.png";
import gameOnBack from "../../assets/Pet Product/Pet Clothing/Hoodies/game-on-athletic-dog-hoodie/game-on-hoodie-back.png";
import gameOnAerial from "../../assets/Pet Product/Pet Clothing/Hoodies/game-on-athletic-dog-hoodie/game-on-hoodie-aerial.png";
import gameOnFront from "../../assets/Pet Product/Pet Clothing/Hoodies/game-on-athletic-dog-hoodie/game-on-hoodie-front.png";
import gameOnDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/game-on-athletic-dog-hoodie/game-on-hoodie-detail.png";
import gameOnProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/game-on-athletic-dog-hoodie/game-on-athletic-dog-hoodie-product-card-1.png";



export const gameOnHoodie = {
  id: "game-on-hoodie",
  name: "Game On Athletic Dog Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$49.99",

  image: gameOnProductCard,
  recommendationImage: gameOnProduct,

  description:
    "A sporty fleece dog hoodie designed for game days, brisk walks, and cozy everyday wear.",

  variants: [
    {
      id: "grey",
      name: "Grey",
      swatch: "#b8b8b8",
      thumbnail: gameOnProduct,
      gallery: [
        gameOnBack,
        gameOnAerial,
        gameOnFront,
        gameOnProduct,
        gameOnDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  details: {
    overview:
      "Get your pup game-day ready in the Game On Athletic Dog Hoodie. Made from soft, breathable grey fleece, this cozy hoodie features a football graphic paired with bold GAME ON lettering for an athletic-inspired look. The comfortable hood, easy-on design, and ribbed trim help create a secure fit while keeping your pup warm during brisk walks, tailgates, park outings, or relaxing days at home. Whether cheering from the couch or heading out for the next adventure, your four-legged MVP will be ready for every play. Game on!",

    features: [
      "Soft and breathable grey fleece construction",
      "Football graphic with bold GAME ON lettering",
      "Built-in hood for added warmth and sporty style",
      "Easy-on pullover design",
      "Ribbed trim for a comfortable and secure fit",
      "Warm and cozy for cooler-weather wear",
      "Designed for comfortable everyday movement",
      "Ideal for walks, tailgates, park outings, game days, and lounging",
    ],

    specifications: [
      "Product Type: Dog Hoodie",
      "Material: Fleece",
      "Color: Grey",
      "Style: Athletic / Game-Day",
      "Closure Type: Pullover",
      "Trim: Ribbed",
      "Category: Pet Clothing",
      "Subcategory: Hoodies",
      "Suitable For: Everyday and Cooler-Weather Wear",
    ],
  },

  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};