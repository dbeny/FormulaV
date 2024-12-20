import {register, startsWith, equals} from "./PageProvider";
import HomePage from "./pages/HomePage";

const Registry = {
	[HomePage.id]: equals("/", (path, props) => <HomePage key={HomePage.id} app={props.app}/>)
} as const;

export default class PageRegistry {
	init() {
		for (let page in Registry) {
			register(Registry[page]);
		}
	}
}