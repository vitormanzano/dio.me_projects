import { IncomingMessage } from "http";
import { repositoryPodcasts } from "../repositories/podcasts-repository"
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {
    //Define a interface de retorne (Contrato)
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };
    
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcasts(queryString);

    //Verificar se tem conteúdo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent //if ternario

    responseFormat.body = data

    return responseFormat;
}