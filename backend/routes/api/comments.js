const express = require('express');
const asyncHandler = require('express-async-handler');

const { Song } = require('../../db/models');
const { User } = require('../../db/models');
const { Comment } = require('../../db/models');

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({ include: { model: User } });

    return res.json({
      comments,
    });
  })
)

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { songId, userId, addCommentValue } = req.body;

    const comment = await Comment.create({
      song_id: songId,
      user_id: userId,
      body: addCommentValue
    })

    return res.json({
      comment
    });
  })
)



module.exports = router;
