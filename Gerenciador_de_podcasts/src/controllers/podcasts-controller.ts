import { IncomingMessage, ServerResponse} from 'http';

import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { contentType } from '../utils/content-type';
import { FilterPodcastModel } from '../models/filter-podcast-model';

const DEFAULT_CONTENT = {"content-type": contentType.JSON};


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {


    const content: FilterPodcastModel = await serviceListEpisodes()
    res.writeHead(StatusCode.OK,DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body))
    res.end();
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode,DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));
    res.end();
}