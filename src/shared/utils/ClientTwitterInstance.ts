import { TwitterApi } from "twitter-api-v2";
import "dotenv/config";

const clientTwitterInstance = new TwitterApi({
  appKey: String(process.env.BOT_CONSUMER_KEY),
  appSecret: String(process.env.BOT_CONSUMER_SECRET),
  accessToken: String(process.env.BOT_ACCESS_KEY),
  accessSecret: String(process.env.BOT_ACCESS_TOKEN),
});

clientTwitterInstance.readWrite;

export default clientTwitterInstance;
