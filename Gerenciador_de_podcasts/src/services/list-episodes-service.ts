import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };

    const data  = await repositoryPodcasts();

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent //if ternario
    responseFormat.body = data;

    return responseFormat;
};