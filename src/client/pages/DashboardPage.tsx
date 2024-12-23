import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";
import NeonButton, {NeonRedirectButton} from "../components/NeonButton";
import LoginData from "fv-shared/interface/LoginData";
import DiscordUserData from "fv-shared/interface/DiscordUserData";

export default class DashboardPage extends React.Component<DashboardPageProps, DashboardPageState> {
	static id = "DashboardPage";
	
	constructor(props: any) {
		super(props);
		this.state = {
			isAuthenticated: false
		}
	}
	
	//discord user avatar: https://cdn.discordapp.com/avatars/<userId>/<avatar>.png
	render() {
		return <>
			<DefaultHeader app={this.props.app} api={this.props.api}/>
			<div className={"page dashboardPageContainer"}>
				{this.state.isAuthenticated ? <div className={"dashboardPageContent"}>
					Logged in
				</div> : <div className={"dashboardPageLoginForm"}>
					<NeonRedirectButton text={"Login with Discord"} href={"/api/login"} color={"FV"} app={this.props.app} api={this.props.api}/>
				</div>}
			</div>
		</>;
	}
	
	componentDidMount() {
		this.props.api.onValidationChange = () => {
			this.setState({...this.state, isAuthenticated: this.props.api.isAuthenticated()});
		}
		
		if (this.props.api.isAuthenticated()) {
			this.setState({...this.state, isAuthenticated: true});
		}
	}
	
	componentWillUnmount() {
		this.props.api.onValidationChange = null;
	}
}

interface DashboardPageProps extends PageProps {}

interface DashboardPageState {
	isAuthenticated: boolean;
}