import allTweets from '../repository/tweets.js';
import { v4 as uuidv4 } from 'uuid';

export const postTweets = (req, res) => {
  let newTweet = {
    ...req.body,
    id: uuidv4(),
    createdAt: Date.now(),
  };

  // 가장 앞으로 넣는 방법은 ?? unshift로 mutable하게 접근해도 괜찮나??
  allTweets.unshift(newTweet);

  //!POST http://localhost:8000/tweets 500 (Internal Server Error)
  // allTweets = [newTweet, ...allTweets];

  return res.status(201).json(newTweet);
};
