import * as mongo from "mongodb";
import DiscordUserModel from "./models/Users";

export default class Mongobase {
	static collections: {
		users?: mongo.Collection
	} = {};
	
	static async connect() {
		let connectionString = process.env.MONGO_CONNECTION_STRING!;
		
		const client: mongo.MongoClient = new mongo.MongoClient(connectionString);
		await client.connect();
		const db: mongo.Db = client.db(process.env.MONGO_DB_NAME);
		
		let usersCollectionString = process.env.MONGO_COLLECTION_USERS!;
		this.collections.users = db.collection(usersCollectionString);
	}
}