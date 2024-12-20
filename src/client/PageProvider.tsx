import React from "react";
import {PageProps} from "./App";

type Page = React.JSX.Element;
type PageProvider = (path: string, props: PageProps) => (Page | null);

let providers: PageProvider[] = [];
export function register(provider: PageProvider | null) {
	if (provider) providers.push(provider);
}

export function startsWith(param: string, provider: PageProvider) {
	return (path: string, props: PageProps) => path.startsWith(param) ? provider(path.substring(param.length), props) : null;
}

export function singleNumber(prefix: string, provider: (num: number, props: PageProps) => (Page | null)): PageProvider {
	return (path: string, props: PageProps)=> {
		if (!path.startsWith(prefix)) return null;
		let num = parseInt(path.substring(prefix.length));
		if (isNaN(num)) return null;
		return provider(num, props);
	}
}

export function parsePath(path: string, props: PageProps): Page {
	for (let provider of providers) {
		let res = provider(path, props);
		if (res) {
			console.log("found " + res.key);
			return res;
		}
	}
	return <NotFoundPage key={"notfound"} path={path}/>;
}

class NotFoundPage extends React.Component<NotFoundProps, any> {
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	render() {
		return <h1>Could not resolve {this.props.path}</h1>
	}
}
interface NotFoundProps {path: string}

class Test extends React.Component<TestProps, any> {
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	render() {
		console.log(this.props);
		return <h1>remaining: '{this.props.rest}'</h1>
	}
}
class Test2 extends React.Component<Test2Props, any> {
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	render() {
		return <h1>id: '{this.props.id}'</h1>
	}
}
interface TestProps extends PageProps {rest: string}
interface Test2Props extends PageProps {id: number}

register(startsWith("/rest", (path, props)=><Test  key={"rest"} rest={path} app={props.app}/>))
register(singleNumber("/id/", (id, props)=><Test2 key={"id"} id={id} app={props.app}/>))