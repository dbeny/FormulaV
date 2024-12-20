import React from "react";

export default class NotFoundPage extends React.Component<NotFoundProps, any> {
	static id = "NotFound";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	render() {
		return <>
			<h1>404</h1>
			Could not resolve {this.props.path}
		</>;
	}
}
interface NotFoundProps {
	path: string
}