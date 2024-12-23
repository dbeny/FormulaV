import express, {Request, Response, Router} from "express";
import {ifAuthenticated} from "../ApiRouter";
import Mongobase from "../../mongo/Mongobase";

export const v1Router: Router = express.Router();

v1Router.get("/sync_user", ifAuthenticated, async (req: Request, res: Response) => {
	// @ts-ignore
	let discordId = req.session.passport.user;
	if (!discordId) {
		res.sendStatus(400);
		return;
	}
	
	try {
		let foundUser = await Mongobase.collections.users?.findOne({discordId: discordId});
		if (!foundUser) {
			res.sendStatus(400);
			return;
		}
		
		res.status(200).json({
			username: foundUser.username,
			discordId: discordId,
			avatar: foundUser.avatar
		});
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
});