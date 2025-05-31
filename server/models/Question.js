import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  username: { type: String, required: true },
  answerText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isCounsellor: { type: Boolean, default: false },
});

const questionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  username: { type: String, required: true },
  questionText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  answers: [answerSchema],
});

const Question = mongoose.model('Question', questionSchema);
export default Question;
