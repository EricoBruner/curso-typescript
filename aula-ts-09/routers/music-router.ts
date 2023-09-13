import { Router } from "express";
import musicController from "../controllers/music-controller";
import { musicValidator } from "../middlewares/music-validator";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", musicValidator, musicController.createMusic); // TODO: validação via Joi

export default musicRouter;
