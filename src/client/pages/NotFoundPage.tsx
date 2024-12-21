import React from "react";
import "../styles/Default.scss";
import {PageProps} from "../App";

export default class NotFoundPage extends React.Component<NotFoundProps, any> {
	static id = "NotFound";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	render() {
		return <div className={"notFound"}>
			<h1>404</h1>
			Could not resolve <span>{this.props.path}</span>
		</div>;
	}
}
interface NotFoundProps extends PageProps {
	path: string
}