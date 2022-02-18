import CovidRepository from "../repositorys/CovidRepository/CovidRepository";
import CovidMapper from "../repositorys/CovidRepository/mappers/CovidMapper";
import { CovidModel } from "../repositorys/CovidRepository/models/CovidModel";
import {
  EMOJI_AMBULANCIA,
  EMOJI_BRASIL,
  EMOJI_DADOS,
} from "../shared/constantes/Emoji";

class CovidService {
  async obterMensagemCovid(nomeSolicitante: string) {
    const covidModel = CovidMapper.mapperDtoToModel(
      await CovidRepository.obterDadosCovidBrasil()
    );
    return this.montarMensagemCovid(covidModel, nomeSolicitante);
  }

  private montarMensagemCovid(covidModel: CovidModel, nomeSolicitante: string) {
    return `Olá ${nomeSolicitante} Dados Covid-19 ${EMOJI_BRASIL}
    \n\n ${EMOJI_DADOS} ${covidModel.casos} casos confirmados.
    \n ${EMOJI_BRASIL} ${covidModel.mortes} mortes.
    \n ${EMOJI_AMBULANCIA} ${covidModel.recuperado} recuperadas.
    \n ${EMOJI_BRASIL} ${covidModel.ultimaAtualizacao} ultima atualização.
    \n\nMais informação: covid.saude.gov.br
    \n#FiqueEmCasa`;
  }
}

export default new CovidService();
