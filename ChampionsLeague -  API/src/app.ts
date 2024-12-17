import cors from "cors"
import express from "express";
import router from "./routes";


function createApp() {
    const app = express();

    app.use(express.json());

    app.use("/api", router)
    
    const corsOptions = {
        origin: 'http://vitor.system.com',
        methods: ['GET']
    }
    app.use(cors(corsOptions))

    return app;
}

export default createApp;