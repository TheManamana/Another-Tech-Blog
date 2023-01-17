const { User } = require("../models");

const users = [
    {
        name: "Paris",
        email: "paris@test.com",
        password: "testtest",
    },
    {
        name: "Brian",
        email: "brian@test.com",
        password: "testtest",
    },
    {
        name: "Lindsay",
        email: "lindsay@test.com",
        password: "testtest",
    },
];

const seedUser = () => User.bulkCreate(users);

module.exports = seedUser;