import allTweets from '../repository/tweets.js';

export const putTweets = (req, res) => {
  let targetId = req.params.id;
  let targetObj = allTweets.find(
    (v) => v.id.toString() === targetId.toString()
  );

  if (targetObj) {
    targetObj[0].text = req.body.text;
    res.status(200).json(targetObj[0]);
  } else {
    res.sendStatus(404);
  }
};
