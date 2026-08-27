import influencerBack from "../../assets/Pet Product/Pet Clothing/Hoodies/influencer-dog-hoodie/influencer-back.png";
import influencerSide from "../../assets/Pet Product/Pet Clothing/Hoodies/influencer-dog-hoodie/influencer-side.png";
import influencerFront from "../../assets/Pet Product/Pet Clothing/Hoodies/influencer-dog-hoodie/influencer-front.png";
import influencerProduct from "../../assets/Pet Product/Pet Clothing/Hoodies/influencer-dog-hoodie/influencer-product.png";
import influencerDetail from "../../assets/Pet Product/Pet Clothing/Hoodies/influencer-dog-hoodie/influencer-detail.png";
import influencerProductCard from "../../assets/Pet Product/Pet Clothing/Hoodies/influencer-dog-hoodie/influencer-dog-hoodie-product-card-1.jpg";

export const influencerDogHoodie = {
  id: "influencer-dog-hoodie",
  name: "#INFLUENCER Dog Hoodie",
  category: "clothing",
  subcategory: "hoodies",
  price: "$59.99",

  image: influencerProductCard,
  recommendationImage: influencerProduct,

  description:
    "A social-media-ready statement hoodie designed for fashionable pups who love being the center of attention.",

  variants: [
    {
      id: "grey",
      name: "Grey",
      swatch: "#8c8c8c",
      thumbnail: influencerProduct,
      gallery: [
        influencerBack,
        influencerSide,
        influencerFront,
        influencerProduct,
        influencerDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL"],

  details: {
    overview:
      "Turn every walk into a photo op with the #INFLUENCER Dog Hoodie. Designed for pups who were born to be noticed, this playful statement hoodie brings social-media-ready attitude to everyday wear. The bold #INFLUENCER graphic across the back creates an eye-catching look for neighborhood walks, photos, pup-friendly outings, and special occasions, while the hood and short-sleeve construction give it an adorable streetwear-inspired finish.",

    features: [
      "Bold #INFLUENCER statement graphic",
      "Stylish hoodie construction",
      "Comfortable short sleeves",
      "Cozy hood for a fashionable streetwear look",
      "Easy to style for everyday wear",
      "Ideal for photoshoots and social media content",
      "Great for walks, outings, and special occasions",
      "Designed for fashionable statement-making pups",
    ],

    specifications: [
      "Product Type: Dog Hoodie",
      "Style: Social Media-Inspired Pet Streetwear",
      "Graphic: #INFLUENCER",
      "Sleeve Style: Short Sleeves",
      "Color: Grey",
      "Available Sizes: XS, S, M, L, and XL",
      "Category: Pet Clothing",
      "Subcategory: Hoodies",
      "Suitable For: Everyday Wear, Photos, Social Media Posts, Outings, and Special Occasions",
    ],
  },

  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};