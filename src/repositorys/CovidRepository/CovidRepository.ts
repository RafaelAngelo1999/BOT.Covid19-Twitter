import axiosInstance from "../../shared/utils/AxiosInstance";

const URL_DADOS_COVID_BRASIL = "/brazil";

class CovidRepository {
  obterDadosCovidBrasil = async () => {
    return await axiosInstance
      .get(URL_DADOS_COVID_BRASIL)
      .then((resposta) => resposta && resposta.data.data)
      .catch((erro) => erro);
  };
}

export default new CovidRepository();
