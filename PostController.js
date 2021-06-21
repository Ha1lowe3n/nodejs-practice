import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
    async createPost(req, res) {
        try {
            const post = await PostService.createPost(req.body);
            res.status(200).json(post);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getAllPosts(req, res) {
        try {
            const posts = await PostService.getAllPosts();
            return res.json(posts);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getOnePost(req, res) {
        try {
            const post = await PostService.getOnePost(req.params.id);
            return res.json(post);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async updatePost(req, res) {
        try {
            const updatedPost = await PostService.updatePost(req.body);
            return res.json(updatedPost);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deletePost(req, res) {
        try {
            const post = await PostService.deletePost(req.params.id);
            return res.json(post);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default new PostController();
