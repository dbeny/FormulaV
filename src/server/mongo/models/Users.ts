import {ObjectId} from "mongodb";

export default class DiscordUserModel {
	constructor(public username: string, public discordId: string, public avatar: string, public _id?: ObjectId) {}
}