import {ObjectId} from "mongodb";

export default class UserModel {
	constructor(public username: string, public email: string, public password: string, public license: string, public id?: ObjectId) {}
}