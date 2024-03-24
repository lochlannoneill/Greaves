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
    name: "Lochlann O Neill",
    rating: 5,
    summary: "Great product",
    date: "2022-02-22",
    time: "17:40:22",
    verified: true,
    images: [p1_product_i1, p1_product_i2, p1_product_i3, p1_product_i4],
    description: "This is a great product. I would recommend it to anyone.",
    helpful: []
  },
  {
    id: 2,
    productId: 1,
    name: "John Doe",
    rating: 1,
    summary: "Terrible product",
    date: "2021-01-05",
    time: "14:00:00",
    verified: false,
    images: [p1_product_i2],
    description:
      "This is a terrible product. I would not recommend it to anyone.",
    helpful: []
  },
  {
    id: 3,
    productId: 1,
    name: "Jane Smith",
    rating: 2,
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
    name: "Jane Doe",
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
    name: "John Smith",
    rating: 3,
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
