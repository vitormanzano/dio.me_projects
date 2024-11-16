import fs from "fs"
import path from "path"
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcast.json"); //__dirname -> coloca o endereco ate a pasta src

export const repositoryPodcasts = async (podcastName?: string ): Promise<PodcastModel[]> => {
    const language  = "utf-8"

    const rawData = fs.readFileSync(pathData, language);  //Vai ler o arquivo
    let jsonFile = JSON.parse(rawData) //Transforma em um json

    if (podcastName){
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.podcastName === podcastName
        );
    }
    return jsonFile
}