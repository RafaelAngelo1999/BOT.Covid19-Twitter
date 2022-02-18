import clientTwitterInstance from "../../shared/utils/ClientTwitterInstance";

class TwitterRepository {
  retweetPostagemPorId = async (idPostagem: string) => {
    return await clientTwitterInstance.v2
      .retweet(String(process.env.TWITTER_ID), idPostagem)
      .then((resposta) => resposta && resposta.data)
      .catch((erro) => erro);
  };

  likePostagemPorId = async (idPostagem: string) => {
    return await clientTwitterInstance.v2
      .like(String(process.env.TWITTER_ID), idPostagem)
      .then((resposta) => resposta && resposta.data)
      .catch((erro) => erro);
  };

  comentarioPostagemPorId = async (idPostagem: string) => {
    return await clientTwitterInstance.v2
      .retweet(String(process.env.TWITTER_ID), idPostagem)
      .then((resposta) => resposta && resposta.data)
      .catch((erro) => erro);
  };

  obterDadosTwitterPorFiltro = async (filtro: string, twwetFields: string) => {
    await clientTwitterInstance.v1.stream
      .getStream("statuses/filter.json", { track: "JavaScript,TypeScript" })

      .then((resposta) => resposta && resposta.data)
      .catch((erro) => erro);
    const sampleFilterv2 = await clientTwitterInstance.v2.getStream(
      "tweets/sample/stream"
    );
  };
}

export default new TwitterRepository();
