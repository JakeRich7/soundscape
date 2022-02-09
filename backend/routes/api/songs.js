const express = require('express');
const asyncHandler = require('express-async-handler');

const { Song } = require('../../db/models');
const { User } = require('../../db/models');
const { Comment } = require('../../db/models');

const router = express.Router();


router.get(
  '/',
  asyncHandler(async (req, res) => {
    const songs = await Song.findAll({ include: { model: User } });

    return res.json({
      songs,
    });
  })
)

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { title, url, userId } = req.body;

    const song = await Song.create({
      title,
      url,
      user_id: userId,
      favorite: false
    })

    return res.json({
      song
    });
  })
)

router.put(
  '/',
  asyncHandler(async (req, res) => {
    const { title, url, songId } = req.body;

    const song = await Song.update(
      { title, url },
      { where: { id: songId } }
    )

    return res.json({
      song
    });
  })
)

router.delete(
  '/:songId',
  asyncHandler(async (req, res) => {
    const songToDelete = req.params.songId;

    await Comment.destroy(
      { where: { song_id: songToDelete } }
    )

    const song = await Song.destroy(
      { where: { id: songToDelete } }
    )

    return res.json({
      song
    });
  })
)



module.exports = router;
