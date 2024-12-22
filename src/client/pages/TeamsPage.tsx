import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";

export default class TeamsPage extends React.Component<TeamsPageProps, TeamsPageState> {
	static id = "TeamsPage";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <>
			<DefaultHeader app={this.props.app} api={this.props.api}/>
			<div className={"page teamsPageContainer"}>
				Teams
			</div>
		</>;
	}
	
	componentDidMount() {}
}

interface TeamsPageProps extends PageProps {}

interface TeamsPageState {}