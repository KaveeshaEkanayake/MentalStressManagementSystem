import express from 'express';
import {
  askQuestion,
  getQuestions,
  answerQuestion,
} from '../controllers/communityController.js';

const router = express.Router();

router.post('/ask', askQuestion);
router.get('/', getQuestions);
router.post('/answer/:questionId', answerQuestion);

export default router;
