import * as http from 'http'
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    //http://localhost:3333/api/episode?p=venus
    const baseUrl = request.url?.split("?")[0] //?? -> Ou

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(request,response);
    }
    
    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(request,response);
    }
}