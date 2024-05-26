const express = require("express");
const { body } = require("express-validator");

const feedController = require("../controllers/feed");
const auth = require("../middleware/is-auth");
const router = express.Router();

// GET /feed/posts
router.get("/posts", auth, feedController.getPosts);

// POST /feed/post
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  auth,
  feedController.createPost,
);

router.get("/post/:postId", auth, feedController.getPost);

router.put(
  "/post/:postId",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  auth,
  feedController.updatePost,
);

router.delete("/post/:postId", feedController.deletePost);
module.exports = router;
