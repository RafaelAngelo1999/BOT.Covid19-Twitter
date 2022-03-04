import { ETwitterStreamEvent, TweetStream } from "twitter-api-v2";
import TwitterService from "./services/TwitterService";
import "dotenv/config";
import CovidService from "./services/CovidService";

let stream = undefined;

const start = async () => {
  stream = await TwitterService.obterDadosTwitterPorFiltro(
    String(process.env.PESQUISA)
  );

  stream.on(ETwitterStreamEvent.Data, (eventData: any) =>
    handleAcoesTwitte(eventData)
  );
  await stream.connect({ autoReconnect: true, autoReconnectRetries: Infinity });
  stream.keepAliveTimeoutMs = Infinity;
};

const handleAcoesTwitte = async (eventData: any) => {
  const { id_str, in_reply_to_user_id_str, in_reply_to_status_id_str } =
    eventData;
  const { screen_name } = eventData.user;

  if (in_reply_to_user_id_str && !in_reply_to_status_id_str) {
    await TwitterService.retweetPostagemPorId(id_str);
    await TwitterService.likePostagemPorId(id_str);
    const comentario = await CovidService.obterMensagemCovid(screen_name);
    await TwitterService.comentarioPostagemPorId(comentario, id_str);
  }
};

start();
