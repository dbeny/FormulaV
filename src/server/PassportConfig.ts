import * as passportLocal from "passport-local";
import passport from "passport";
import Mongobase from "./mongo/Mongobase";
import bcrypt from "bcryptjs";

export default function initializePassport() {
	passport.use(new passportLocal.Strategy({
		usernameField: "email"
	}, async (email: string, password: string, done)=> {
		try {
			if (!email) done(null, false);
			
			const user = await Mongobase.collections.users?.findOne({email: email});
			if (user && user.email == email
				&& await bcrypt.compare(password, user.password.toString())) {
				done(null, user);
			} else done(null, false, {message: "Incorrect credentials"});
		} catch (e) {done(e)}
	}));
	passport.serializeUser((user: any, done: any) => {
		done(null, user);
	});
	passport.deserializeUser(async (user: any, done: any) => {
		const usr = await Mongobase.collections.users?.findOne({
			email: user.email
		});
		done(null, usr);
	});
}