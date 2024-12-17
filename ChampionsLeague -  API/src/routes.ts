import {Router} from "express" //Gerenciador de rotas do express
import * as PlayerController from "./controllers/player-controller"
import * as ClubController from "./controllers/clubs-controller"

const router = Router();

//Rotas do player
router.get("/players", PlayerController.getPlayer);
router.get("/players/:id", PlayerController.getPlayerById);

router.delete("/players/:id", PlayerController.deletePlayer)

router.patch("/players/:id", PlayerController.updatePlayer)

router.post("/players", PlayerController.postPlayer);

//Rotas do Club
router.get("/clubs", ClubController.getClubs);
export default router