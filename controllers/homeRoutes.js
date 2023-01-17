const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll(
            {
                include: { all: true },
            }
        );
        const blogArray = blogData.map((blog) => blog.get({ plain: true }));
            console.log(blogArray);

        res.render('homepage', {
            blogArray,
            // Pass the logged in flag to the template
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {

    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: {
                user_id: req.session.user_id,
            },
            include: User,
        });
        const blogArray = blogData.map((blog) => blog.get({ plain: true }));

        const userId = req.session.user_id;
        res.render('dashboard', {
            blogArray,
            userId,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blog/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [{ model: User }, { model: Comment }],
        });

        const blog = blogData.get({ plain: true });
        const userId = req.session.user_id;
        res.render('blog', {
            blog,
            userId,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
