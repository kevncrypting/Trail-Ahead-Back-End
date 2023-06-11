/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('hikes').del()
  await knex('hikes').insert([
    {
        hikePlanner: 1,
        trailName: "Forest Trail",
        trailThumbnail: "https://example.com/trail1-thumbnail.jpg",
        trailCover: "https://example.com/trail1-cover.jpg",
        timeDate: "06-15-2023",
        currentGroupSize: 1,
        maxGroupSize: 3,
        about: "We're an adventurous and friendly group, fueled by our love for the great outdoors. We cherish the company of like-minded individuals who share our passion for hiking, dogs, and the top 50 radio hits. With a casual pace, we explore picturesque trails, always aiming to reach the perfect spots for breathtaking views and memorable picnic breaks. Join us as we embrace nature's beauty, indulge in delicious snacks, and engage in captivating conversations. Get ready for an incredible hiking experience filled with laughter, camaraderie, and a sense of awe at every turn!",
        expectations: "We're aiming for a casual pace and planning to stop at the 3 mi mark to enjoy the waterfall and have a picnic break. Bring a book, your favorite snacks, and a hammock if you have one!"
      },
      {
        hikePlanner: 3,
        trailName: "Mountain Trail",
        trailThumbnail: "https://example.com/trail2-thumbnail.jpg",
        trailCover: "https://example.com/trail2-cover.jpg",
        timeDate: "06-22-2023",
        currentGroupSize: 2,
        maxGroupSize: 4,
        about: "We're a dynamic group of outdoor enthusiasts who thrive on the thrill of exploration. Bound together by our shared love for hiking, we embark on exhilarating adventures through rugged terrains and scenic trails. Along the way, we revel in the joy of discovering hidden gems, capturing stunning photographs, and immersing ourselves in the tranquility of nature. With an infectious energy, we embrace diverse interests, from capturing captivating wildlife moments to discussing thought-provoking books. Our hikes are a harmonious blend of invigorating challenges and leisurely pauses to savor breathtaking vistas. Join us as we create lasting memories, forge deep friendships, and revel in the awe-inspiring wonders of the great outdoors.",
        expectations: "We're aiming for a casual pace and planning to reach the summit by sunset. Bring a sturdy pair of hiking boots, a headlamp, and some snacks!"
      },
      {
        hikePlanner: 5,
        trailName: "Coastal Trail",
        trailThumbnail: "https://example.com/trail3-thumbnail.jpg",
        trailCover: "https://example.com/trail3-cover.jpg",
        timeDate: "06-29-2023",
        currentGroupSize: 3,
        maxGroupSize: 5,
        about: "We're an adventurous group of nature enthusiasts, always seeking new horizons and thrilling experiences. With a shared passion for hiking, we embark on exhilarating journeys through untamed wilderness and picturesque landscapes. Our dynamic personalities bring a vibrant mix of interests, from birdwatching and wildflower identification to capturing stunning landscape photography. As we conquer challenging trails, we bond over our love for hearty conversations, fueled by our curiosity about diverse cultures and world affairs. Along the way, we take time to appreciate the small wonders, like finding hidden waterfalls or spotting elusive wildlife. Join us as we push our limits, forge deep connections, and create unforgettable memories amidst the beauty of nature.",
        expectations: "We're aiming for a casual pace and planning to explore the beautiful coastal views. Bring comfortable shoes, sunscreen, and a camera to capture the moments!"
      },
      {
        hikePlanner: 2,
        trailName: "Lakeview Trail",
        trailThumbnail: "https://example.com/trail5-thumbnail.jpg",
        trailCover: "https://example.com/trail5-cover.jpg",
        timeDate: "07-13-2023",
        currentGroupSize: 2,
        maxGroupSize: 6,
        about: "We're a group of nature enthusiasts who are captivated by the serenity of lakes and the stunning vistas they offer.",
        expectations: "Join us as we embark on a scenic hike that takes us around a pristine lake. We'll pause to appreciate the tranquility, have a lakeside picnic, and maybe even take a refreshing swim!"
      },
      {
        hikePlanner: 4,
        trailName: "Summit Adventure",
        trailThumbnail: "https://example.com/trail6-thumbnail.jpg",
        trailCover: "https://example.com/trail6-cover.jpg",
        timeDate: "07-20-2023",
        currentGroupSize: 1,
        maxGroupSize: 3,
        about: "I am an ambitious hiker who is always seeking the thrill of reaching breathtaking summits and conquering towering peaks.",
        expectations: "On this challenging hike, we'll push ourselves to the limit, navigating steep ascents, rocky terrains, and possibly even scrambling sections. The reward? Sweeping panoramic views from the summit that will take your breath away!"
      },
      {
        hikePlanner: 2,
        trailName: "Canyon Trail",
        trailThumbnail: "https://example.com/trail4-thumbnail.jpg",
        trailCover: "https://example.com/trail4-cover.jpg",
        timeDate: "07-06-2023",
        currentGroupSize: 4,
        maxGroupSize: 4,
        about: "We are a group of passionate explorers who live for the thrill of conquering canyons and uncovering hidden treasures.",
        expectations: "On this hike, we'll navigate rugged terrains, scramble through narrow passageways, and witness breathtaking vistas from towering cliffs. Prepare to be amazed!"
      }
  ]);
};
