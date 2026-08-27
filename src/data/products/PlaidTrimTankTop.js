import plaidTrimAerial from "../../assets/Pet Product/Pet Clothing/Tees/plaid-trim-tanktop/plaid-trim-tanktop-aerial.png";
import plaidTrimBack from "../../assets/Pet Product/Pet Clothing/Tees/plaid-trim-tanktop/plaid-trim-tanktop-back.png";
import plaidTrimDetail from "../../assets/Pet Product/Pet Clothing/Tees/plaid-trim-tanktop/plaid-trim-tanktop-detail.png";
import plaidTrimFront from "../../assets/Pet Product/Pet Clothing/Tees/plaid-trim-tanktop/plaid-trim-tanktop-front.png";
import plaidTrimProductCard from "../../assets/Pet Product/Pet Clothing/Tees/plaid-trim-tanktop/plaid-trim-tanktop-product-card-1.png";
import plaidTrimProduct from "../../assets/Pet Product/Pet Clothing/Tees/plaid-trim-tanktop/plaid-trim-tanktop-product.png";
import plaidTrimSide from "../../assets/Pet Product/Pet Clothing/Tees/plaid-trim-tanktop/plaid-trim-tanktop-side.jpg";





export const classicPlaidCollarTankTop = {
  id: "classic-plaid-collar-tank-top",
  name: "Classic Plaid Collar Tank Top",
  category: "clothing",
  subcategory: "tees",
  price: "$29.99",

  image: plaidTrimProductCard,
  recommendationImage: plaidTrimProductCard,

  description:
    "A polished designer-inspired dog tank featuring a crisp white body, classic plaid collar and coordinating trim, and a soft lightweight construction for comfortable everyday style.",

  variants: [
    {
      id: "white-plaid",
      name: "White & Plaid",
      swatch: "#f5f3ee",
      thumbnail: plaidTrimProduct,
      gallery: [
        plaidTrimFront,
        plaidTrimSide,
        plaidTrimAerial,
        plaidTrimBack,
        plaidTrimProduct,
        plaidTrimDetail,
      ],
    },
  ],

  sizes: ["S", "M", "L", "XL", "XXL"],

  details: {
  overview:
    "Give your pup a polished, designer-inspired look with the Classic Plaid Collar Tank Top. Featuring a crisp white body accented with a sophisticated tan, black, white, and red plaid collar and coordinating trim, this stylish top brings a timeless preppy aesthetic to your dog's everyday wardrobe. Crafted from a soft polyester-cotton blend, the lightweight fabric is designed to keep your pup comfortable while allowing plenty of freedom to move. The sleeveless silhouette and flexible pullover construction make it easy to wear for everything from daily walks and lounging at home to family outings, photoshoots, and special occasions.",

  features: [
    "Classic plaid collar and coordinating armhole trim",
    "Soft polyester-cotton blend",
    "Boutique-inspired white and plaid styling",
    "Sleeveless construction for comfortable movement",
    "Easy pullover design",
    "Lightweight all-season construction",
    "Reinforced stitching for repeat wear",
    "Ideal for walks, outings, photoshoots, celebrations, and everyday wear",
  ],

  specifications: [
    "Product Type: Sleeveless Dog Tank Top / T-Shirt",
    "Material: Polyester & Cotton",
    "Closure: Pullover",
    "Design: White with Classic Plaid Collar & Trim",
    "Available Sizes: S, M, L, XL, and XXL",
    "Fit: Small to Medium Dogs",
    "Item Code: 1102187129",
  ],
},

  sizingTip:
    "For the best fit, measure your dog's chest girth, neck girth, and back length and compare those measurements with the size chart before ordering. If your pup falls between sizes, use the chest measurement as the primary guide.",

  inStock: true,
};