import { TwitterApi } from "twitter-api-v2";

const clientTwitterInstance = new TwitterApi({
  appKey: String(process.env.APP_KEY),
  appSecret: String(process.env.APP_SECRET),
  accessToken: String(process.env.ACCESS_TOKEN),
  accessSecret: String(process.env.ACCESS_SECRET),
});

export default clientTwitterInstance;
