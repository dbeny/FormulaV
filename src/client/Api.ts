import DiscordUserData from "fv-shared/interface/DiscordUserData";

export default class Api {
	private userData: DiscordUserData | null;
	public onValidationChange: (() => void) | null = null;
	
	constructor() {
		this.userData = null;
		this.validateSession().then((userData) => {
			this.userData = userData;
			console.log(`UserData is now: ${JSON.stringify(this.userData)}`);
			if (this.onValidationChange) this.onValidationChange();
		});
	}
	
	isAuthenticated() {
		return (this.userData != null);
	}
	
	async validateSession(): Promise<DiscordUserData | null> {
		console.log("Validating session...");
		let res = await fetch("/api/v1/sync_user", {credentials: "include"});
		console.log(`Synchronizing user ${res.status} ${res.statusText}`);
		if (res.status == 200) {
			let body = await res.json();
			console.log(`Successfully validated user ${body.username}`);
			return {
				username: body.username,
				discordId: body.discordId,
				avatar: body.avatar
			}
		}
		return null;
	}
}