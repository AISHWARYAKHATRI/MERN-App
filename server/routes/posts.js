import express from 'express';
import { getPostsBySearch, getPosts, getPost, createPost, updatePost, deletePost, likePost, commentPost } from '../controllers/posts.js'

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch)
router.get('/', getPosts)
router.get('/:id', getPost)

router.post('/', auth, createPost)
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost);
// liking something is actually updating it
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);

export default router;