const { Blog } = require('../models');

const blogs = [
    {
        title: "First Blog",
        user_id: 1,
        body: "This is the first of many blogs.",
    },
    {
        title: "Second Blog",
        user_id: 2,
        body: "How many blogs can there be?",
    },
    {
        title: "This will be the last of them.",
        user_id: 3,
        body: "No more will be made",
    }
];

const seedBlog = () => Blog.bulkCreate(blogs);

module.exports = seedBlog;