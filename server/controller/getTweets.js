import allTweets from '../repository/tweets.js';

const getAllTweets = (req, res) => {
  if (req?.query?.username) {
    let target = req.query.username;
    let targetArr = allTweets.filter((tweet) => target === tweet.username);
    return res.status(200).json(targetArr);
  }

  res.status(200).json(allTweets);
};

const getIdTweet = (req, res) => {
  let id = req.params.id;
  let targetArr = allTweets.filter((tweet) => +id === tweet.id);
  if (targetArr.length !== 0) {
    res.status(200).json(targetArr);
  } else {
    res.status(404).json({ message: `${id} is not found` });
  }
};

export { getAllTweets, getIdTweet };
