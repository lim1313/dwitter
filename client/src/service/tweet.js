export default class TweetService {
  async getTweets(username) {
    return fetch(
      `http://localhost:8000/tweets${!!username ? `?username=${username}` : ''}`
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }

  async postTweet(text) {
    const tweet = {
      name: 'yemm',
      username: 'yemm',
      text,
      url: '',
    };

    return fetch('http://localhost:8000/tweets', {
      method: 'POST',
      body: JSON.stringify(tweet),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  }

  async deleteTweet(tweetId) {
    return fetch('http://localhost:8000/tweets/' + tweetId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async updateTweet(tweetId, text) {
    return fetch('http://localhost:8000/tweets/' + tweetId, {
      method: 'PUT',
      body: JSON.stringify({ text }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  }
}
