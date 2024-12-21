import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";

export default class HistoryPage extends React.Component<HistoryPageProps, HistoryPageState> {
	static id = "HistoryPage";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <>
			<DefaultHeader app={this.props.app}/>
			<div className={"page historyPageContainer"}>
				History
			</div>
		</>;
	}
	
	componentDidMount() {}
}

interface HistoryPageProps extends PageProps {}

interface HistoryPageState {}