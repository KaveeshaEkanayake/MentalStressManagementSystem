import express from 'express';
import { chatWithBot, getChatHistory } from '../controllers/chatController.js';
import userAuth from '../middleware/userAuth.js';

const router = express.Router();

router.post('/', userAuth, chatWithBot);
router.get('/history', userAuth, getChatHistory); // Get chat history

export default router;