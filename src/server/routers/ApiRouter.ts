import express, {Request, Response, Router} from "express";
import passport from "passport";
import {v1Router} from "./v1/V1Router";

export const apiRouter: Router = express.Router(/*{mergeParams: true}*/);

export function ifAuthenticated(req: Request, res: Response, next: any) {
	if (req.isAuthenticated()) return next();
	else res.sendStatus(401);
}

export function ifNotAuthenticated(req: Request, res: Response, next: any) {
	if (req.isAuthenticated()) res.sendStatus(401);
	else next();
}

apiRouter.get("/login", ifNotAuthenticated, passport.authenticate("discord"));

apiRouter.get("/redirect", passport.authenticate("discord"), (req: Request, res: Response) => {
	res.status(200).redirect("/dashboard");
});

apiRouter.post("/logout", ifAuthenticated, (req: Request, res: Response) => {
	req.session.destroy((error) => {
		if (error) return res.status(500).json({error: "Failed to logout"});
		res.clearCookie("connect.sid");
		res.status(200).json({message: "Logged out successfully"});
	});
});

apiRouter.use("/v1", v1Router);