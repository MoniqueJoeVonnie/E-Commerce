import libertyAerial from "../../assets/Pet Product/Pet Clothing/Tees/the-liberty-luxe-dog-tee/the-liberty-luxe-dog-tee-aerial.png";
import libertyBack from "../../assets/Pet Product/Pet Clothing/Tees/the-liberty-luxe-dog-tee/the-liberty-luxe-dog-tee-back.png";
import libertyDetail from "../../assets/Pet Product/Pet Clothing/Tees/the-liberty-luxe-dog-tee/the-liberty-luxe-dog-tee-detail.png";
import libertyFront from "../../assets/Pet Product/Pet Clothing/Tees/the-liberty-luxe-dog-tee/the-liberty-luxe-dog-tee-front.png";
import libertyProduct from "../../assets/Pet Product/Pet Clothing/Tees/the-liberty-luxe-dog-tee/the-liberty-luxe-dog-tee-product.png";
import libertyProductCard from "../../assets/Pet Product/Pet Clothing/Tees/the-liberty-luxe-dog-tee/the-liberty-luxe-dog-tee-product-card-1.png";
import libertySide from "../../assets/Pet Product/Pet Clothing/Tees/the-liberty-luxe-dog-tee/the-liberty-luxe-dog-tee-side.png";



export const theLibertyLuxeDogTee = {
  id: "the-liberty-luxe-dog-tee",
  name: "The Liberty Luxe Dog Tee",
  category: "clothing",
  subcategory: "tees",
  price: "$29.99",

  image: libertyProductCard,
  recommendationImage: libertyProductCard,

  description:
    "A crisp white patriotic dog tee featuring a bold vintage varsity-inspired 1776 America - Land of the Free graphic in classic red, white, and blue.",

  variants: [
    {
      id: "white",
      name: "White",
      swatch: "#ffffff",
      thumbnail: libertyProduct,
      gallery: [
        libertyBack,
        libertySide,
        libertyAerial,
        libertyFront,
        libertyProduct,
        libertyDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL"],

  whyYoullLoveIt: [
    {
      title: "Vintage Americana Style",
      text: "Bold 1776-inspired artwork in classic red, white, and blue.",
    },
    {
      title: "Lightweight & Breathable",
      text: "Comfortable for warm-weather outings and indoor wear.",
    },
    {
      title: "Easy Movement",
      text: "Sleeveless construction gives your pup room to walk, play, and relax.",
    },
    {
      title: "Soft, Comfortable Feel",
      text: "Designed for comfortable everyday wear.",
    },
    {
      title: "Celebration Ready",
      text: "A standout choice for Fourth of July festivities, patriotic holidays, parties, and photos.",
    },
    {
      title: "Versatile Statement Piece",
      text: "Pair it with a harness, bandana, denim accessory, or wear it solo.",
    },
  ],

  productDetails: [
    ["Color", "White with Red, Navy, and Blue Graphic"],
    ["Style", "Pullover Dog Tee"],
    ["Sizes", "XS, S, M, L & XL"],
    ["Design", "1776 America - Land of the Free"],
  ],

  details: {
    overview:
      "Celebrate classic American style with The Liberty Luxe Dog Tee, a crisp white statement tee made for pups with plenty of personality. Featuring a bold, vintage varsity-inspired 1776 America - Land of the Free graphic in patriotic red, white, and blue, this tee gives everyday dogwear a fun Americana-inspired upgrade. The lightweight construction helps keep your pup comfortable while providing an easy, relaxed fit for everyday adventures. Its sleeveless design allows plenty of freedom through the front legs, while the soft, flexible fabric makes it comfortable for walks, family gatherings, photoshoots, and lounging at home.",

    features: [
      "Vintage varsity-inspired patriotic graphic",
      "White base with red, navy, and blue detailing",
      "Lightweight construction",
      "Sleeveless design for easy movement",
      "Soft and flexible everyday fit",
      "Pullover styling",
      "Ideal for patriotic holidays, photos, outings, and summer events",
    ],

    specifications: [
      "Product Type: Dog Tee",
      "Color: White",
      "Graphic: 1776 America - Land of the Free",
      "Style: Patriotic / Americana-Inspired",
      "Closure: Pullover",
      "Available Sizes: XS, S, M, L, and XL",
      "Category: Pet Clothing",
      "Subcategory: Tees",
    ],
  },

  fullDescription:
    "Perfect for Fourth of July celebrations, Memorial Day weekends, patriotic photos, backyard barbecues, seaside strolls, parades, and summer vacations, The Liberty Luxe Dog Tee brings effortless all-American charm to your pup's wardrobe.",

  closingText:
    "The Liberty Luxe Dog Tee is where patriotic spirit meets pup-approved style—because the best-dressed member of the family deserves to celebrate in style, too.",

  inStock: true,
};