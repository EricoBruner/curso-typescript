import joi from "joi";
import { Music } from "../protocols/index";

export const musicSchema = joi.object<Music>({
  title: joi.string().required(),
  artist: joi.string().required(),
});
