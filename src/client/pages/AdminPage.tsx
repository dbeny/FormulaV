import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";
import NeonButton from "../components/NeonButton";

export default class AdminPage extends React.Component<AdminPageProps, AdminPageState> {
	static id = "AdminPage";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <>
			<DefaultHeader app={this.props.app}/>
			<div className={"page adminPageContainer"}>
				<div className={"adminPageLoginForm"}>
					<h1>Admin Login</h1>
					<div>
						<input type={"text"} placeholder={"Username"}/>
						<input type={"password"} placeholder={"Password"}/>
					</div>
					<NeonButton text={"Login"} color={"White"} onClick={() => {
					
					}} app={this.props.app}/>
				</div>
			</div>
		</>;
	}
	
	componentDidMount() {
	}
}

interface AdminPageProps extends PageProps {

}

interface AdminPageState {

}