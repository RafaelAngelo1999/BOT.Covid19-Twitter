import ClientTwitterInstance from "../../shared/utils/ClientTwitterInstance";

const TwitterRepository = {
  retweetPostagemPorId: async (idPostagem: string) => {
    return await ClientTwitterInstance.v2
      .retweet(String(process.env.TWITTER_ID), idPostagem)
      .then((resposta) => resposta && resposta.data)
      .catch((erro) => erro);
  },

  likePostagemPorId: async (idPostagem: string) => {
    return await ClientTwitterInstance.v2
      .like(String(process.env.TWITTER_ID), idPostagem)
      .then((resposta) => resposta && resposta.data)
      .catch((erro) => erro);
  },

  comentarioPostagemPorId: async (comentario: string, idPostagem: string) => {
    return await ClientTwitterInstance.v2
      .reply(comentario, idPostagem)
      .then((resposta) => resposta && resposta.data)
      .catch((erro) => erro);
  },

  obterDadosTwitterPorFiltro: async (filtro: string) => {
    return await ClientTwitterInstance.v1
      .filterStream({
        track: filtro,
      })
      .then((resposta) => resposta)
      .catch((erro) => erro);
  },
};

export default TwitterRepository;
