const { User } = require("../models");

const users = [
    {
        name: "Paris",
        email: "paris@test.com",
        password: "$2b$10$dCjPU1gOewOi7eRf1AlloucZJpwh9oCywwSVWMhHdpHF92tSYJghu", // password is testtest
    },
    {
        name: "Brian",
        email: "brian@test.com",
        password: "$2b$10$dCjPU1gOewOi7eRf1AlloucZJpwh9oCywwSVWMhHdpHF92tSYJghu",
    },
    {
        name: "Lindsay",
        email: "lindsay@test.com",
        password: "$2b$10$dCjPU1gOewOi7eRf1AlloucZJpwh9oCywwSVWMhHdpHF92tSYJghu",
    },
];

const seedUser = () => User.bulkCreate(users);

module.exports = seedUser;