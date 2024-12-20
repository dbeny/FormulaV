import React from "react";
import "./styles/default.scss";
import {parsePath} from "./PageProvider";

export default class App extends React.Component<AppProps, AppState> {
	constructor(props: any) {
		super(props);
		this.state = {
			page: this.props.page,
			pageData: null
		};
	}
	
	render() {
		let props: PageProps = { app: this };
		return parsePath(this.state.page, props);
	}
	
	//todo data being 'null' resets the pageData
	public setPage(path: string, save: boolean, data: any) {
		if (save) window.history.pushState(data, "", path);
		this.setState({...this.state, page: path, pageData: data});
	}
	
	componentDidMount() {}
}

interface AppProps {
	page: string
}

interface AppState {
	page: string
	pageData: any;
}

export interface PageProps {
	app: App
}