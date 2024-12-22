import LoginData from "fv-shared/interface/LoginData";

export default class Api {
	async processLogin(loginData: LoginData): Promise<void> {
		try {
			let res = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(loginData)
			});
			console.log(`processLogin: ${res.status} ${res.statusText}`);
		} catch (error) {
			console.error(error);
		}
	}
}