const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.create(req.body);
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.update(
            {
                title: req.body.title,
                body: req.body.body
            },
            { where: { id: req.params.id } }
        );

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);        
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({ where: { id: req.params.id } });

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);        
    }
});







module.exports = router;