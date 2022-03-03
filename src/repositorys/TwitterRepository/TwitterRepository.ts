import clientTwitterInstance from "../../shared/utils/clientTwitterInstance";

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

  comentarioPostagemPorId = async (comentario: string, idPostagem: string) => {
    return await clientTwitterInstance.v2
      .reply(comentario, idPostagem)
      .then((resposta) => resposta && resposta.data)
      .catch((erro) => erro);
  };

  obterDadosTwitterPorFiltro = async (filtro: string) => {
    return await clientTwitterInstance.v1
      .filterStream({
        track: filtro,
      })
      .then((resposta) => resposta)
      .catch((erro) => erro);
  };
}

export default new TwitterRepository();
