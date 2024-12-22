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

apiRouter.post("/login", ifNotAuthenticated, (req: Request, res: Response) => {
	res.status(200).json(JSON.stringify({
		message: `Hello ${req.body.username}`
	}));
});

apiRouter.post("/register", ifNotAuthenticated, (req: Request, res: Response) => {
	res.status(403).send("Not yet");
});