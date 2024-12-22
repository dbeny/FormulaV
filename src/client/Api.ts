export default class Api {
	private readonly sessionId: string | null;
	
	constructor() {
		this.sessionId = this.getCookie("sessionId");
	}
	
	isAuthenticated() {
		return (this.sessionId != null);
	}
	
	//todo update to cookie-parser
	getCookie(name: string): string | null {
		const cookies = document.cookie.split("; ");
		for (const cookie of cookies) {
			const [key, value] = cookie.split("=");
			if (key == name) return decodeURIComponent(value);
		}
		return null;
	}
}