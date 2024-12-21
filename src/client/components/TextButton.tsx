import "../styles/TextButton.scss";
import React from "react";

//todo more customization parameters
export default class TextButton extends React.Component<TextButtonProps> {
	constructor(props: TextButtonProps) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <a className={"textButton"} onClick={this.props.onClick}>{this.props.text}</a>;
	}
}

interface TextButtonProps {
	text: string,
	onClick: () => void
}