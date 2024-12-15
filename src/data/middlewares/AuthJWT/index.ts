import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { GetError } from "../../constants";

export const AuthJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1] ?? "";
    const secret = process.env.SECRET ?? "";
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(401).json(GetError(error, "Ocorreu um erro!"));
  }
};
