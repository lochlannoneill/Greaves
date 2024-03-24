import profile from "./profile.png";
import p1_product_i1 from "./p1_product_i1.png";
import p1_product_i2 from "./p1_product_i2.png";
import p1_product_i3 from "./p1_product_i3.png";
import p1_product_i4 from "./p1_product_i4.png";

let reviews = [
  {
    id: 1,
    productId: 1,
    profile_image: profile,
    userName: "Lochlann O Neill",
    userHandle: "@lochlannoneill",
    rating: 4.5,
    summary: "This is an absolutely great product!",
    date: "2022-02-22",
    time: "17:40:22",
    verified: true,
    images: [p1_product_i1, p1_product_i2, p1_product_i3, p1_product_i4],
    description: "This is a great product. I would recommend it to anyone. It is very easy to use and has great features. I am very happy with my purchase. I will definitely buy more products from this brand in the future.",
    helpful: ["user1_id", "user2_id", "user3_id", "user4_id", "user5_id"]
  },
  {
    id: 2,
    productId: 1,
    userName: "John Doe",
    userHandle: "@johndoe",
    rating: 1,
    summary: "Terrible product",
    date: "2021-01-05",
    time: "14:00:00",
    verified: false,
    images: [p1_product_i2],
    description:
      "This is a terrible product. I would not recommend it to anyone.",
    helpful: ["user1_id"]
  },
  {
    id: 3,
    productId: 1,
    userName: "Jane Smith",
    userHandle: "@janesmith",
    rating: 2.5,
    summary: "Bad product",
    date: "2021-01-04",
    time: "13:00:00",
    verified: true,
    images: [p1_product_i4, p1_product_i3],
    description: "This is a bad product. I would not recommend it to anyone.",
    helpful: []
  },
  {
    id: 4,
    productId: 1,
    userName: "Jane Doe",
    userHandle: "@janedoe",
    rating: 4,
    summary: "Good product",
    date: "2021-01-02",
    time: "11:00:00",
    verified: true,
    images: [],
    description: "This is a good product. I would recommend it to anyone.",
    helpful: []
  },
  {
    id: 5,
    productId: 1,
    userName: "John Smith",
    userHandle: "@johnsmith",
    rating: 3.5,
    summary: "Okay product",
    date: "2021-01-03",
    time: "12:00:00",
    verified: false,
    images: [],
    description: "This is an okay product. I would recommend it to anyone.",
    helpful: []
  },
];

export default reviews;
