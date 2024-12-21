import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";

export default class SchedulePage extends React.Component<SchedulePageProps, SchedulePageState> {
	static id = "SchedulePage";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <>
			<DefaultHeader app={this.props.app}/>
			<div className={"page schedulePageContainer"}>
				Schedule
			</div>
		</>;
	}
	
	componentDidMount() {}
}

interface SchedulePageProps extends PageProps {}

interface SchedulePageState {}