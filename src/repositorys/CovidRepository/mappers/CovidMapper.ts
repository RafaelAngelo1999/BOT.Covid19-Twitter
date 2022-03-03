import { CovidModel } from "./../models/CovidModel";
import { CovidDto } from "./../interfaces/CovidDto";
import moment from "moment";

class CovidMapper {
  mapperDtoToModel(covidDto: CovidDto): CovidModel {
    const covidModel: CovidModel = {
      pais: covidDto?.country,
      confirmados: covidDto?.confirmed,
      mortes: covidDto?.deaths,
      ultimaAtualizacao: moment(covidDto?.updated_at).format(
        "DD/MM/YYYY HH:mm:ss"
      ),
    };

    return covidModel;
  }
}

export default new CovidMapper();
