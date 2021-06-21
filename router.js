import Router from "express";

import PostController from "./PostController.js";

const router = new Router();

const { getAllPosts, getOnePost, createPost, updatePost, deletePost } =
    PostController;

router.get("/posts", getAllPosts);
router.get("/posts/:id", getOnePost);
router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

export default router;
