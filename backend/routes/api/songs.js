const express = require('express');
const asyncHandler = require('express-async-handler');

const { Song } = require('../../db/models');

const router = express.Router();


router.get(
  '/',
  asyncHandler(async (req, res) => {
    const songs = await Song.findAll({});

    return res.json({
      songs,
    });
  })
)

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { title, url, userId } = req.body;

    const song = Song.create({
      title,
      url,
      user_id: userId,
      favorite: false
    })

    return;
  })
)





module.exports = router;
