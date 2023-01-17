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
        comment: "1",
        blog_id: 3,
        user_id: 3,
    },
    {
        comment: "2",
        blog_id: 3,
        user_id: 2,
    },
    {
        comment: "3",
        blog_id: 3,
        user_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;