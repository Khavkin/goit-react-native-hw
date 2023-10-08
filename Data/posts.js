export const posts = [
  {
    id: "1234",
    userID: "1234567890",
    image: require("../Images/post1.jpg"),
    location: {
      region: "Ivano-Frankivs'k Region",
      country: "Ukraine",
    },
    title: "Ліс",
    likes: 153,
    comments: [
      {
        id: "123",
        userID: "1234567891",
        comment:
          "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
      },
      {
        id: "124",
        userID: "1234567890",
        comment:
          "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:14",
      },
      {
        id: "125",
        userID: "1234567891",
        comment: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 09:20",
      },
    ],
  },
  {
    id: "1235",
    userID: "1234567890",
    image: require("../Images/post2.jpg"),
    location: {
      region: "Kherson Region",
      country: "Ukraine",
    },
    title: "Захід на Чорному морі",
    likes: 200,
    comments: [
      {
        id: "123",
        userID: "1234567891",
        comment:
          "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
      },
      {
        id: "124",
        userID: "1234567890",
        comment:
          "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:14",
      },
      {
        id: "125",
        userID: "1234567891",
        comment: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 09:20",
      },
    ],
  },
  {
    id: "1236",
    userID: "1234567890",
    image: require("../Images/post3.jpg"),
    location: {
      region: "Veneto Region",
      country: "Italy",
    },
    title: "Старий будиночок у Венеції",
    likes: 200,
    comments: [
      {
        id: "123",
        userID: "1234567891",
        comment:
          "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
      },
      {
        id: "124",
        userID: "1234567890",
        comment:
          "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:14",
      },
      {
        id: "125",
        userID: "1234567891",
        comment: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 09:20",
      },
    ],
  },
];

export default posts;
