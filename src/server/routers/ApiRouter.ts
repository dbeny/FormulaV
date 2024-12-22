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

//todo send user data to a page state (prob: AppState -> all state should extend or all relevant component should use)
apiRouter.get("/redirect", passport.authenticate("discord"), (_req: Request, res: Response) => {
	res.redirect("/dashboard");
});

apiRouter.post("/register", ifNotAuthenticated, (req: Request, res: Response) => {
	res.status(403).send("Under construction");
});

apiRouter.get("/auth_status", ifAuthenticated, (req: Request, res: Response) => {
	res.sendStatus(200);
});