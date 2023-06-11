/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("hikes").del();
    await knex("hikes").insert([
        {
            hikePlanner: 1,
            trailName: "Mountain Peak Trail",
            trailThumbnail: "https://example.com/trail1-thumbnail.jpg",
            trailCover: "https://example.com/trail1-cover.jpg",
            timeDate: "06-15-2023",
            currentGroupSize: 1,
            maxGroupSize: 3,
            about: "I am an adventurous mountain enthusiast, seeking breathtaking views, challenging trails, and unforgettable memories!",
            expectations:
                "Join me as we conquer steep ascents, navigate rocky terrains, and revel in the stunning beauty of mountain landscapes.",
        },
        {
            hikePlanner: 3,
            trailName: "Forest Trail",
            trailThumbnail: "https://example.com/trail2-thumbnail.jpg",
            trailCover: "https://example.com/trail2-cover.jpg",
            timeDate: "06-22-2023",
            currentGroupSize: 2,
            maxGroupSize: 4,
            about: "We're a group of nature enthusiasts, immersed in the serenity of lush forests, vibrant flora, and the symphony of chirping birds!",
            expectations:
                "Join us on this enchanting hike as we meander through winding trails, embrace the tranquility of the woods, and discover hidden wonders.",
        },
        {
            hikePlanner: 5,
            trailName: "Coastal Trail",
            trailThumbnail: "https://example.com/trail3-thumbnail.jpg",
            trailCover: "https://example.com/trail3-cover.jpg",
            timeDate: "06-29-2023",
            currentGroupSize: 3,
            maxGroupSize: 5,
            about: "We're a group of beach lovers who enjoy the soothing sound of crashing waves, stunning coastal views, and exploring hidden coves.",
            expectations:
                "We're aiming for a casual pace and planning to explore the beautiful coastal views. Bring comfortable shoes, sunscreen, and a camera to capture the moments!",
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
            expectations:
                "Join us as we embark on a scenic hike that takes us around a pristine lake. We'll pause to appreciate the tranquility, have a lakeside picnic, and maybe even take a refreshing swim!",
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
            expectations:
                "On this challenging hike, we'll push ourselves to the limit, navigating steep ascents, rocky terrains, and possibly even scrambling sections. The reward? Sweeping panoramic views from the summit that will take your breath away!",
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
            expectations:
                "On this hike, we'll navigate rugged terrains, scramble through narrow passageways, and witness breathtaking vistas from towering cliffs. Prepare to be amazed!",
        },
    ]);
};
