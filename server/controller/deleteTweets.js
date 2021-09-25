import allTweets from '../repository/tweets.js';

export const deleteTweets = (req, res) => {
  let targetId = req.params.id;
  let targetIdx = 0;

  allTweets.forEach((v, i) => {
    if (v.id.toString() === targetId.toString()) targetIdx = i;
  });

  allTweets.splice(targetIdx, 1);

  res.sendStatus(204);
};
