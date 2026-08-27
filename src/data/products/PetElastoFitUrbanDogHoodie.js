import elastoFitBack from "../../assets/Pet Product/Pet Clothing/Hoodies/pet-elasto-fit-urban-dog-hoodie/pet-elasto-fit-urban-dog-hoodie-back.png";
import elastoFitSide from "../../assets/Pet Product/Pet Clothing/Hoodies/pet-elasto-fit-urban-dog-hoodie/pet-elasto-fit-urban-dog-hoodie-side.png";
import elastoFitFront from "../../assets/Pet Product/Pet Clothing/Hoodies/pet-elasto-fit-urban-dog-hoodie/pet-elasto-fit-urban-dog-hoodie-front.png";
import elastoFitProductBack from "../../assets/Pet Product/Pet Clothing/Hoodies/pet-elasto-fit-urban-dog-hoodie/pet-elasto-fit-urban-dog-hoodie-product-back.png";
import elastoFitProductFront from "../../assets/Pet Product/Pet Clothing/Hoodies/pet-elasto-fit-urban-dog-hoodie/pet-elasto-fit-urban-dog-hoodie-product-front.png";
import elastoFitProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/pet-elasto-fit-urban-dog-hoodie/pet-elasto-fit-urban-dog-hoodie-product-card-1.jpg";


export const petElastoFitUrbanDogHoodie = {
  id: "pet-elasto-fit-urban-dog-hoodie",
  name: "Elasto-Fit Urban Dog Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$49.99",

  image: elastoFitProductCard,
recommendationImage: elastoFitProductBack,

  description:
    "A sporty red fleece dog hoodie featuring flexible Elasto-Fit Technology, cozy jersey lining, and streetwear-inspired details for comfortable everyday wear.",

  variants: [
    {
      id: "red",
      name: "Red",
      swatch: "#d62828",
      thumbnail: elastoFitProductBack,
      gallery: [
        elastoFitBack,
        elastoFitSide,
        elastoFitFront,
        elastoFitProductBack,
        elastoFitProductFront,
      ],
    },
  ],

  sizes: ["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],

  details: {
    overview:
      "Give your pup a street-style upgrade with the Elasto-Fit Urban Dog Hoodie. Designed for dogs who like to stay cozy while looking effortlessly cool, this sporty red hoodie is ideal for neighborhood walks, chilly mornings, weekend adventures, or relaxing at home. Made from 100% polyester fleece with a soft jersey lining, it provides comfortable warmth while innovative Elasto-Fit Technology helps create a flexible, secure fit that moves comfortably with your dog.",

    features: [
      "Elasto-Fit Technology for a flexible and comfortable fit",
      "100% polyester fleece construction",
      "Soft jersey lining for added comfort",
      "Full kangaroo pocket",
      "Retro-inspired hood detailing",
      "Velcro tab at the hood",
      "Sleeveless design for comfortable movement",
      "Vibrant red color",
      "Easy everyday streetwear style",
      "Suitable for indoor and outdoor wear",
    ],

    specifications: [
      "Product Type: Dog Hoodie",
      "Material: 100% Polyester Fleece",
      "Lining: Soft Jersey",
      "Fit Technology: Elasto-Fit",
      "Style: Urban / Sporty Pet Streetwear",
      "Color: Red",
      "Hood Detail: Velcro Tab",
      "Pocket: Full Kangaroo Pocket",
      "Sleeve Style: Sleeveless",
      "Available Sizes: 2XS, XS, S, M, L, XL, 2XL, and 3XL",
      "Category: Pet Clothing",
      "Subcategory: Hoodies",
      "Suitable For: Walks, Cool Weather, Everyday Wear, and Lounging",
    ],
  },

  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};