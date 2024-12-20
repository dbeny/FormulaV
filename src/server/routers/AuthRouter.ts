import express, {Request, Response, Router} from "express";
import Mongobase from "../mongo/Mongobase";
import path from "path";

export const authRouter: Router = express.Router(/*{mergeParams: true}*/);

function ifAuthenticated(req: Request, res: Response, next: any) {
	if (req.isAuthenticated()) return next();
	else res.redirect("/");
}

function ifNotAuthenticated(req: Request, res: Response, next: any) {
	if (req.isAuthenticated()) res.redirect("/");
	else next();
}

authRouter.get("/", ifNotAuthenticated, (_req: Request, res: Response) => {
	res.sendFile(path.resolve("./client/index.html"));
});

authRouter.post("/login", ifNotAuthenticated, (_res: Request, res: Response) => {
	res.status(403).send("Not yet");
});

authRouter.post("/register", ifNotAuthenticated, (_res: Request, res: Response) => {
	res.status(403).send("Not yet");
});