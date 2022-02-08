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



module.exports = router;
