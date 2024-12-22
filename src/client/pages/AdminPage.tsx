import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";
import NeonButton from "../components/NeonButton";
import LoginData from "fv-shared/interface/LoginData";

export default class AdminPage extends React.Component<AdminPageProps, AdminPageState> {
	static id = "AdminPage";
	
	constructor(props: any) {
		super(props);
		this.state = {
			loginData: {
				username: "",
				password: ""
			}
		}
	}
	
	render() {
		return <>
			<DefaultHeader app={this.props.app} api={this.props.api}/>
			<div className={"page adminPageContainer"}>
				<div className={"adminPageLoginForm"}>
					<h1>Admin Login</h1>
					<div>
						<input type={"text"} placeholder={"Username"} onInput={(e) => {
							this.updateLoginData("username", e.currentTarget.value);
						}}/><br/>
						<input type={"password"} placeholder={"Password"} onInput={(e) => {
							this.updateLoginData("password", e.currentTarget.value);
						}}/>
					</div>
					<NeonButton text={"Login"} color={"White"} onClick={async () => {
						await this.props.api.processLogin(this.state.loginData);
					}} app={this.props.app} api={this.props.api}/>
				</div>
			</div>
		</>;
	}
	
	componentDidMount() {}
	
	private updateLoginData(key: keyof AdminPageState["loginData"], value: string) {
		console.log(`key: ${key} ; val: ${value}`);
		let data = {...this.state.loginData};
		data[key] = value;
		this.setState({...this.state, loginData: data});
	}
}

interface AdminPageProps extends PageProps {

}

interface AdminPageState {
	loginData: LoginData
}