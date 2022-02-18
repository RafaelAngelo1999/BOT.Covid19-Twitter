import { CovidModel } from "./../models/CovidModel";
import { CovidDto } from "./../interfaces/CovidDto";

class CovidMapper {
  mapperDtoToModel(covidDto: CovidDto): CovidModel {
    const covidModel: CovidModel = {
      pais: covidDto?.country,
      casos: covidDto?.cases,
      confirmados: covidDto?.confirmed,
      mortes: covidDto?.deaths,
      recuperado: covidDto?.recovered,
      ultimaAtualizacao: covidDto?.updated_at,
    };

    return covidModel;
  }
}

export default new CovidMapper();
