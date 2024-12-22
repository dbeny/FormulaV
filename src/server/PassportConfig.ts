import * as passportDiscord from "passport-discord";
import passport from "passport";
import Mongobase from "./mongo/Mongobase";

export function initPassportDiscord() {
	passport.use(new passportDiscord.Strategy({
		clientID: process.env.DISCORD_OAUTH_CLIENT_ID!,
		clientSecret: process.env.DISCORD_OAUTH_CLIENT_SECRET!,
		callbackURL: process.env.DISCORD_OAUTH_REDIRECT_URL!,
		scope: ["identify", "guilds"]
	}, async (accessToken, refreshToken, profile, done) => {
		let neededGuild = process.env.DISCORD_OAUTH_GUILD_ID!;
		if (!profile.guilds ||
			profile.guilds.length == 0 ||
			profile.guilds?.filter((guild) => guild.id == neededGuild).length == 0) {
			return done(`User ${profile.username} is not in the specified discord server`, false);
		}
		
		let foundUser;
		try {
			foundUser = await Mongobase.collections.users?.findOne({
				discordId: profile.id
			});
		} catch (error) {return done(error, false);}
		
		if (!foundUser) {
			try {
				let newUserData = {
					username: profile.username,
					discordId: profile.id,
					avatar: profile.avatar
				};
				let newUser = await Mongobase.collections.users?.insertOne(newUserData);
				return done(null, newUserData);
			} catch (error) {return done(error, false);}
		}
		return done(null, foundUser);
	}));
	
	passport.serializeUser((user, done) => {
		// @ts-ignore
		console.log(`Attempting to serialize user: ${JSON.stringify(user)}`);
		// @ts-ignore
		done(null, user.discordId);
	});
	
	passport.deserializeUser(async (discordId, done) => {
		try {
			let foundUser = await Mongobase.collections.users?.findOne({discordId: discordId});
			if (!foundUser) return done(null, false);
			return done(null, foundUser);
		} catch (error) {
			return done(error, false);
		}
	});
}