import React from "react";
import {PageProps} from "../App";
import "../styles/NeonButton.scss";

export default class NeonButton extends React.Component<NeonButtonProps> {
	constructor(props: NeonButtonProps) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <a className={"neonButton " + ("neonButton"+this.props.color)} onClick={this.props.onClick}>{this.props.text}</a>;
	}
}

export type NeonButtonColor = "Red" | "Blue" | "FV" | "White";

interface NeonButtonProps extends PageProps {
	text: string,
	onClick: () => void,
	color: NeonButtonColor
}