import stripedBack from "../../assets/Pet Product/Pet Clothing/Hoodies/sleeveless-striped-hoodie/sleeveless-striped-hoodie-back.png";
import stripedDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/sleeveless-striped-hoodie/sleeveless-striped-hoodie-detail.png";
import stripedFront from "../../assets/Pet Product/Pet Clothing/Hoodies/sleeveless-striped-hoodie/sleeveless-striped-hoodie-front.png";
import stripedProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/sleeveless-striped-hoodie/sleeveless-striped-hoodie-product-card-1.png";
import stripedProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/sleeveless-striped-hoodie/sleeveless-striped-hoodie-product.png";
import stripedSideJpg from "../../assets/Pet Product/Pet Clothing/Hoodies/sleeveless-striped-hoodie/sleeveless-striped-hoodie-side.jpg";
import stripedSide from "../../assets/Pet Product/Pet Clothing/Hoodies/sleeveless-striped-hoodie/sleeveless-striped-hoodie-side.png";

export const sleevelessStripedHoodie = {
  id: "sleeveless-striped-hoodie",
  name: "Striped Streetwear Dog Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$39.99",

  image: stripedProductCard,
  recommendationImage: stripedProductCard,

  description:
    "Give your pup a cool, casual upgrade with the Striped Streetwear Dog Hoodie. Designed with classic navy-and-white stripes and playful graphic details, this cozy hoodie combines an effortlessly stylish look with the comfort your pup needs for cooler days.",

  variants: [
    {
      id: "navy-white",
      name: "Navy & White",
      swatch: "#1f2a44",
      thumbnail: stripedProduct,
      gallery: [
        stripedFront,
        stripedSide,
        stripedSideJpg,
        stripedBack,
        stripedProduct,
        stripedDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL", "XXL", "FB", "FB2"],

  details: {
  overview:
    "Give your pup a cool, casual upgrade with the Striped Streetwear Dog Hoodie. Designed with classic navy-and-white stripes and playful graphic details, this cozy hoodie combines an effortlessly stylish look with the comfort your pup needs for cooler days. Crafted from soft cotton fabric, the lightweight yet insulating design helps keep your dog warm and comfortable during chilly autumn and winter outings without feeling overly bulky. The breathable construction makes it just as comfortable for neighborhood walks and outdoor adventures as it is for lounging at home.",

  features: [
    "Soft and breathable cotton construction",
    "Classic navy-and-white striped design",
    "Lightweight warmth for cooler weather",
    "Easy pullover construction",
    "Stretchable neckline for easier dressing",
    "Comfortable arm openings for natural movement",
    "Decorative hood and drawstring detailing",
    "Reinforced stitching for everyday durability",
    "Machine-washable construction",
    "Ideal for everyday wear, birthdays, holidays, photos, outings, and seasonal celebrations",
  ],

  specifications: [
    "Product Type: Striped Hooded Dog Sweatshirt",
    "Material: Cotton",
    "Closure: Pullover",
    "Season: Fall / Winter / Transitional Weather",
    "Recommended Weather: Approximately 50°F–68°F (10°C–20°C), depending on your dog's coat and comfort",
    "Breed Size: Extra-Small to Medium Breeds",
    "Available Sizes: XS, S, M, L, XL, XXL, FB, and FB2",
    "Suitable For: Pomeranians, Chihuahuas, Toy Poodles, French Bulldogs, and similarly sized breeds",
    "Item Code: 1063650030",
  ],
},

  sizingTip:
    "For the best fit, measure your pup before ordering and compare the measurements with the size chart. Pay particular attention to the chest measurement, along with neck and back length. If your pup falls between two sizes, choosing the larger size will generally provide a more comfortable fit.",
};