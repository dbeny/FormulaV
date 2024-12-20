import React from "react";
import {PageProps} from "./App";
import NotFoundPage from "./pages/NotFoundPage";

type Page = React.JSX.Element;
type PageProvider = (path: string, props: PageProps) => (Page | null);

let providers: PageProvider[] = [];
export function register(provider: PageProvider | null) {
	if (provider) providers.push(provider);
}

export function equals(param: string, provider: PageProvider) {
	return (path: string, props: PageProps) => path == param ? provider(path, props) : null;
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
		if (res) return res;
	}
	return <NotFoundPage key={"NotFound"} path={path}/>;
}