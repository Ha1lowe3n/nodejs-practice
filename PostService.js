import Post from "./Post.js";

class PostService {
    async createPost(post) {
        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAllPosts() {
        const posts = await Post.find();
        return posts;
    }

    async getOnePost(id) {
        if (!id) {
            throw new Error("ID wasn't write");
        }
        const post = await Post.findById(id);
        return post;
    }

    async updatePost(post) {
        if (!post._id) {
            throw new Error("ID wasn't write");
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
            new: true,
        });
        return updatedPost;
    }

    async deletePost(id) {
        if (!id) {
            throw new Error("ID wasn't write");
        }
        const post = await Post.findByIdAndDelete(id);
        return post;
    }
}

export default new PostService();
