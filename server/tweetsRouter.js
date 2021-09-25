import express from 'express';
import 'express-async-error';
import { getAllTweets, getIdTweet } from './controller/getTweets.js';
import { postTweets } from './controller/postTweets.js';
import { putTweets } from './controller/putTweets.js';
import { deleteTweets } from './controller/deleteTweets.js';

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
//해당 유저에 대한 트윗 가져오기
router.get('/', getAllTweets);

// GET /tweets:id
//해당 id 트윗만 가져오기
router.get('/:id', getIdTweet);

// POST /tweets
//새로운 트윗 만들기
router.post('/', postTweets);

// PUT /tweets/:id
//이미 작성한 트윗 편집가능
router.put('/:id', putTweets);

// DELETE /tweets/:id
//이미 작성한 트윗 편집가능
router.delete('/:id', deleteTweets);

export default router;
