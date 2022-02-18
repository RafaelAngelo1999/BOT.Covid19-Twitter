import axios from "../../shared/utils/AxiosInstance";
import clientTwitterInstance from "../../shared/utils/ClientTwitterInstance";
import { UsuarioAutenticadoDto } from "./interfaces/UsuarioAutenticadoDto";

class TwitterRepository {
  retweetPostagemPorId = async (idPostagem: string) => {
    return await clientTwitterInstance.v2
      .retweet(String(process.env.TWITTER_ID), idPostagem)
      .then((resposta) => resposta && resposta.data)
      .catch((erro) => erro);
  };

  salvarTokenUsuario = async (tokenJwt: string, idSessao: string) => {
    localStorage.setItem(chaveArmazenamentoToken, tokenJwt);
    localStorage.setItem(chaveArmazenamentoIdSessao, idSessao);
  };

  removerTokenUsuario = async () => {
    localStorage.removeItem(chaveArmazenamentoToken);
    localStorage.removeItem(chaveArmazenamentoIdSessao);
  };

  obterTokenUsuario = async () => {
    return localStorage.getItem(chaveArmazenamentoToken);
  };

  obterIdSessaoUsuario = async () => {
    return localStorage.getItem(chaveArmazenamentoIdSessao);
  };
}

export default new AutenticacaoRepository();
