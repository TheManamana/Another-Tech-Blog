const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            comment: req.body.comment,
            user_id: req.session.userId,
            blog_id: req.body.post_id
        });

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);        
    }

});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({ where: { id: req.params.id } });

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);        
    }
});

module.exports = router;