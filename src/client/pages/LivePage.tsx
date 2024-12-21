import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";

export default class LivePage extends React.Component<LivePageProps, LivePageState> {
	static id = "LivePage";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <>
			<DefaultHeader app={this.props.app}/>
			<div className={"page livePageContainer"}>
				Live
			</div>
		</>;
	}
	
	componentDidMount() {}
}

interface LivePageProps extends PageProps {}

interface LivePageState {}