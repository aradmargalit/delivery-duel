import type { Restaurant } from '../../types/restaurant';

export const getRestaurantOptions = (): Restaurant[] => [
  {
    title: 'Thai Fix',
    imageUrl:
      'https://static-content.owner.com/brands/funnel/hero-background-images/teuDydnBHKyWhSCc4b5kuQBq.png?v=7370490082&w=3840&q=80&auto=format',
    cuisine: 'Thai'
  },
  {
    title: 'The Stand',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipOvhwkOaO4VHU8R5hJnza9YmoYes_2CiMzW3Sdu=s1360-w1360-h1020',
    cuisine: 'Burgers'
  },
  {
    title: 'Chipotle',
    imageUrl:
      'https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/chipotle-burrito-bowls-tacos.jpg?quality=82&strip=1',
    cuisine: 'Mexican'
  },
  {
    title: 'Pizza Amore',
    imageUrl: 'https://img.restaurantguru.com/r920-Pizza-Amore-Cafe-pizza.jpg',
    cuisine: 'Pizza'
  },
  {
    title: "Titan's Pho",
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-p/14/3b/82/96/pho.jpg',
    cuisine: 'Pho'
  },
  {
    title: 'Jade China',
    imageUrl: 'https://d1ralsognjng37.cloudfront.net/509c7abd-2ef3-4ab1-bc87-760c79607f48.webp',
    cuisine: 'Chinese'
  }
];
