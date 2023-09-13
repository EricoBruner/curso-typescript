import { NextFunction, Request, Response } from "express";
import { schemaValidators } from "../validators/schema-validators";
import { musicSchema } from "../schemas/music.schemas";

export function musicValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const music = { ...req.body };

  const error = schemaValidators(musicSchema, music);

  if (error) return res.status(422).send(error);

  next();
}
