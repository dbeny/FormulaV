import express, {Request, Response, Router} from "express";
import Mongobase from "../mongo/Mongobase";
import path from "path";

export const apiRouter: Router = express.Router(/*{mergeParams: true}*/);

function ifAuthenticated(req: Request, res: Response, next: any) {
	if (req.isAuthenticated()) return next();
	else res.redirect("/");
}

function ifNotAuthenticated(req: Request, res: Response, next: any) {
	if (req.isAuthenticated()) res.redirect("/");
	else next();
}

apiRouter.get("/", ifNotAuthenticated, (_req: Request, res: Response) => {
	res.sendFile(path.resolve("./client/index.html"));
});

apiRouter.get("/login", ifNotAuthenticated, (_res: Request, res: Response) => {
	res.status(403).send("Not yet");
});

apiRouter.post("/register", ifNotAuthenticated, (_res: Request, res: Response) => {
	res.status(403).send("Not yet");
});