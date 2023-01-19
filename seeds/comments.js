const { Comment } = require('../models');

const comments = [
    {
        comment: "First comment",
        blog_id: 1,
        user_id: 2,
    },
    {
        comment: "How did you beat me?",
        blog_id: 1,
        user_id: 1,
    },
    {
        comment: "comment comment comment",
        blog_id: 2,
        user_id: 1,
    },
    {
        comment: "Did this work?",
        blog_id: 3,
        user_id: 3,
    },
    {
        comment: "Oh very interesting!",
        blog_id: 3,
        user_id: 2,
    },
    {
        comment: "Ok cool..",
        blog_id: 3,
        user_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;