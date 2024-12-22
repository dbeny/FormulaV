import express, {Request, Response, Router} from "express";
import passport from "passport";

export const apiRouter: Router = express.Router(/*{mergeParams: true}*/);

function ifAuthenticated(req: Request, res: Response, next: any) {
	if (req.isAuthenticated()) return next();
	else res.redirect("/");
}

function ifNotAuthenticated(req: Request, res: Response, next: any) {
	if (req.isAuthenticated()) res.redirect("/");
	else next();
}

apiRouter.get("/login", passport.authenticate("discord"));

apiRouter.get("/redirect", passport.authenticate("discord"), (req: Request, res: Response) => {
	//todo 67689279-b41c-8002-b095-38ae280e3775
	res.cookie("sessionId", req.sessionID);
	res.redirect("/dashboard");
});

apiRouter.post("/register", ifNotAuthenticated, (req: Request, res: Response) => {
	res.status(403).send("Under construction");
});