import TwitterRepository from "../repositorys/TwitterRepository/TwitterRepository";

const TWEET_FIELDS =
  "author_id,created_at,entities,geo,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source";

class TwitterService {
  async retweetPostagemPorId(idPostagem: string) {
    return await TwitterRepository.retweetPostagemPorId(idPostagem);
  }

  async likePostagemPorId(idPostagem: string) {
    return await TwitterRepository.likePostagemPorId(idPostagem);
  }

  async comentarioPostagemPorId(idPostagem: string) {
    return await TwitterRepository.comentarioPostagemPorId(idPostagem);
  }

  //   async obterDadosTwitterPorFiltro(filtro: string, ) {
  //     const dataConectada = await TwitterRepository.comentarioPostagemPorId(filtro);
  //     dataConectada('data', retweet)
  //   }
}

export default new TwitterService();
