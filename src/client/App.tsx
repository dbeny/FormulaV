import React from "react";
import "./styles/Default.scss";
import {parsePath} from "./PageProvider";
import Api from "./Api";

export default class App extends React.Component<AppProps, AppState> {
	private readonly api: Api;
	
	constructor(props: any) {
		super(props);
		this.state = {
			page: this.props.page,
			pageData: null
		};
		this.api = new Api();
	}
	
	render() {
		let props: PageProps = {
			app: this,
			api: this.api
		};
		return parsePath(this.state.page, props);
	}
	
	//todo data being 'null' resets the pageData
	public setPage(path: string, save: boolean, data: any) {
		if (save) window.history.pushState(data, "", path);
		this.setState({...this.state, page: path, pageData: data});
	}
	
	componentDidMount() {
		/*does not work
	    addEventListener("popstate", (e) =>
			this.setPage(window.location.pathname, true, null));*/
	}
}

interface AppProps {
	page: string
}

interface AppState {
	page: string
	pageData: any;
}

export interface PageProps {
	app: App,
	api: Api
}