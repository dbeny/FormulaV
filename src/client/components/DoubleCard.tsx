import React from "react";
import "../styles/DoubleCard.scss";

export default class DoubleCard extends React.Component<DoubleCardProps> {
	constructor(props: DoubleCardProps) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <div className={"doubleCard"}>
			{this.props.imageLeft ? this.image(this.props.image) : this.text(this.props.title, this.props.content)}
			{this.props.imageLeft ? this.text(this.props.title, this.props.content) : this.image(this.props.image)}
		</div>;
	}
	
	image(src: string) {
		return <div className={"doubleCardImage"}>
			<img src={src} alt={""}/>
		</div>;
	}
	
	
	text(title: string, content: string) {
		return <div className={"doubleCardText"}>
			<div>
				<h1>{title}</h1>
				<p>{content}</p>
			</div>
		</div>;
	}
}

interface DoubleCardProps {
	imageLeft: boolean,
	title: string,
	content: string,
	image: string
}