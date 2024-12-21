import "../styles/TextButton.scss";
import React from "react";

//todo more customization parameters
export default class TextButton extends React.Component<TextButtonProps> {
	constructor(props: TextButtonProps) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <a onClick={this.props.clicked()}>{this.props.text}</a>;
	}
}

interface TextButtonProps {
	text: string,
	clicked: any
}