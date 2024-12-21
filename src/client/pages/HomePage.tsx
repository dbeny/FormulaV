import React from "react";
import {PageProps} from "../App";
import "../styles/HomePage.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";

export default class HomePage extends React.Component<HomePageProps, HomePageState> {
	static id = "HomePage";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <>
			<DefaultHeader app={this.props.app}/>
			<div className={"homePageContainer"}>
				<img src={defaultLogo} alt={""}/>
				Work in progress...
			</div>
		</>;
	}
	
	componentDidMount() {}
}

interface HomePageProps extends PageProps {

}

interface HomePageState {

}