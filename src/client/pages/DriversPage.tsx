import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";

export default class DriversPage extends React.Component<DriversPageProps, DriversPageState> {
	static id = "DriversPage";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <>
			<DefaultHeader app={this.props.app}/>
			<div className={"page driversPageContainer"}>
				Drivers
			</div>
		</>;
	}
	
	componentDidMount() {}
}

interface DriversPageProps extends PageProps {}

interface DriversPageState {}