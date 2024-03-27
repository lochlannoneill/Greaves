import profile from "./profile.png";
import p1_review1_1 from "./p1_review1_1.jpg";
import p1_review1_2 from "./p1_review1_2.jpg";
import p1_review1_3 from "./p1_review1_3.jpg";
import p1_review1_4 from "./p1_review1_4.jpg";
import p1_review2_1 from "./p1_review2_1.jpg";
import p1_review3_1 from "./p1_review3_1.jpg";
import p1_review3_2 from "./p1_review3_2.jpg";
import p1_review3_3 from "./p1_review3_3.jpg";

let reviews = [
  {
    id: 1,
    productId: 1,
    profile_image: profile,
    userName: "Lochlann O Neill",
    userHandle: "@lochlannoneill",
    rating: 4.5,
    summary: "This is an absolutely amazing product!",
    date: "2022-02-22",
    time: "17:40:22",
    verified: true,
    images: [p1_review1_1, p1_review1_2, p1_review1_3, p1_review1_4],
    description: "Wow, this top is one of the softest tops I've ever owned, it really feels so lovely on.It's quite lightweight so won't keep you very warm but is stylish,I love the unusual sleeves however, I'm quite tall (5'9), and found the sleeves short.For reference I wear a 10-12 in tops but got the S as didn't want it to be too baggy, there is loads of stretch so I'm happy with the size, actually wish it was a bit more slim fitting.",
    helpful: ["user1_id", "user2_id", "user3_id", "user4_id", "user5_id"]
  },
  {
    id: 2,
    productId: 1,
    userName: "Jane Smith",
    userHandle: "@janesmith",
    rating: 3,
    summary: "93% Cotton, fits nicely",
    date: "2024-03-26",
    time: "13:00:00",
    verified: true,
    images: [p1_review3_1, p1_review3_2, p1_review3_3],
    description: "Casual fit and style, 93% cotton and 7% spandex. (Not to tumble dry).Size fitted well on family members wearing L. Simple but nice looking long sleeve V Top.",
    helpful: []
  },
  {
    id: 3,
    productId: 1,
    userName: "John Doe",
    userHandle: "@johndoe",
    rating: 3.5,
    summary: "Great for the autumn",
    date: "2024-03-26",
    time: "14:00:00",
    verified: false,
    images: [p1_review2_1],
    description:
      "This jumper is lovely and soft and feels warm when worn without being too bulky. It can be worn on smart casual occasions and it looks stylish with the button detail on the v neckline it has a slight ribbed effect. I found the sleeve length perfect and body length was not too long just sat nicely on my hips. I got the black which looked smart worn with black trousers or jeans and the size s fitted very well I’m usually a size 10 . I would consider buying in a different colour as there is a good selection.",
    helpful: ["user1_id"]
  },
  {
    id: 4,
    productId: 3,
    userName: "Jane Doe",
    userHandle: "@janedoe",
    rating: 3,
    summary: "Good product",
    date: "2024-03-26",
    time: "11:00:00",
    verified: true,
    images: [],
    description: "Tbh I didn’t have desperately high expectations but this top is nice. It’s soft, long and just looks nice, sits well with a v-neck t shirt underneath just visible. Plus it’s a bit different, I haven’t seen anything similar in the shops.",
    helpful: []
  },
  {
    id: 5,
    productId: 3,
    userName: "John Smith",
    userHandle: "@johnsmith",
    rating: 2.5,
    summary: "Too Short",
    date: "2024-03-26",
    time: "12:00:00",
    verified: false,
    images: [],
    description: "Loved the design but wanted it to come to the top of my thighs. I'm 5'4 and it barely reaches my hips. I'm not sure I want to go larger as it fits well.",
    helpful: []
  },
];

export default reviews;
